import Profile from "@/component/profile"
import SideBar from "@/component/sidebar"
import Image from "next/image"

export default function page() {
    return (
        <>
            <SideBar />

            <div className="bg-gray-50">
                <Profile />

                <div>
                    <div className="justify-center flex gap-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <div>
                                <Image className=" h-auto max-w-full rounded-lg mt-8 justify-center flex text-center" src="/image/Dummy.jpg" width={350} height={350} alt="image description" />
                            </div>
                            <div>
                                <Image className=" h-auto max-w-full rounded-lg mt-8 justify-center flex text-center" src="/image/Dummy.jpg" width={350} height={350} alt="image description" />
                            </div>
                            <div>
                                <Image className=" h-auto max-w-full rounded-lg mt-8 justify-center flex text-center" src="/image/Dummy.jpg" width={350} height={350} alt="image description" />
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
