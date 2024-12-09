"use client"
import React from 'react'
import { PlusCircle } from 'lucide-react'
import { Button } from './ui/button'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createNewDocument } from '@/actions/actions'
function NewDocumentButton() {
const [isPending, startTransition]= useTransition();
const router=useRouter();


  const handleCreateNewDocument=() => {
    startTransition(async () =>{
      const {docId} = await createNewDocument();
      router.push(`/doc/${docId}`)
    });
      
  };
  return (

    
    <Button onClick={handleCreateNewDocument} disabled={isPending} className="mt-10 mb-10 font-sans flex h-[80%] min-w-[160px] rounded-md items-center justify-center sm:flex-col flex-row border-2 border-[#d3d5f3] hover:border-black dark:border-white 
      bg-slate-100
      hover:bg-slate-700
      
      text-black font-semibold hover:text-white
      transition duration-200 
      text-md
      hover: shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
              <PlusCircle className="h-5 w-5 mr-2 mb-3" strokeWidth={3}/>
              {isPending
              ? <span className='text-md' > Creating...</span>
              : <span className='text-md'>Create a note</span>}

            </Button>
  )
}

export default NewDocumentButton;