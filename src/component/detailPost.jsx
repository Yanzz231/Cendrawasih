"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function DetailPost({ id }) {
    const [data, setData] = useState([])

    useEffect(() => {
        const handleGet = async () => {
            const dataId = { id: id }
            const response = await fetch("/api/detailpost", {
                method: "POST",
                body: JSON.stringify(dataId)
            })

            const getPost = await response.json()
            console.log(getPost)
        }
        handleGet()
    }, [])

    return (
        <div className=" bg-gray-50">
            <div className="flex justify-center items-center">
                <Image className="rounded-lg mt-4" src="/image/Dummy.jpg" alt="image description" width={350} height={350} />
            </div>

            <div className="flex overflow-y-auto justify-center mt-3">
                <div className="flex items-start gap-2.5">
                    <Image className="w-8 h-8 rounded-full" src="/image/Dummy.jpg" alt="" width={350} height={350} />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Andrian</span>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">6 Minutes ago</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Reply</span>
                    </div>
                </div>
            </div>

            <div className="flex overflow-y-auto justify-center mt-3">
                <div className="flex items-start gap-2.5">
                    <Image className="w-8 h-8 rounded-full" src="/image/Dummy.jpg" alt="" width={350} height={350} />
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Andrian</span>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">6 Minutes ago</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Reply</span>
                    </div>
                </div>
            </div>
            <div className="flex overflow-y-auto justify-center mt-3">
                <div className="flex items-end gap-2.5">
                    <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Andrian</span>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">6 Minutes ago</span>
                        </div>
                        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Reply</span>
                    </div>
                    <Image className="w-8 h-8 rounded-full" src="/image/Dummy.jpg" alt="" width={350} height={350} />
                </div>
            </div>

            <div className="flex justify-center">
                <form className="py-2 w-auto px-4 mt-4 bg-gray-50">
                    <div className="flex">
                        <textarea id="comment" rows="1" className="block w-96 mt-3 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
                        <button type="submit" className="ml-auto p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
                            <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
} 