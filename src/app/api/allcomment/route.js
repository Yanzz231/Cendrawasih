import { prisma } from "@/libs/prisma"

export async function POST(request) {
    try {
        const data = await request.json()

        const checkData = await prisma.comment_post.findMany({
            where: {
                id_post: data.id_post
            }
        })

        return Response.json({ status: true, data: checkData })
    } catch (error) {
        return Response.json({ status: false, data: error })
    }
}