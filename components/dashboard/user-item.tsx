"use client"
import { ChevronsLeftRight } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,

 } from "../ui/dropdown-menu"
import { useUser } from "@clerk/nextjs"
export const UserItem = () =>{

   const {user}=useUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {/** change primary background color when u hover over. */}
                <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
                  <div className="gap-x-2 flex items-center max-w-[150px]">
                    <Avatar className="h-5 w-5">
                        <AvatarImage src={user?.imageUrl}/>
                    </Avatar>
                    <span className="text-start font-medium line-clamp-1">
                        {user?.fullName}&apos;s Ideavault
                    </span>
                  </div>
                  <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
                </div>

            </DropdownMenuTrigger>
            <DropdownMenuContent 
                className="w-50" 
                align="start"
                alignOffset={11}
                forceMount >
                    <div className="flex flex-col space-y-4 p-2 mr-2 ">
                        <p className="text-xs font-medium leading-none text-muted-foreground">
                            {user?.emailAddresses[0].emailAddress}
                        </p>
                       {/* avatar inside sidebar
                        <div className="flex items-center gap-x-2">
                            <div className="rounded-md bg-secondary p-1">
                                <Avatar className="h-4 w-4">
                                    <AvatarImage src={user?.imageUrl}/>
                                </Avatar>
                            </div>

                        </div>*/}
                    </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}