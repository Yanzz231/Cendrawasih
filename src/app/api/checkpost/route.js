import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()
    if (data.id) {
        const dataPost = await prisma.post.findMany({ where: { id_user: data.id }, take: data.limit, skip: data.skip })
        return Response.json({ status: true, data: dataPost })
    } else {
        const dataPost = await prisma.post.findMany({ take: data.limit, skip: data.skip })
        return Response.json({ status: true, data: dataPost })
    }
}