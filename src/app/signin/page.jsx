import SignIn from "@/component/signin"
import Head from "next/head"
import Image from "next/image"

export const metadata = {
    title: "Sign In - Cendrawasih",
    description: "Website Cendrawasih",
    icons: {
        icon: "/image/Logo_Cendrawasih.png",
        shortcut: "/image/Logo_Cendrawasih.png",
        apple: "/image/Logo_Cendrawasih.png"
    }
  };

export default function page() {
    return (
        <section className="bg-gray-50">
            <Head>
                <title>Login - Cendrawasih</title>
            </Head>
            <div className="flex flex-col items-center shadow-xl justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div>
                        <div className="flex items-center pt-4 justify-center">
                            <Image className="h-auto max-w-full w-24 flex rounded-lg" src="/image/Logo_Cendrawasih.png" width={350} height={350} alt="image description" />
                        </div>
                    </div>

                    <SignIn />
                </div>
            </div>
        </section>
    )
}