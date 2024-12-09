"use client"

import Image from "next/image"


export default function Home(){
    return (
        <div className="flex min-h-screen">
      
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide "> 
       {/* <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50"></div>*/}
            <div className="h-full flex flex-col items-center justify-center ">
            

            
            <Image
            src="/images/newdoc_light.jpg"
            height="300"
            width="400"
            alt="create new doc"
            className="dark:hidden "
            />
            <Image
            src="/images/newdoc_dark.jpg"
            height="300"
            width="300"
            alt="create new doc"
            className="hidden dark:block"
            />
            
                </div>
      
        </div>
        </div>
    )
}