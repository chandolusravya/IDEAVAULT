
"use client"

import { useUser, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Image from "next/image";
import {Poppins} from "next/font/google"
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

;


const font=Poppins({
  subsets:["latin"],
  weight:["500","500"]
});

  

function Header() {
    //to check if a user is logged in or not user hook: useUser():

  const {user, isLoaded }=useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set the state to true only on the client side
  }, [])
  //const router = useRouter();

 {/* useEffect(() => {
    if (user) {
      router.push('/Home'); // Redirect to home if signed in
    }
  }, [user, router]);
*/}

  return (
    //check if a user exists, if so, show his/her name --> his/her Workspace
    <div className="flex items-center justify-between p-2 border-b-2 border-dashed border-[#f4dae7e0]  bg-[#f3edf0]">
    
      { isClient && isLoaded && user && (
        <h1>
            {user?.firstName}{`'s`} Workspace
        </h1>
      )}

      {/* Using Breadcrumbs--> similar to showing which directory/path you are in for the user*/}
      <Breadcrumbs/>
      {/* <div className="flex-grow"></div> */}
      <div className="flex gap-x-4">
        <SignedOut>
             
             <div className="hidden md:flex items-center gap-x-2 ">
            <Image
              src={"/images/logo_dark.png"}
              height="35"
              width="35"
              alt="app logo"
            />
            <p className={cn("font-bold text-sm", font.className)}>Ideavault</p>
            </div>
            <div className=" flex justify-center items-center ml-64 gap-x-2 ">
            <NavigationMenu  >
              <NavigationMenuList>
                
                <NavigationMenuItem >
                <NavigationMenuTrigger className={`${font.className} ml-36 gap-x-2 font-bold`}>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent
                    
                        onPointerEnter={(e) => e.stopPropagation()}
                        onPointerLeave={(e) => e.stopPropagation()}
                      >
                        <ul >
                        <li>
                          <Button className="w-32 h-10 border-2 border-white flex justify-start items-center">
                            Note Taking
                          </Button>
                        </li>

                           
                            <li>
                            <Button className="w-32 h-10 border-2 border-x-white flex justify-start items-center">Teams</Button>
                            </li>
                            <li>
                            <Button className="w-32 h-10 border-2 border-x-white flex justify-start items-center">Productivity</Button>
                            </li>
                            <li>
                            <Button className="w-32 h-10 border-2 border-x-white flex justify-start items-center">Self-Organizing</Button>
                            </li>
                        
                            
                        </ul>
                      </NavigationMenuContent>

                </NavigationMenuItem>
            
                <NavigationMenuItem >
                <NavigationMenuTrigger className={`${font.className} gap-x-2`} >AI Features</NavigationMenuTrigger>
                <NavigationMenuContent
          
                   
                        onPointerEnter={(e) => e.stopPropagation()}
                        onPointerLeave={(e) => e.stopPropagation()}
                      >
                        
                        <ul >
                        <li>
                          <Button className="w-44 h-10 border-2 border-white flex justify-start items-center">
                           Summarize & Translate 
                          </Button>
                        </li>
                            <li>
                            <Button className="w-44 h-10 border-2 border-x-white flex justify-start items-center">Chat with document</Button>
                            </li>
                            <li>
                            <Button className="w-44 h-10 border-2 border-x-white flex justify-start items-center">Custom Dashboard</Button>
                            </li>
                            
                        </ul>
                      
                      </NavigationMenuContent>

                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu> 
<div className={`${font.className} text-sm flex items-center gap-x-10 `}>
            <div className="  ">
              <Link href="/files/About.docx" className={font.className}> 
              About Us
              </Link>
          
            </div>
         <div className="flex justify-center items-center ml-96 transition-all hover:bg-gray-200 hover:border-[#f3edf0] border-2 border-gray-300 w-36 p-1 text-sm rounded-lg">
          <SignInButton mode="modal" >
              Log In / Register
             </SignInButton>
             </div>
             </div>

             </div>
             
        </SignedOut>
        <SignedIn>
          
           <UserButton/>
           
           
          
           {/* userbutton is similar to the profile button */}
        </SignedIn>

      </div>
    </div>
  )
}

export default Header;
