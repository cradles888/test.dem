import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

const handler = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' }
      },
      async authorize(credentials) {
        
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string }
          })
          
          if (!user) {
            return null
          }
          
          const passwordMatch = await bcrypt.compare(
            credentials.password as string,
            user.password
          )
          
          if (!passwordMatch) {
            return null
          }
          
          return {
            id: user.id,
            email: user.email,
            name: user.name
          }
        } catch (error) {
          return null
        }
      }
    })
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' }
})

export { handler as GET, handler as POST }