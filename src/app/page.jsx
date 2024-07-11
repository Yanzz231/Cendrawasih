"use client"

import Image from "next/image"

export default function Home() {
  return (
    <>
      <div class="bg-gray-600">
        <aside id="default-sidebar" class="fixed top-0 left-0 z-10 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
            <ul class="space-y-2 font-medium">
              <li>
                <a href="#" class="flex items-center rounded-lg group">
                  <Image src="/image/Dummy.jpg" width={350} height={350} alt="Deskripsi Gambar" className="h-15 w-20 rounded-lg" />
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center rounded-lg group">
                  <Image src="/image/Dummy.jpg" width={350} height={350} alt="Deskripsi Gambar" className="h-10 w-15 rounded-lg" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <input type="text" />
    </>
  )
}

