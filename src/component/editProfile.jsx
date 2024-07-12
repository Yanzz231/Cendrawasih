"use client"

import { textPopUp } from "@/libs/swal"
import Image from "next/image"
import { useRef, useState } from "react"

export default function EditProfile() {

    const inputRef = useRef()

    const [input, setInput] = useState("")
    const [input1, setInput1] = useState("")
    const [preview, setPreview] = useState(null)
    const [file, setFile] = useState(null)


    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleInput1 = (event) => {
        setInput1(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!file) return textPopUp("Error", "Please upload image first", "error")
        if (input.length < 5 || input1.length < 10) return textPopUp("Error", "Fill the empty one", "error")
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('https://api.imgbb.com/1/upload?key=ab9b33a25718ee58d1cae657b972f189', {
            method: 'POST',
            body: formData,
            onprogress: (e) => {
                console.log(e)
                const progress = Math.round((e.loaded * 100) / e.total);
                setUploadProgress(progress);
            },
        });

        
        const dataPost = await response.json();

        const dataResult = { image: dataPost.data.url.replace("https://i.ibb.co", "https://i.ibb.co.com"), username: input, email: input1 }

        console.log(input, input1)

        setInput("")
        setInput1("")
        setPreview(null)
        setFile(null)
        setUploadProgress(0)
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 5242880) {
            return textPopUp("Error", "Biggest Size File", "error")
        }
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
            return textPopUp("Error", "Only Image", "error")
        }
        setFile(file)
        setPreview(URL.createObjectURL(file))
    }

    return (
        <section className="bg-white">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <h1 className="text-xl font-bold text-center mt-5 leading-tight tracking-tight md:text-2xl text-black">
                    Edit Your Profile
                </h1><div>
                    <div className="flex items-center pt-4 justify-center">
                        {preview ? (<Image className="h-auto max-w-full w-24 flex rounded-lg" src={preview} width={350} height={350} alt="image description" />) : (<Image className="h-auto max-w-full w-24 flex rounded-lg" src="/image/user.jpg" width={350} height={350} alt="image description" />)}
                    </div>
                    <div className="flex items-center justify-center pt-4">
                        <input onChange={handleFileChange} type="file" id="fileInput" className="hidden" />
                        <label htmlFor="fileInput" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Change Profile Picture
                        </label>
                    </div>

                </div>

                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">Username</label>
                            <input ref={inputRef} value={input} onChange={handleInput} type="text" name="username" className="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your new username" required="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <textarea ref={inputRef} value={input1} onChange={handleInput1} name="about_you" placeholder="User@gmail.com" className="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>

                        <button type="submit" className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>

                    </form>
                </div>
            </div>

        </section>
    )
}