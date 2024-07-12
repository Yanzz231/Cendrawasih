import Image from "next/image"
export default function page() {
    return (
        <>      <section class="bg-white">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> 
                
            <h1 class="text-xl font-bold text-center mt-5 leading-tight tracking-tight text-gray-900 md:text-2xl text-black">
                        Edit Your Profile 
                    </h1><div>              
<div class="flex items-center pt-4 justify-center">
<Image class="h-auto max-w-full w-24 flex rounded-lg" src="/image/user.jpg"  width={350} height={350} alt="image description"/>
</div>
<div class="flex items-center justify-center pt-4">
  <input type="file" id="fileInput" class="hidden" />
  <label for="fileInput" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Change Profile Picture
  </label>
</div>

</div>

                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                   
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 text-black">Username</label>
                            <input type="username" name="username"  class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Enter your new username" required=""/>
                        </div>
                        <div>
                            <label for="About You" class="block mb-2 text-sm font-medium text-gray-900">About You</label>
                            <textarea type="about_you" name="about_you" placeholder="Tell your story" class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>

                        <button type="submit" class="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-full text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>

                    </form>
                </div>
            </div>
 
    </section>
        
   
        </>
    )
}