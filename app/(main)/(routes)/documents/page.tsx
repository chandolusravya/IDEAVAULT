"use client"
import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import NewDocumentButton from "@/components/NewDocumentButton";

export default function page(){
  const {user} =useUser();
    return (
        <div className="flex min-h-screen">
            
              <Sidebar/>
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide "> 
        
            <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/images/newdoc_light.jpg"
          
            height="200"
            width="300"
            
            alt="create new doc"
            className=" rounded-[5%] dark:hidden"
            />
            <Image
            src="/images/newdoc_dark.jpg"
            height="200"
            width="200"
            alt="create new doc"
            className="hidden dark:block"
            />
            {/*<h2 className="text-lg font-medium">
              Welcome to {user?.username} &apos;s Ideavault

            </h2>*/}
            {/**should be attached to server action */}
            <NewDocumentButton/>
                </div>
      
        </div>
        </div>
    )
}