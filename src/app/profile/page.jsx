import GalleryProfile from "@/component/galleryProfile"
import Profile from "@/component/profile"
import SideBar from "@/component/sidebar"

export const metadata = {
    title: "Profile - Cendrawasih",
    description: "Website Cendrawasih",
    icons: {
        icon: "/image/Logo_Cendrawasih.png",
        shortcut: "/image/Logo_Cendrawasih.png",
        apple: "/image/Logo_Cendrawasih.png"
    }
  };

export default function page() {
    return (
        <div className="bg-gray-50">
            <SideBar />

            <div className="bg-gray-50 h-screen">
                <Profile />

                <div className="p-4 sm:ml-64 bg-gray-50">
                    <h1 className="text-2xl my-4 font-bold text-black">Your Image</h1>
                    <GalleryProfile />

                </div>
            </div>
        </div>
    )
}
