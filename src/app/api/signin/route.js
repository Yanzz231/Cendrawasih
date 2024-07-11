import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    const email = await prisma.user.findMany({
        where: { email: data.username, password: data.password }
    })

    if (email.length === 0) {
        const user = await prisma.user.findMany({
            where: { username: data.username, password: data.password }
        })

        if (user.length === 0) return Response.json({ status: false, type: "user", data: data })
        else return Response.json({ status: true, data: data })

    } else {
        return Response.json({ status: true, data: data })
    }

}