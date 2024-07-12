import Profile from "@/component/profile"
import SideBar from "@/component/sidebar"
import Image from "next/image"

export default function page() {
    return (
        <>
            <SideBar />

            <div>
                <Profile />

                <div>
                    <div className="justify-center flex gap-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <div>
                                <Image className=" h-auto max-w-full rounded-lg mt-6 justify-center flex mb-0 " src="/image/Dummy.jpg" width={350} height={350} alt="image description" />
                            </div>
                            <div>
                                <Image className=" h-auto max-w-full rounded-lg mt-6 justify-center flex mb-0" src="/image/Dummy.jpg" width={350} height={350} alt="image description" />
                            </div>
                            <div>
                                <Image className=" h-auto max-w-full rounded-lg mt-6 justify-center flex" mb-0 src="/image/Dummy.jpg" width={350} height={350} alt="image description" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
