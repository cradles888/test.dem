export { signIn, signOut } from 'next-auth/react'
import { getServerSession } from 'next-auth'

export const auth = getServerSession

