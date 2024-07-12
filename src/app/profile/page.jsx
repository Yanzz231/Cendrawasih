import Image from "next/image"

export default function page() {
    return (
    <div>
 <div class="justify-center flex">       
<Image class="rounded-full w-24 h-24 mt-8 justify-center flex text-center" src="/image/user.jpg" width={350} height={350} alt="image description"/>
    </div>
    <div>
    <p class="text-4xl font-extrabold text-center mt-4">Username</p>
    <p class="text-2x1 text-gray-500 text-center mt-2">Gmail@gmail.com</p>
    <p class="text-3x1 text-bold text-center mt-2">4 Follower</p>
    </div>
    <div class= " flex justify-center mt-2">
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-md rounded-full text-sm me-2 mb-2 px-5 py-2.5 text-center ">Edit Profil</button>
    </div>
    <div class="text-center justify-center mt-2">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
My post
</span>
</button>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Liked Post
</span>
</button>
    </div>
    <div>
        <div class="justify-center flex gap-2">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
    <div>
    <Image class=" h-auto max-w-full rounded-lg mt-8 justify-center flex text-center" src="/image/Dummy.jpg" width={350} height={350} alt="image description"/>
    </div>
    <div>
    <Image class=" h-auto max-w-full rounded-lg mt-8 justify-center flex text-center" src="/image/Dummy.jpg" width={350} height={350} alt="image description"/>
    </div>
    <div>
    <Image class=" h-auto max-w-full rounded-lg mt-8 justify-center flex text-center" src="/image/Dummy.jpg" width={350} height={350} alt="image description"/>
    </div>
    <div>
        </div>
        </div>
        </div>
    </div>
    </div>
    )}
