import { prisma } from "@/libs/prisma"

export async function POST(request) {
    try {
        const data = await request.json()

        await prisma.comment_post.create({ data })

        return Response.json({ status: true, data: data })
    } catch (error) {
        return Response.json({ status: false, data: error })
    }
}