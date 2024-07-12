import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    await prisma.post.create({ data })

    return Response.json({ status: true, data: data })
}