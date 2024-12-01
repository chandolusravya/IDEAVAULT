"use client"
import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import NewDocumentButton from "@/components/NewDocumentButton";
import { useState, useEffect } from "react";
import { DocumentData, query, collectionGroup, where, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarOption from "@/components/SidebarOption";
import TextToImage from "@/components/TexttoImage_sample";

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string

}


export default function page(){
  const {user} =useUser();

    const [groupedData, setGroupedData]=useState<{
        owner:RoomDocument[];
        editor: RoomDocument[];
    }>({
        owner: [],
        editor:[],
    });



    //in the below line the query will go ahead and check through every single room's sub collection which is known as collection group
    //because we got index setup in firestore, we can query based on userid or roomid.
    const [data, loading,error] =useCollection(
      user && (
          query(collectionGroup(db, 'rooms'),where('userId', '==', user.emailAddresses[0].toString()) )
      ) 
  );


  
  //data.docs is an array of items, [doc1,doc2,..] where we r turning this into object where one of the keys is owner and values[doc1, doc2] and other key is editor.
  //{"owner": [doc1,doc2],"editor":[doc3]}
  useEffect(() => {
      if (!data) return;
      const grouped= data.docs.reduce<{
          owner: RoomDocument[];
          editor: RoomDocument[];
      }>(
          (acc,curr) => {
              const roomData=curr.data() as RoomDocument;

              if (roomData.role === "owner"){
                  acc.owner.push({
                      id:curr.id,
                      ...roomData});
              }else {
                  acc.editor.push({
                      id: curr.id,
                      ...roomData,
                  });
              }
              return acc;
          },{
              //if u r owner, will push into owner part of array and if editor, push into editor part of array.
              owner: [],
              editor: [],
          }
      )

      setGroupedData(grouped);
  }, [data])

 

    return (

        <div className="flex min-h-screen">
          {/**change flex h-screen to flex min-h-screen. */}
           
              <Sidebar/>
              
        <div className="flex-1 p-4 bg-white overflow-y-auto scrollbar-hide ml-7 "> 
        
   
        
            {/*<div className="h-full flex flex-col items-center justify-center">*/}
           
            {/*<Image 
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
            />*/}
            {/*<h2 className="text-lg font-medium">
              Welcome to {user?.username} &apos;s Ideavault

            </h2>*/}
            {/**should be attached to server action */}
            <div className="ml-5 mb-4"><NewDocumentButton/>
            </div>
           
            
            
          <div className="space-y-8 ml-9">
          {/* My Documents Section */}
          <div>
            <h2 className="text-gray-500 font-semibold text-lg mb-4">
              My Documents
            </h2>
            <div className="flex flex-rows space-x-5">
       {groupedData.owner.length === 0 ? (
        <h2 className='text-gray-500 font-semibold text-sm'>
            No documents found
        </h2>
       ):(
        <>
          {groupedData.owner.map((doc) => (
          //<p>{doc.roomId}</p>
            <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}  />
            
        
          
          ))}
        </>
       )}

        </div>

        </div>
        
        {/* Shared with Me Section */}
       
          {/* My Documents Section */}
          <div>
            <h2 className="text-gray-500 font-semibold text-lg mb-4">
              Shared Documents
            </h2>
            <div className="flex flex-rows space-x-5">
       {groupedData.editor.length === 0 ? (
        <h2 className='text-gray-500 font-semibold text-sm'>
            No documents found
        </h2>
       ):(
        <>
          {groupedData.editor.map((doc) => (
          //<p>{doc.roomId}</p>
            <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          
          ))}
        </>
       )}

        </div>
       </div>
       
       </div>
      
        </div>
        </div>
    )
}