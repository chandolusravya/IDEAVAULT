
"use client"

//import { SignedIn, SignedOut, SignInButton} from "@clerk/clerk-react";
import { useUser, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


function Header() {
    //to check if a user is logged in or not user hook: useUser():

  const {user }=useUser();
  //const router = useRouter();

 {/* useEffect(() => {
    if (user) {
      router.push('/Home'); // Redirect to home if signed in
    }
  }, [user, router]);
*/}

  return (
    //check if a user exists, if so, show his/her name --> his/her Workspace
    <div className="flex items-center justify-between p-5">
    
      { user && (
        <h1>
            {user?.firstName}{`'s`} Workspace
        </h1>
      )}

      {/* Using Breadcrumbs--> similar to showing which directory/path you are in for the user*/}
      <div>
        <SignedOut>
             <SignInButton mode="modal">
                  Sign In
             </SignInButton>
        </SignedOut>
        <SignedIn>
           <UserButton></UserButton> 
           {/* userbutton is similar to the profile button */}
        </SignedIn>

      </div>
    </div>
  )
}

export default Header;
