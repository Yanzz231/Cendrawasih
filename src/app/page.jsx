
import Gallery from "@/component/gallery"
import SideBar from "@/component/sidebar"

export default function Home() {
    return (
        <>
            <SideBar />

            <div className="p-4 sm:ml-64">


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Gallery />
                </div>

            </div>

        </>
    )
}

