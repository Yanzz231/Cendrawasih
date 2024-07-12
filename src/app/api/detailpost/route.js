import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    const dataPost = await prisma.post.findMany({ where: { id: data.id } })

    return Response.json({ status: true, data: dataPost })
}