import Image from "next/image"

export default function page() {
    return (

<div class="h-screen">
  <div class="flex justify-center items-center">
    <img class="rounded-lg mt-4" width="500" height="500" src="/image/Dummy.jpg" alt="image description"/>
  </div>





<div class="flex overflow-y-auto justify-center mt-3">
  <div class="flex items-start gap-2.5">
   <Image class="w-8 h-8 rounded-full" width={350} height={350} src="/image/Dummy.jpg" alt=""/>
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Andrian</span>
         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">6 Minutes ago</span>
      </div>
      <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Reply</span>
   </div>
   
</div>
</div>

<div class="flex overflow-y-auto justify-center mt-3">
  <div class="flex items-start gap-2.5">
   <Image class="w-8 h-8 rounded-full" width={350} height={350} src="/image/Dummy.jpg" alt=""/>
   <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
         <span class="text-sm font-semibold text-gray-900 dark:text-white">Andrian</span>
         <span class="text-sm font-normal text-gray-500 dark:text-gray-400">6 Minutes ago</span>
      </div>
      <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Reply</span>
   </div>
   
</div>
</div>
<div class="flex overflow-y-auto justify-center mt-3">
  <div class="flex items-end gap-2.5">
    <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
        <span class="text-sm font-semibold text-gray-900 dark:text-white">Andrian</span>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">6 Minutes ago</span>
      </div>
      <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Reply</span>
    </div>
    <img class="w-8 h-8 rounded-full" width="350" height="350" src="/image/Dummy.jpg" alt=""/>
  </div>
</div>













  <div class="flex justify-center">
  <form class=" py-2 w-auto px-4 mt-4 bg-gray-50 ">
    <div class="flex">
    <textarea id="comment" rows="1" class="block w-96 mt-3 p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>
    <button type="submit" class="ml-auto p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100">
        <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
        </svg>
        <span class="sr-only">Send message</span>
    </button>
    </div>
</form>
</div>
</div>





    )
}


