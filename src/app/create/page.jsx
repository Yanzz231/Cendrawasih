import SideBar from "@/component/sidebar"
import Upload from "@/component/upload"
import Image from "next/image"

export default function page() {
    return (
        <>
            <SideBar />

            <h1 className="sm:text-5xl text-xl sm:ml-64 text-center mt-6 mb-6 font-extrabold">Upload your File</h1>

            <Upload />
        </>
    )
}