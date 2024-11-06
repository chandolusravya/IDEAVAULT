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

    
    <Button onClick={handleCreateNewDocument} disabled={isPending} className="mt-5">
              <PlusCircle className="h-4 w-4 mr-2"/>
              {isPending? "Creating..." : "Create a note"}

            </Button>
  )
}

export default NewDocumentButton;