"use client"

import { House, Globe, FilePlus, User, SignIn, SignOut } from "@phosphor-icons/react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"


export default function SideBar() {

    const [button, setButton] = useState(false)
    const [user, setUser] = useState([])

    const sidebarRef = useRef(null)
    const router = useRouter()

    const handleButton = () => {
        setButton(!button)
    }

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setButton(false)
        }
    }

    const handleSignOut = async (event) => {
        event.preventDefault()
        router.replace("/signin")
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }

    const checkUser = async (user, pass) => {
        const data = { username: user, password: pass }
        const response = await fetch("/api/signin", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postData = await response.json()
        if (postData.status) {
            setUser(postData.data)
        }
    }

    useEffect(() => {

        const getAccount = localStorage.getItem('username');
        const getPassword = localStorage.getItem('password');

        if (getAccount !== null || getPassword !== null) {
            checkUser(getAccount, getPassword)
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <>
            <button onClick={handleButton} data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar" ref={sidebarRef} className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${button ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4  bg-gray-50 flex justify-between flex-col">
                    <div>
                        <div className="flex justify-center items-center mb-4">
                            <Image className="rounded-lg w-20 h-20" width={350} height={350} src="/image/Logo_Cendrawasih.png" alt="" />
                        </div>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-blue-600 hover:text-white">
                                    <House size={28} />
                                    <span className="ms-3">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-blue-600 hover:text-white">
                                    <Globe size={28} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Explore</span>
                                </a>
                            </li>
                            <li>
                                <a href="/create" className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-blue-600 hover:text-white">
                                    <FilePlus size={28} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Create</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-blue-600 hover:text-white">
                                    <User size={28} />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                                </a>
                            </li>
                        </ul>
                    </div>


                    <ul className="pt-4 mt-4 space-y-2 font-medium">
                        {user.length === 0 ? (<li>
                            <a href="/signin" className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-600 hover:text-white">
                                <SignIn size={28} />
                                <button className="ms-3">Sign In</button>
                            </a>
                        </li>) : (<li>
                            <a className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-600 hover:text-white">
                                <SignOut size={28} />
                                <button onClick={handleSignOut} className="ms-3">Sign Out</button>
                            </a>
                        </li>)}
                    </ul>
                </div>
            </aside>
        </>
    )
}