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
import { toast } from "sonner";
import { Input } from "./ui/input";
import * as Y from 'yjs';
import { BotIcon, MessageCircleCode } from "lucide-react";
import Markdown from "react-markdown";
  
function ChatToDocument({doc}: { doc: Y.Doc}) {
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [summary, setSummary] = useState("");
    const [question, setQuestion] = useState("");


  const handleAskQuestion = async (e: FormEvent) => {
        e.preventDefault();

        setQuestion(input);

        startTransition(async() => {
            const documentData = doc.get("document-store").toJSON();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/chatToDocument`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    },
                    body: JSON.stringify({
                        documentData,
                        question: input,
                    }),
                }
            )
            if (res.ok) {
                const { message } = await res.json();

                setInput(""); //clear input
                setSummary(message);

                toast.success("Question asked successfully");

            }
        })

        
    };
   



  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>

  <Button asChild variant="outline">
  <DialogTrigger>
    <MessageCircleCode className="mr-2" />
    Chat
  </DialogTrigger>
  </Button>
  <DialogContent className="bg-white items-center">
    <DialogHeader>
      <DialogTitle className="text-center">Chat with your workspace</DialogTitle>
      <DialogDescription className="text-center">
        Ask a question about anything in your document!
      </DialogDescription>

      <hr className="mt-5" />
      {question && <p className="mt-5 text-gray-500 text-sm">Q: {question} </p>}
    </DialogHeader>

    {summary && (
        <div className="flex flex-col items-start max-h-96 overflow-scroll gap-2 p-5 bg-gray-100">
            <div className="flex">
                <BotIcon className="w-10 flex-shrink-0" />
                <p className="font-bold">
                    GPT {isPending? "Thinking...": "Says: "}
                </p>
            </div>
            <p>{isPending? "Thinking..." :<Markdown>{summary}</Markdown> }</p>
        </div>
    )}

    <form className="flex gap-2" onSubmit={handleAskQuestion}>
        <Input
           type="text"
           placeholder="i.e what is this about?"
           className="w-full"
           value={input}
           onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" disabled={!input || isPending}>
            {isPending ? "Asking..." : "Ask" }
        </Button>
    </form>
  </DialogContent>
</Dialog>

  )
}

export default ChatToDocument;