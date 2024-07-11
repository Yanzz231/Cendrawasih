"use client"

import SideBar from "@/component/sidebar"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <SideBar />

      <div class="p-4 sm:ml-64">


        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <Image class="h-auto max-w-full rounded-lg" width={350} height={350} src="/image/Dummy.jpg" alt="" />
            </div>
            <div>
              <Image class="h-auto max-w-full rounded-lg" width={350} height={350} src="/image/Dummy.jpg" alt="" />
            </div>
            <div>
              <Image class="h-auto max-w-full rounded-lg" width={350} height={350} src="/image/Dummy.jpg" alt="" />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <Image class="h-auto max-w-full rounded-lg" width={350} height={350} src="/image/Dummy.jpg" alt="" />
            </div>
            <div>
              <Image class="h-auto max-w-full rounded-lg" width={350} height={350} src="/image/Dummy.jpg" alt="" />
            </div>
            <div>
              <Image class="h-auto max-w-full rounded-lg" width={350} height={350} src="/image/Dummy.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

