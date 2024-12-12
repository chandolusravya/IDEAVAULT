"use client"

import { 
  useUser, 
  SignedIn, 
  SignedOut, 
  SignInButton, 
  UserButton
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Breadcrumbs from "./Breadcrumbs";



// Font configuration
const font = Poppins({
  subsets: ["latin"],
  weight: ["500"]
});

function Header() {
  const { user, isLoaded } = useUser();

  // Handle loading state explicitly
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-4">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between p-2 border-b-2 border-dashed border-[#f4dae7e0] bg-[#f3edf0]">
      {/* Logo and App Name - Far Left */}
      <div className="flex items-center gap-x-2">
        <Image
          src="/images/logo_dark.png"
          height="28"
          width="28"
          alt="app logo"
        />
        <p className={cn("font-bold text-sm", font.className)}>
          {user ? `${user.firstName}'s Ideavault` : 'Ideavault'}
        </p>
      </div>

      {/* Breadcrumbs - Center */}
      <Breadcrumbs />

      {/* Authentication and Navigation - Far Right */}
      <div className="flex items-center gap-x-4">
        {/* Signed Out View */}
        <SignedOut>
          <NavigationMenu>
            <NavigationMenuList>
              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`${font.className} gap-x-2 font-bold`}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-2">
                    {[
                      "Note Taking",
                      "Teams",
                      "Productivity",
                      "Self-Organizing"
                    ].map((solution) => (
                      <li key={solution}>
                        <Button className="w-32 h-10 border-2 border-white flex justify-start items-center">
                          {solution}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* AI Features Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={`${font.className} gap-x-2`}
                >
                  AI Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-2 ">
                    {[
                      "Summarize & Translate",
                      "Chat with document",
                      "Custom Dashboard"
                    ].map((feature) => (
                      <li key={feature}>
                        <Button className="w-44 h-10 border-2 border-white flex justify-start items-center ">
                          {feature}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login/Register Button */}
          <div className="transition-all hover:bg-gray-200 hover:border-[#f3edf0] border-2 border-gray-300 w-36 p-1 text-sm font-semibold rounded-lg flex items-center justify-center">
            <SignInButton mode="modal">
              Log In / Register
            </SignInButton>
          </div>
        </SignedOut>

        {/* Signed In View */}
        <SignedIn>
          <UserButton  />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;