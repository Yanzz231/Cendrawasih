"use client"
import { textPopUp } from "@/libs/swal"
import { Heart } from "@phosphor-icons/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export const metadata = {
    title: "Detail - Cendrawasih",
    description: "Website Cendrawasih",
    icons: {
        icon: "/image/Logo_Cendrawasih.png",
        shortcut: "/image/Logo_Cendrawasih.png",
        apple: "/image/Logo_Cendrawasih.png"
    }
};

export default function DetailPost({ id }) {
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const [user1, setUser1] = useState([])
    const [like, setLike] = useState(false)
    const [like1, setLike1] = useState(0)
    const [comment, setComment] = useState([])
    const [input, setInput] = useState("")

    const inputRef = useRef()

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (input.length < 3) return textPopUp("Error", "Too short comment", "error")
        const inputComment = { id_post: data.id, value: input, username: user1.username }
        setComment(prevData => [...(prevData || []), inputComment]);

        const response = await fetch("/api/addcomment", {
            method: "POST",
            body: JSON.stringify(inputComment)
        })
        const resultRes = await response.json()
        if (resultRes.status) {
            setInput("")
        } else {
            setInput("")
        }
    }

    const router = useRouter()

    const handleLike = async (event) => {
        if (like) {
            event.preventDefault()
            const likeData = { id_username: user1.id, id_post: data.id }
            const res = await fetch("/api/removelike/", {
                method: "POST",
                body: JSON.stringify(likeData)
            })
            const res1 = await res.json()
            if (res1.status) {
                setLike(false)
                setLike1(res => res - 1)
            }
        } else {
            event.preventDefault()
            const likeData = { id_username: user1.id, id_post: data.id }
            const res = await fetch("/api/likepost/", {
                method: "POST",
                body: JSON.stringify(likeData)
            })
            const res1 = await res.json()
            if (res1.status) {
                setLike(true)
                setLike1(res => res + 1)
            }
        }
    }

    useEffect(() => {
        const handleGet = async () => {
            const dataId = { id: id }
            const response = await fetch("/api/detailpost", {
                method: "POST",
                body: JSON.stringify(dataId)
            })

            const getPost = await response.json()
            if (getPost.data[0] !== undefined) {
                setData(getPost.data[0])

                const dataPost = { id_user: getPost.data[0].id_user }
                const response = await fetch("/api/signin", {
                    method: "POST",
                    body: JSON.stringify(dataPost)
                })

                const postData = await response.json()
                if (postData.status) {
                    setUser(postData.data[0])
                }


                const dataPost1 = { username: localStorage.getItem("username"), password: localStorage.getItem("password") }
                const response1 = await fetch("/api/signin", {
                    method: "POST",
                    body: JSON.stringify(dataPost1)
                })

                const postData1 = await response1.json()
                if (postData1.status) {
                    setUser1(postData1.data[0])
                }

                const likeData = { id_username: postData1.data[0].id, id_post: getPost.data[0].id }
                const response2 = await fetch("/api/checklike/", {
                    method: "POST",
                    body: JSON.stringify(likeData)
                })
                const resultData = await response2.json()
                if (resultData.data.length !== 0) {
                    setLike(true)
                }

                const likeData1 = { id_post: getPost.data[0].id }
                const response3 = await fetch("/api/alllike/", {
                    method: "POST",
                    body: JSON.stringify(likeData1)
                })
                const resultData2 = await response3.json()
                if (resultData2.data.length !== 0) {
                    setLike1(resultData2.data.length)
                }

                const likeData2 = { id_post: getPost.data[0].id }
                const response4 = await fetch("/api/allcomment/", {
                    method: "POST",
                    body: JSON.stringify(likeData2)
                })
                const resultData3 = await response4.json()
                if (resultData3.data.length !== 0) {
                    setComment(resultData3.data)
                }
            } else {
                router.replace("/")
            }
        }
        handleGet()
    }, [])

    return (
        <div className="bg-gray-50 flex md:flex-row flex-col items-center sm:ml-72 pt-20">
            <div className="md:w-1/2 md:pr-4">
                <div className="flex flex-col justify-center ">
                    <Image className="rounded-lg flex px-3 pl-6  items-center justify-center mt-4 " src={data.image} alt="description" width={1500} height={1500} />
                    <h1 className="pl-6 px-3 font-bold text-3xl text-black mt-2">{data.title}</h1>
                    <p className="text-black pl-6 px-3 text-sm mt-4">{data.description}</p>
                </div>
            </div>
            <div className="md:w-1/2 md:pl-4">
                <div className="bg-gray-50">
                    <div className="flex justify-center items-center mt-8 mb-10">
                        {user.image === "defaultPicture" ? (
                            <Image className="rounded-full w-10 h-10" src="/image/user.jpg" width={40} height={40} alt="image description" />
                        ) : (
                            <Image className="rounded-full w-10 h-10" src={user.image} width={40} height={40} alt="image description" />
                        )}
                        <div className="ml-1 mb-1">
                            <p className="text-gray-700 text-xl">Uploaded by {user.username}</p>
                        </div>
                    </div>
                    <div className={`flex justify-center items-center mt-8 mb-8 ${like ? "text-pink-500" : "text-black"}`}>
                        <button onClick={handleLike} className="flex gap-2 items-center">
                            {like1} <Heart size={32} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center overflow-auto gap-4" style={{ maxHeight: '300px', width: '100%' }}>
                    {comment.map((res, index) => {
                        return (
                            <div key={index} className="flex items-start gap-2.5 w-full justify-center">
                                <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{res.username}</span>
                                    </div>
                                    <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{res.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* <div className="flex justify-center mt-3">
                <div className="flex items-end gap-2.5">
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Andrian</span>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">6 Minutes ago</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                        <button className="text-sm font-normal flex justify-start text-gray-500 dark:text-gray-400 hover:text-gray-700 ">Reply</button>

                    </div>
                    <Image className="w-8 h-8 rounded-full" src="/image/Dummy.jpg" alt="" width={150} height={150} />
                </div>
            </div> */}

                <div className="flex justify-center">
                    <form className="py-2 w-auto px-4 mt-4 bg-gray-50">
                        <div className="flex mx-4 items-center">
                            <textarea ref={inputRef} value={input} onChange={handleInput} id="comment" rows="1" className="block w-96 mt-3 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
                            <button onClick={handleSubmit} type="submit" className="ml-auto p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
                                <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                                </svg>
                                <span className="sr-only">Send message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}




