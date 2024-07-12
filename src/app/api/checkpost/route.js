import { prisma } from "@/libs/prisma"

export async function POST(request) {
    try {
        const data = await request.json()
        if (data.id) {
            const dataPost = await prisma.post.findMany({ take: data.limit, skip: data.skip, id_user: data.id })
            return Response.json({ status: true, data: dataPost })
        } else {
            const dataPost = await prisma.post.findMany({ take: data.limit, skip: data.skip })
            return Response.json({ status: true, data: dataPost })
        }
    } catch (error) {
        return Response.json({ status: false, data: error })
    }
}