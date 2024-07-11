import Image from "next/image"

export default function page() {
    return (
<div>
    
<h1 class="text-5xl text-center mt-6 mb-6 font-extrabold">Upload your File</h1>

<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag to here</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Upload Your Photos,Videos,Gif</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
<div class="mb-2 mt-8 flex  justify-center">
        <input type="text" id="large-input" class="block px-1/2 w-1/2 border p-4 flex justify-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " placeholder="Add a title"></input>
    </div>
<div class="mb-4 mt-4 mx-1/2 flex  justify-center">
        <input type="textarea" class="block mx-auto w-1/2 border p-8 flex justify-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " placeholder="Description"></input>
    </div>
    <div class="justify-center text-center">
    <button type="submit" className="justify-center text-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 w-1/2 text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Post</button>
    </div>
</div>
    )
}