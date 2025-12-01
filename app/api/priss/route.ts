import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    return Response.json({ success: true, userCount })
  } catch (error) {
    return Response.json({ 
      success: false, 
      error: 'Prisma не работает: ' + error
    })
  }
}