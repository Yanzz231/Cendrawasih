
import Gallery from "@/component/gallery"
import SideBar from "@/component/sidebar"

export default function Home() {
    return (
        <>
            <SideBar />

            <div className="p-4 sm:ml-64">

                <Gallery />

            </div>

        </>
    )
}

