'use client'
import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
  
function Breadcrumbs() {
const path = usePathname();
//http://localhost:3000/doc/NMiIhSYRCIklyX7TtlmK
//this is the path we have, we need to split now.

  const [segments, setSegments] = useState<string[]>([]);
  const [docTitle, setDocTitle] = useState<string | null>(null);
  const [docExists, setDocExists] = useState(true); // Tracks if the document exists




  //const segments=path.split("/").filter(Boolean);
  useEffect(() => {
    // This effect will only run on the client side
    setSegments(path.split("/").filter(Boolean));
  }, [path]);


  useEffect(() => {
    if (segments.length > 1) {
      const lastSegment = segments[segments.length - 1];

      const docRef = doc(db, 'documents', lastSegment); // 'documents' is your collection name

      // Listen to real-time updates on the document using onSnapshot
      const unsubscribe = onSnapshot(
        docRef,
        (docSnap) => {
          if (docSnap.exists()) {
            setDocTitle(docSnap.data().title); // Assuming the title field is named "title"
            setDocExists(true);
          } else {
            setDocExists(false); // Document does not exist
          }
        },
        (error) => {
          console.error('Error listening to document:', error);
        }
      );

      return () => unsubscribe(); // Clean up the listener on component unmount
    }
  }, [segments]);


  if (segments.length === 0 || !docExists) return null; // Don't render breadcrumbs if no segments are available

  //console.log(segments);
  return (
    <nav aria-label="breadcrumb">
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/documents" className="hover:text-gray-900">Home</BreadcrumbLink>
    </BreadcrumbItem>
    {/**map throught the segments now */}
    {segments.map((segment, index) =>{
        if (!segment) return null;

        const href = `/${segments.slice(0,index + 1).join("/")}`;
        const isLast=index === segments.length - 1;

        return (
            <Fragment key={segment}>
                <BreadcrumbSeparator/>
            <BreadcrumbItem>
            {isLast ? (
                <BreadcrumbPage className="text-gray-900 ">{docTitle ? `${docTitle} (${segment})` : segment}</BreadcrumbPage>
            ):(
                <BreadcrumbLink href={href} className="hover:text-gray-900">{segment}</BreadcrumbLink>
            )}
               
            </BreadcrumbItem>
            </Fragment>
        );
    })}


  </BreadcrumbList>
</Breadcrumb>
</nav>
  )
}

export default Breadcrumbs