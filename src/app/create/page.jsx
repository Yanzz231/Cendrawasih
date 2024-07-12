import SideBar from "@/component/sidebar"
import Upload from "@/component/upload"
import Image from "next/image"

export default function page() {
    return (
        <>
            <SideBar />
            <div className="bg-gray-50 h-screen">

                <h1 className="sm:text-5xl text-black pt-6 text-xl sm:ml-64 text-center mb-6 font-extrabold">Upload your File</h1>

                <Upload />
            </div>
        </>
    )
}