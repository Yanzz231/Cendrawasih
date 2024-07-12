"use client"

import { textPopUp } from "@/libs/swal"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useRef } from "react"


export default function SignUp() {

    const searchRef = useRef()
    const router = useRouter()

    const [input, setInput] = useState("")
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleInput1 = (event) => {
        setInput1(event.target.value)
    }

    const handleInput2 = (event) => {
        setInput2(event.target.value)
    }

    const handleInput3 = (event) => {
        setInput3(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (input2 !== input3) return textPopUp("Error", "Password Doesn't Match", "error")
        const data = { username: input1, email: input, password: input2, image: "defaultPicture" }
        const response = await fetch('/api/signup/', {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postUser = await response.json()
        if (postUser.status) {
            router.replace("/signin")
            setInput("")
            setInput1("")
            setInput2("")
            setInput3("")
        } else {
            if (postUser.type === "username") return textPopUp("Error", "Username Already used", "error")
            if (postUser.type === "email") return textPopUp("Error", "Email Already used", "error")
        }
    }

    const checkUser = async (user, pass) => {
        const data = { username: user, password: pass }
        const response = await fetch("/api/signin", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postData = await response.json()
        if (postData.status) {
            router.replace("/")
        }
    }

    useEffect(() => {
        const getAccount = localStorage.getItem('username');
        const getPassword = localStorage.getItem('password');

        if (getAccount !== null || getPassword !== null) {
            checkUser(getAccount, getPassword)
        }


    }, [router])

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight  md:text-2xl text-black">
                Sign Up to Cendrawasih
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="gmail" className="block mb-2 text-sm font-medium  text-black">Your Gmail</label>
                    <input ref={searchRef} value={input} onChange={handleInput} type="email" name="gmail" id="gmail" className="bg-gray-50 border border-gray-400 text-black  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="User@gmail.com" required="" />
                </div>
                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium  text-black">Your Username</label>
                    <input ref={searchRef} value={input1} onChange={handleInput1} type="text" name="username" id="username" className="bg-gray-50 border border-gray-400 text-black  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="User@gmail.com" required="" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Your Password</label>
                    <input ref={searchRef} value={input2} onChange={handleInput2} type="password" name="password" id="password" placeholder="*******" className="bg-gray-50 border text-black border-gray-400  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-black">Confirm Your Password</label>
                    <input ref={searchRef} value={input3} onChange={handleInput3} type="password" name="confrimpassword" id="confirmpassword" placeholder="*******" className="bg-gray-50 border text-black border-gray-400  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                    </div>

                <button type="submit" className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                <p className="text-sm font-light text-black ">
                    Already have account? <a href="/signin" className="font-medium text-primary-800 hover:underline ">Login</a>
                </p>
                <div><p className="text-center text-xl text-black font-weight">OR</p></div>

            </form>
        </div>
    )
}