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

    
    <Button onClick={handleCreateNewDocument} disabled={isPending} className="mt-5 font-serif flex bg-[#ba7543] border-dashed border-slate-300 h-full rounded-lg items-center justify-center sm:flex-col transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#ba7543] flex-row ml-5">
              <PlusCircle className="h-4 w-4 mr-2" strokeWidth={3}/>
              {isPending
              ? <span className='text-sm' > Creating...</span>
              : <span className='text-sm'>Create a note</span>}

            </Button>
  )
}

export default NewDocumentButton;