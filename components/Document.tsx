//actual workspace creation
'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEvent, useState, useTransition } from "react";
import {doc, updateDoc} from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "./Editor";

function Document({id}:{id: string}) {
  
  const [data, loading, error]=useDocumentData(doc(db,"documents", id));
  const [input, setInput]=useState("");
  const [isUpdating, startTransition]=useTransition(); //useful when someone clicks on the button, we gonna disable it.
  
  
  //useeffect will have dependency array that will include data that is being pulled from firebase hook useDocumentData
  useEffect(()=>{
    if (data){
        setInput(data.title);
    }
  }, [data])

  const updateTitle = (e: FormEvent) => {
      e.preventDefault(); //prevent screen from refreshing

      if (input.trim()){
        startTransition(async() =>{
            await updateDoc(doc(db,"documents",id), {
                 title: input,
            });
        })
      }
  }

  return (
    <div>

        <div  className="flex max-w-6xl mx-auto justify-between pb-5 pr-5 pl-5">
            <form className="flex flex-1 space-x-2 " onSubmit={updateTitle}>
                {/**title creation and update.. */}
                {/**updating the state depending the keys typed by user */}
                <Input value={input} onChange={(e) => setInput(e.target.value)} />

                <Button disabled={isUpdating} type="submit">
                    
                    {isUpdating ? "Updating..." : "Update"}
                
                
                </Button>


                {/* IF*/}
                {/** isOwner && InviteUser, DeleteDocument */}
            </form>
        </div>
          <div>
          {/** Manage Users */}



          {/**Avatars */}

    </div>
    {/**horizontal line below input area */}
    <hr className="pb-5 " />

        {/**Collaborative editor */}
  <Editor/>
    </div>



  )
}

export default Document