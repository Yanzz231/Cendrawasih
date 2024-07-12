"use client"

import { textPopUp } from "@/libs/swal"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"

export default function Upload() {

    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState("")
    const [input1, setInput1] = useState("")
    const [uploadProgress, setUploadProgress] = useState(0)
    const [user, setUser] = useState([])

    const router = useRouter()
    const inputRef = useRef()

    const checkUser = async (user, pass) => {
        const data = { username: user, password: pass }
        const response = await fetch("/api/signin", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postData = await response.json()
        setUser(postData.data[0])
    }

    useEffect(() => {
        const getAccount = localStorage.getItem('username');
        const getPassword = localStorage.getItem('password');

        if (getAccount !== null || getPassword !== null) {
            checkUser(getAccount, getPassword)
        }


    }, [router])

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleInput1 = (event) => {
        setInput1(event.target.value)
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

    const handleUpload = async () => {
        if (!file) return textPopUp("Error", "Please upload image first", "error")
        if (input.length < 5 || input1.length < 10) return textPopUp("Error", "Fill the empty one", "error")
        const formData = new FormData();
        formData.append('image', file);
        setLoading(true)

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=ab9b33a25718ee58d1cae657b972f189', {
                method: 'POST',
                body: formData,
                onprogress: (e) => {
                    console.log(e)
                    const progress = Math.round((e.loaded * 100) / e.total);
                    setUploadProgress(progress);
                },
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();

            const dataPost = { image: data.data.url.replace("https://i.ibb.co", "https://i.ibb.co.com"), title: input, description: input1, like: 0, id_user: user.id}
            console.log(dataPost)
            const responsePost = await fetch('/api/post/', {
                method: "POST",
                body: JSON.stringify(dataPost)
            })
            const postUpload = await responsePost.json()

            setPreview(null)
            setFile(null)
            setInput("")
            setInput1("")
            setUploadProgress(0)
        } catch (error) {
            console.error('Error uploading file:', error);
            textPopUp("Error", "Upload failed", "error")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (loading) {
            window.onbeforeunload = () => 'Tidak dapat meninggalkan halaman saat ini karena sedang dalam proses upload.';
        } else {
            window.onbeforeunload = null;
        }
    }, [loading]);

    return (
        <div className="bg-gray-50">
            <div className="sm:ml-64">
                <div className={`${preview ? "hidden" : ""} flex items-center justify-center w-full`}>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full sm:w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag to here</p>
                            <p className="text-xs text-black">Upload Your Photos</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                </div>
                {preview && (
                    <div className="mb-4 mt-4 mx-1/2 flex justify-center">
                        <img src={preview} alt="Preview" className="w-full sm:w-1/2  rounded-lg" />
                    </div>
                )}
                <div className="mb-2 mt-8 flex justify-center">
                    <input ref={inputRef} value={input} onChange={handleInput} type="text" id="large-input" className="px-1/2 w-full sm:w-1/2 border p-4 flex justify-center text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Add a title"></input>
                </div>
                <div className="mb-4 mt-4 mx-1/2 flex justify-center">
                    <textarea ref={inputRef} value={input1} onChange={handleInput1} type="text" className="mx-auto w-full sm:w-1/2 border flex justify-center text-gray-900 border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder="Description"></textarea>
                </div>
                <div className="justify-center text-center">
                    <button type="submit" className="justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full sm:w-1/2 text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleUpload} disabled={loading}>
                        {loading ? 'Uploading...' : 'Post'}
                    </button>
                    {loading && (
                        <div className="mt-4 flex justify-center items-center">
                            <div className="relative w-full sm:w-1/2">
                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                                </div>
                                <p className="text-center text-gray-500 mt-2">{uploadProgress}%</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
