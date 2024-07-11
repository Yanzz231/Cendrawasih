import Image from "next/image"
import LoginPage from "@/component/login";

export default function Home() {
  return (
  <div class ="bg-gray-600">
    <div>
      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center rounded-lg group">
            <Image class="h-15 w-20  rounded-lg" src="/image/Dummy.jpg"  width={350} height={350} alt="image desc"/>

            </a>
         </li>
         <li>
            <a href="#" class="flex items-center  rounded-lg group">
            <Image class="h-10 w-15 rounded-lg" src="/image/Dummy.jpg"  width={350} height={350} alt="image desc"/>
            </a>
         </li>
      </ul>
   </div>
</aside>
<div>
  
<section class="bg-gray-600">
<div class="relative w-full">
           <input type="password"></input>
            
        </div>

</section>
</div>
</div>
</div>
  );
}
