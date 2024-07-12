import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    const dataPost = await prisma.user.updateMany({
        where: { id: parseInt(data.id) },
        data: { 
            username: data.username, 
            email: data.email, 
            image: data.image 
        }
    })

    return Response.json({ status: true, data: dataPost })
}