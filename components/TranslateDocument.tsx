
"use client";
import * as Y from 'yjs';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from './ui/button';

import { FormEvent,useState, useTransition } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { LanguagesIcon, Zap } from 'lucide-react';
import { toast } from 'sonner';
import Markdown from "react-markdown";

type Language =
| "english"
| "spanish"
| "portuguese"
| "french"
| "german"
| "chinese"
| "arabic"
| "hindi"
| "russian"
| "japanese";

const languages: Language[] = [
    "english",
    "spanish",
    "portuguese",
    "french",
    "german",
    "chinese",
    "arabic",
    "hindi",
    "russian",
    "japanese",

];


function TranslateDocument({ doc }: {doc: Y.Doc}) {
    const [isOpen, setIsOpen]= useState(false);
    const [language, setLanguage] = useState<string>("");
    const [summary, setSummary] = useState("");
    const [question, setQuestion] = useState("");
    const [isPending, startTransition] = useTransition();


    const handleAskQuestion = async (e: FormEvent) => {
        e.preventDefault();

        startTransition(async () => {
         //this is where we going to make a backend call
         //1. get data from document
           const documentData = doc.get("document-store").toJSON();
           //const focusedSection = documentData.content.slice(0, 1000);
      
           
console.log('Document Data:', documentData); // Log this to check

           
        // making request to cloudflare backend. 
        // await fetch and then we have string interpolation and then we have our environment variables
           const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/translateDocument`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    documentData,
                    targetLang: language,
                }),
            }

           );
           if (res.ok) {
            const { translated_text } = await res.json();

               // Log to ensure the response contains translated text
            console.log('Translated Text:', translated_text);

            setSummary(translated_text);
            toast.success("Translated Summary Successfully!");
        }

    });

    };


  return (
  <Dialog open={isOpen} onOpenChange={setIsOpen}>

  <Button asChild variant="outline">
  <DialogTrigger><LanguagesIcon/> Translate</DialogTrigger>
  </Button>
  <DialogContent className="bg-white items-center">
    <DialogHeader>
      <DialogTitle className="text-center">Translate the document</DialogTitle>
      <DialogDescription className="text-center">
       Select a Language and AI will translate a summary of the document in the selected language.
      </DialogDescription>
      <hr className='mt-5'></hr>
      {/**to show what the user has asked */}
      {question && <p className='mt-5 text-gray-500'>Q: {question} </p>}
    </DialogHeader>
    {/**render summary here to show up */}
    {
        summary && (
            <div className='flex flex-col items-start max-h-96 overflow-y-scroll gap-2 p-5 bg-gray-100'>
                <div className='flex'>
                    <Zap className='w-10 flex-shrink-0' />
                    <p className='font-bold'>
                        BOT {isPending ? "is thinking..." : "Says: "}
                    </p>
                </div>
                <p>{isPending ? "Thinking..." : <Markdown>{summary}</Markdown>}</p>
            </div>
        )}


    <form className="flex gap-2" onSubmit={handleAskQuestion}>
        
        <Select
           value={language}
            onValueChange={(value) => setLanguage(value)}
        >
            <SelectTrigger className='w-full'>
                <SelectValue placeholder="Select a Language" />
            </SelectTrigger>

            <SelectContent>
                {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                        {language.charAt(0).toUpperCase() + language.slice(1)}
                    </SelectItem>
                ))}
            </SelectContent>  
        </Select>

        <Button type="submit" disabled={!language || isPending}>
            {isPending ? "Translating..." : "Translate" }
        </Button>
    </form>
  </DialogContent>
</Dialog>
  
)}

export default TranslateDocument;