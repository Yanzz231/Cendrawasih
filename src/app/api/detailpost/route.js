import { prisma } from "@/libs/prisma"

export async function POST(request) {
    try {
        const data = await request.json()

        const dataPost = await prisma.post.findMany({ where: { id: parseInt(data.id) } })
    
        return Response.json({ status: true, data: dataPost })
    } catch (error) {
        return Response.json({ status: false, data: error })
    }
}