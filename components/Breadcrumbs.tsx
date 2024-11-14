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
  
function Breadcrumbs() {
const path = usePathname();
//http://localhost:3000/doc/NMiIhSYRCIklyX7TtlmK
//this is the path we have, we need to split now.

  const segments=path.split("/").filter(Boolean);

  //console.log(segments);
  return (
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
                <BreadcrumbPage className="text-gray-900 ">{segment}</BreadcrumbPage>
            ):(
                <BreadcrumbLink href={href} className="hover:text-gray-900">{segment}</BreadcrumbLink>
            )}
               
            </BreadcrumbItem>
            </Fragment>
        );
    })}


  </BreadcrumbList>
</Breadcrumb>

  )
}

export default Breadcrumbs