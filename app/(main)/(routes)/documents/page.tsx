"use client"

import Sidebar from "@/components/Sidebar";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { DocumentData, query, collectionGroup, where, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

import TextToImage from "@/components/TextToImage";  // Import TextToImage with correct casing
import { FileCheck2, FileClock, ImageIcon, NotebookPen } from "lucide-react";
import NewDocumentButton from "@/components/NewDocumentButton";
import Image from "next/image";
//import { useDocumentData } from react-firebase-hooks/firestore;  // Import useDocumentData

interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
  imageUrl?: string; // Include the imageUrl field in the interface
}

export default function Page() {
  const { user } = useUser();

  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  const [data] = useCollection(
    user && query(collectionGroup(db, "rooms"), where("userId", "==", user.emailAddresses[0].toString()))
  );

  // State for handling the dialog box and image URL (added a new state here)
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentDocId, setCurrentDocId] = useState<string | null>(null);
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({}); // To store image URL for each document
  const [docTitle, setDocTitle] = useState<string>("");

  // Load image URLs and title for each document from Firestore
  useEffect(() => {
    if (!data) return;

    const fetchImageUrlsAndTitles = async () => {
      const grouped = await Promise.all(data.docs.map(async (curr) => {
        const roomData = curr.data() as RoomDocument;

        // Retrieve the image URL from the documents collection using the roomId or docId
        const docRef = doc(db, "documents", curr.id);  // Adjust collection name if needed
        const docSnap = await getDoc(docRef);
        const imageUrl = docSnap.exists() ? docSnap.data().imageUrl : null;
        const title = docSnap.exists() ? docSnap.data().title : "Untitled Document"; // Get the title from the document

        const roomDoc = {
          id: curr.id,
          imageUrl,
          title,
          ...roomData
        };
     

        // Now map the image URL and title
        if (roomData.role === "owner") {
          setGroupedData((prev) => ({
            ...prev,
            owner: [...prev.owner, roomDoc]
          }));
        } else {
          setGroupedData((prev) => ({
            ...prev,
            editor: [...prev.editor, roomDoc]
          }));
        }

        // Store the image URL and title in state
        if (imageUrl) {
          setImageUrls((prev) => ({
            ...prev,
            [curr.id]: imageUrl,
          }));
        }

        if (title) {
          setDocTitle(title); // Save the title in state if needed
        }
      }));
    };

    fetchImageUrlsAndTitles();
  }, [data]);

  // Handle image generation
  const handleImageGenerated = (generatedImageUrl: string) => {
    if (currentDocId) {
      setImageUrls((prev) => ({
        ...prev,
        [currentDocId]: generatedImageUrl, // Update the image URL for the specific document
      }));
      updateDocumentImage(currentDocId, generatedImageUrl);
    }
  };

  const updateDocumentImage = async (docId: string, imageUrl: string) => {
    try {
      const docRef = doc(db, "documents", docId);  // Make sure to update the correct collection
      await updateDoc(docRef, { imageUrl });
      console.log("Image URL updated in Firestore:", imageUrl);
    } catch (error) {
      console.error("Error updating Firestore document:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 bg-white overflow-y-auto scrollbar-hide ml-7">
        <div className="flex justify-start mt-2 ml-5 ">
      <NotebookPen> </NotebookPen>
        <span className="font-sans font-semibold text-slate-600 ml-4">Ready to start taking notes?
          
        </span>
        </div>
       
        <div className="ml-8 mb-4 mt-0 h-[15%]">
          <NewDocumentButton/></div>
        <hr className=" p-3"></hr>

        <div className="space-y-8 ml-9 mr-9">
          <div>
            <div className="flex justify-start gap-2">
          <FileCheck2></FileCheck2>
            <h2 className="text-slate-900 font-bold text-lg mb-6 font-sans">
           All Documents</h2>
           </div>
  
            <div className="grid grid-cols-4 gap-3">
              {groupedData.owner.length === 0 ? (
                <h2 className="text-gray-500 font-semibold text-sm mt-5">No documents found</h2>
              ) : (
                <>
                  {groupedData.owner.map((doc) => (
                    <div key={doc.id} className=" flex items-center justify-center bg-gray-100  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-slate-500 w-[70%] h-full">
                      {/* Conditionally render the image or the document name */}
                      {imageUrls[doc.id] ? (
                        <a href={`/doc/${doc.id}`} className="w-full h-36 ">
                          <img
                            src={imageUrls[doc.id]}
                            alt="Update Doc Image"
                            className="w-full h-36 cursor-pointer rounded-lg flex items-center justify-center border-4"
                          />
                        
                        </a>
                        
                      ) : (
                        <a href={`/doc/${doc.id}`} className="flex-1 text-blue-500 underline text-center">
                          {doc.title}
                        </a>
                      )}
                      
                      {/* Show the button only if the image has not been generated */}
                     
                     <div className="flex items-center justify-center">
                      {!imageUrls[doc.id] ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center border bg-white rounded-xl hover:bg-blue-100 transition-colors duration-200 mr-5"

                          onClick={() => {
                            setCurrentDocId(doc.id);
                            setDialogOpen(true); // Open dialog to generate image
                            console.log("Dialog opened for doc:", doc.id);
                          }}
                        >
                          <ImageIcon className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                        </Button>
                      ) : null}
                    </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <hr className="p-3 mt-10"></hr>


          
            <div className="flex justify-start gap-2">
          <FileClock></FileClock>
            <h2 className="text-slate-900 font-bold text-lg mb-6 font-sans">
           Shared Documents</h2>
           </div>
  
            <div className="grid grid-cols-4 gap-3">
            {groupedData.editor.length === 0 ? (
                <h2 className="text-gray-500 font-semibold text-sm mt-5">No shared documents found</h2>
              ) : (
                <>
                  {groupedData.editor.map((doc) => (
                    <div key={doc.id} className=" flex items-center justify-center bg-gray-100  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border-slate-500 w-[70%] h-full">
                      {/* Conditionally render the image or the document name */}
                      {imageUrls[doc.id] ? (
                        <a href={`/doc/${doc.id}`} className="w-full h-36">
                          <img
                            src={imageUrls[doc.id] }
                            alt="Update Doc Image"
                            className="w-full h-36 cursor-pointer rounded-lg flex items-center justify-center border-4"
                           
                            
                          />
                        </a>
                      ) : (
                        <a href={`/doc/${doc.id}`} className="flex-1 text-blue-500 underline text-center">
                          {doc.title}
                        </a>
                      )}
                      
                      {/* Show the button only if the image has not been generated */}
                      <div className="flex items-center justify-center">
                      {!imageUrls[doc.id] ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center border bg-white rounded-xl hover:bg-blue-100 transition-colors duration-200 mr-5"
                          onClick={() => {
                            setCurrentDocId(doc.id);
                            setDialogOpen(true); // Open dialog to generate image
                            console.log("Dialog opened for doc:", doc.id);
                          }}
                        >
                          <ImageIcon className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                        </Button>
                      ) : null}
                    </div>
                    </div>
                  ))}
                </>
              )}
          </div>
        </div>
      </div>
      </div>

      {/* Dialog for image generation */}
      <TextToImage
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onImageGenerated={handleImageGenerated}
        docId={currentDocId || ""}
      />
    </div>
  );
}
