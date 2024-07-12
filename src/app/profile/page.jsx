import Gallery from "@/component/gallery"
import Profile from "@/component/profile"
import SideBar from "@/component/sidebar"

export default function page() {
    return (
        <div className="bg-gray-50">
            <SideBar />

            <div className="bg-gray-50 h-screen">
                <Profile />

                <div className="p-4 sm:ml-64 bg-gray-50">

                    <Gallery />

                </div>
            </div>
        </div>
    )
}
