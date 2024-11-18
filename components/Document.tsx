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
import useOwner from "@/lib/useOwner";
import DeleteDocument from "./DeleteDocument";
import InviteUser from "./InviteUser";
import ManageUsers from "./ManageUsers";
import Avatars from "./Avatars";

function Document({id}:{id: string}) {
  
  const [data, loading, error]=useDocumentData(doc(db,"documents", id));
  const [input, setInput]=useState("");
  const [isUpdating, startTransition]=useTransition(); //useful when someone clicks on the button, we gonna disable it.
  const isOwner = useOwner(); //useOwner is custom hook preseny in lib folder.
  
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
    //for the editor to be white
    <div className="flex-1 h-full ml-[15px] bg-white p-5 ">

        <div  className="flex max-w-6xl mx-auto justify-between pb-5 pr-5 pl-5">
            <form className="flex flex-1 space-x-2 " onSubmit={updateTitle}>
                {/**title creation and update.. */}
                {/**updating the state depending the keys typed by user */}
                <Input value={input} onChange={(e) => setInput(e.target.value)} />

                <Button disabled={isUpdating} type="submit">
                    
                    {isUpdating ? "Updating..." : "Update"}
                
                
                </Button>


                {/* IF*/}
                {isOwner && (
                  <>
                  {/**Ivite user */}
                   <InviteUser />

                  {/**delete doc button */}
                   <DeleteDocument />
                  </>
                )}
                {/** isOwner && InviteUser, DeleteDocument */}
            </form>
        </div>
          
          {/** Manage Users */}
        <div className="flex max-w-6xl mx-auto justify-between items-center pb-5 pr-5 pl-5">
         < ManageUsers />
     
          {/**Avatars */}
          <Avatars />

    </div>
    {/**horizontal line below input area */}
    <hr className="pb-5 " />

        {/**Collaborative editor */}
  <Editor/>
    </div>



  );
}

export default Document;