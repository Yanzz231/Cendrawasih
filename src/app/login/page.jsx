import Image from "next/image"

export default function page() {
    return (
        <section class="bg-gray-700">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">  
                    <div>              
<div class="flex items-center pt-4 justify-center">
  <Image class="h-auto max-w-full w-24 flex rounded-lg" src="/image/Dummy.jpg"  width={350} height={350} alt="image description"/>
</div>
</div>

                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl text-black">
                            Welcome To Cendrawasih
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="gmail" class="block mb-2 text-sm font-medium text-gray-900 text-black">Your Gmail</label>
                                <input type="gmail" name="gmail" id="gmail" class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="User@gmail.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                                <input type="password" name="password" id="password" placeholder="*******" class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="rememberme" aria-describedby="rememberme" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                            </div>
                            <button type="submit" class="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p class="text-sm font-light text-black ">
                                Don’t have an account yet? <a href="#" class="font-medium text-primary-800 hover:underline ">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}