"use client"

import { textPopUp } from "@/libs/swal"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useRef } from "react"


export default function Signin() {

    const searchRef = useRef()
    const router = useRouter()

    const [input, setInput] = useState("")
    const [input1, setInput1] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleInput1 = (event) => {
        setInput1(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = { username: input, password: input1 }
        const response = await fetch('/api/signin', {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postUser = await response.json()
        if(postUser.status) {
            router.replace("/")
        } else if(postUser.type === "user") {
            textPopUp("Error", "Username Doesn't Exist", "error")
        } else {
            textPopUp("Error", "Username Doesn't Exist", "error")
        }
    }

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight  md:text-2xl text-black">
                Welcome To Cendrawasih
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="gmail" className="block mb-2 text-sm font-medium  text-black">Your Gmail</label>
                    <input ref={searchRef} value={input} onChange={handleInput} type="text" name="gmail" id="gmail" className="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="User@gmail.com" required="" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                    <input ref={searchRef} value={input1} onChange={handleInput1} type="password" name="password" id="password" placeholder="*******" className="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="rememberme" aria-describedby="rememberme" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 p-1">Remember me</label>
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                </div>
                <button type="submit" className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign In</button>
                <p className="text-sm font-light text-black ">
                    Don’t have an account yet? <a href="/signup" className="font-medium text-primary-800 hover:underline ">Sign up</a>
                </p>
            </form>
        </div>
    )
}