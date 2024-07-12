import { prisma } from "@/libs/prisma"

export async function POST(request) {
    try {
        const data = await request.json()

        await prisma.user.deleteMany({ where: { email: data.email, username: data.username, password: data.password } })
    
        return Response.json({ status: true, data: data })
    } catch (error) {
        return Response.json({ status: false, data: error })
    }
}