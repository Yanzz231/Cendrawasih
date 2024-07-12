"use client"

import Image from "next/image"
import { useState, useEffect } from "react"


export default function Profile() {

    const [user, setUser] = useState([])

    const checkUser = async (user, pass) => {
        const data = { username: user, password: pass }
        const response = await fetch("/api/signin", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postData = await response.json()
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
    }, [])

    return (
        <div className="bg-gray-50 sm:ml-64">
            <div className="justify-center flex">
                {user.image === "defaultPicture" ? (<Image className="rounded-full w-44 h-44 mt-8 justify-center flex text-center" src="/image/user.jpg" width={350} height={350} alt="image description" />) :
                    (<Image className="rounded-full w-44 h-44 mt-8 justify-center flex text-center" src={user.image} width={350} height={350} alt="image description" />)}
            </div>
            <div>
                <p className="text-4xl font-extrabold text-center mt-4 text-black">{user.username}</p>
                <p className="text-2x1 text-gray-500 text-center mt-2">{user.email}</p>
            </div>
            <div className=" flex justify-center mt-2">
                <a href="/editprofile" type="button" className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-md rounded-full text-sm me-2 mb-2 px-5 py-2.5 text-center ">Edit Profil</a>
            </div>
        </div>
    )
}