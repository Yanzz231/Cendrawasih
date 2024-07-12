import { prisma } from "@/libs/prisma"

export async function POST(request) {
    try {
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
    } catch (error) {
        return Response.json({ status: false, data: error })
    }
}