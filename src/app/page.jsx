
import Gallery from "@/component/gallery"
import SideBar from "@/component/sidebar"

export default function Home() {
    return (
        <div className="bg-gray-50 h-screen">
            <SideBar />

            <div className="p-4 sm:ml-64 bg-gray-50">

                <Gallery />

            </div>

        </div>
    )
}

