"use client";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { deleteDocument } from "@/actions/actions";
import { toast } from "sonner";
  
function DeleteDocument() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    //users pathname to know id of the room
    const pathname = usePathname(); //can also use useRoom hook over here
    const router = useRouter();

    const handleDelete = async () => {
        const roomId = pathname.split("/").pop();
        if (!roomId) return;

        startTransition(async () => {
            const { success } = await deleteDocument(roomId);
            //toast notification:

            if (success) {
                setIsOpen(false);
                router.replace("/documents"); //after deleting goes back to my documents. I can give "/" to go to home or very first page of app
                toast.success("Room Deleted successfully!");
            } else {
               
                toast.error("Failed to delete room!")
            }
        })
    };
   



  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>

  <Button asChild variant="destructive">
  <DialogTrigger>Delete</DialogTrigger>
  </Button>
  <DialogContent className="bg-white">
    <DialogHeader>
      <DialogTitle>Are you sure you want to Delete?</DialogTitle>
      <DialogDescription>
        This will delete the document and all its contents, removing all users from the document.
      </DialogDescription>
    </DialogHeader>

    <DialogFooter className="sm: justify-end gap-2">
        <Button
           type="button"
           variant="destructive"
           onClick={handleDelete}
           disabled={isPending}
           >
         {isPending ? "Deleting..." : "Move to Trash"}

           </Button>
           <DialogClose asChild>
            <Button type="button" variant="secondary">
                Close
            </Button>
           </DialogClose>

    </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

export default DeleteDocument;