import { prisma } from "@/libs/prisma"

export async function POST(request) {
    const data = await request.json()

    const findIndexEmail = await prisma.user.findMany({
        where: { email: data.email }
    })

    if (findIndexEmail.length > 0) return Response.json({ status: false, type: "email", data: data })

    const findIndexUsername = await prisma.user.findMany({
        where: { username: data.username }
    })

    if (findIndexUsername.length > 0) return Response.json({ status: false, type: "username", data: data })

    await prisma.user.create({ data })

    return Response.json({ status: true, data: data })
}