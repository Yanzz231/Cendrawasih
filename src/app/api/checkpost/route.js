import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    const dataPost = await prisma.post.findMany({ take: data.limit })

    return Response.json({ status: true, data: dataPost })
}