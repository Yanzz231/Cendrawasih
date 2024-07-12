"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function DetailPost({ id }) {
    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    const checkUser = async () => {
        const dataPost = { id_user: data.id_user }
        const response = await fetch("/api/signin", {
            method: "POST",
            body: JSON.stringify(dataPost)
        })

        const postData = await response.json()
        console.log()
        if (postData.status) {
            setUser(postData.data[0])
        }
    }

    useEffect(() => {
        const getAccount = localStorage.getItem('username');
        const getPassword = localStorage.getItem('password');

        if (getAccount !== null || getPassword !== null) {
            checkUser(getAccount, getPassword)
        }
    }, []);


    useEffect(() => {
        const handleGet = async () => {
            const dataId = { id: id }
            const response = await fetch("/api/detailpost", {
                method: "POST",
                body: JSON.stringify(dataId)
            })

            const getPost = await response.json()
            setData(getPost.data[0])
        }
        handleGet()
    }, [])

    return (
        <div className="bg-gray-50">
            <div className="sm:w-1/2 text-black sm:mx-64 py-10">
                <Image src={user.image} width={350} height={350} />
            </div>
        </div>
    )
} 