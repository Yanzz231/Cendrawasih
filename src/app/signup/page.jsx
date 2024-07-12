import SignUp from "@/component/signup"
import Image from "next/image"

export const metadata = {
    title: "Sign Up - Cendrawasih",
    description: "Website Cendrawasih",
    icons: {
        icon: "/image/Logo_Cendrawasih.png",
        shortcut: "/image/Logo_Cendrawasih.png",
        apple: "/image/Logo_Cendrawasih.png"
    }
};

export default function page() {
    return (
        <section className="bg-gray-50 h-screen">
            <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto ">
                <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div>
                        <div className="flex items-center pt-4 justify-center">
                            <Image className="h-auto max-w-full w-24 flex rounded-lg" src="/image/Logo_Cendrawasih.png" width={350} height={350} alt="image description" />
                        </div>
                    </div>

                    <SignUp />
                </div>
            </div>
        </section>

    )
}