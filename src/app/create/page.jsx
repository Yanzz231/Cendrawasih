import SideBar from "@/component/sidebar"
import Upload from "@/component/upload"

export const metadata = {
    title: "Upload - Cendrawasih",
    description: "Website Cendrawasih",
    icons: {
        icon: "/image/Logo_Cendrawasih.png",
        shortcut: "/image/Logo_Cendrawasih.png",
        apple: "/image/Logo_Cendrawasih.png"
    }
};

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