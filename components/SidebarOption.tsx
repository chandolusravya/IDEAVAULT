'use client'
import React from 'react'
import Link from "next/link"
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';
import { db } from '@/firebase';
import { usePathname } from 'next/navigation';
function SidebarOption({href,id}:{
    href: string;
    id: string;
}) {

  const [data, loading, error]=useDocumentData(doc(db,"documents",id));
  const pathname=usePathname(); //to get end url
  const isActive=href.includes(pathname) && pathname != "/"; //to check which document is active
  if (!data) return null;
  return (
    <Link href={href} className={`relative border p-2 rounded-md h-9 w-44 flex items-center justify-center text-sm  ${
        isActive ? "bg-slate-200 font-bold border-[#aeb3ef] border-2 text-sm" : "border-[#d3d5f3] bg-slate-50 border-2"
    }`}>
        <p className='truncate'>{data.title}</p>
    </Link>
  )
}

export default SidebarOption