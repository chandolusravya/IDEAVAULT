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
import { FormEvent, useState, useTransition } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { deleteDocument } from "@/actions/actions";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { inviteUserToDocument } from "@/actions/actions";

  
function InviteUser() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [email, setEmail] =useState("");
    //users pathname to know id of the room
    const pathname = usePathname(); //can also use useRoom hook over here
    const router = useRouter();


//since it is a form submission, it has an argument passed along wiht it which is a react form event.
    const handleInvite = async (e: FormEvent) => {
        e.preventDefault();

        const roomId = pathname.split("/").pop();
        if (!roomId) return;
        

        startTransition(async () => {
            const { success } = await inviteUserToDocument(roomId, email);
            //toast notification:

            if (success) {
                setIsOpen(false);
                setEmail('')  //set email to blank
                toast.success("User Added to Room successfully");
            } else {
               
                toast.error("Failed to add user to room!");
            }
        })
    };
   



  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>

  <Button asChild variant="outline">
  <DialogTrigger>Invite</DialogTrigger>
  </Button>
  <DialogContent className="bg-white items-center">
    <DialogHeader>
      <DialogTitle className="text-center">Invite a user to collaborate!</DialogTitle>
      <DialogDescription className="text-center">
        Enter the email of the user you want to invite
      </DialogDescription>
    </DialogHeader>

    <form className="flex gap-2" onSubmit={handleInvite}>
        <Input
           type="email"
           placeholder="Email"
           className="w-full"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" disabled={!email || isPending}>
            {isPending ? "Inviting..." : "Invite" }
        </Button>
    </form>
  </DialogContent>
</Dialog>

  )
}

export default InviteUser;