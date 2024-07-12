import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    const checkData = await prisma.like_history.deleteMany({ where: {
        id_username: data.id_username,
        id_post: data.id_post
    } })

    return Response.json({ status: true, data: checkData })
}