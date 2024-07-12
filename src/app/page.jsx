
import Gallery from "@/component/gallery"
import SideBar from "@/component/sidebar"

export const metadata = {
  title: "Cendrawasih",
  description: "Website Cendrawasih",
  icons: {
      icon: "/image/Logo_Cendrawasih.png",
      shortcut: "/image/Logo_Cendrawasih.png",
      apple: "/image/Logo_Cendrawasih.png"
  }
};

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

