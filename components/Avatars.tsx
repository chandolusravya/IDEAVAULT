"use client";

import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  import { useRef, useState, useEffect } from "react";
  
function Avatars() {
    const others = useOthers();
    const self = useSelf();
    // To keep track of the total number of users
  const previousOthersCount = useRef(others.length);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    // Check if a new user joined
    if (others.length > previousOthersCount.current) {
      setNotification("A new user has joined!");
      
      // Hide the notification after a delay
      setTimeout(() => setNotification(null), 3000);
    }
    // Update the ref to the current count
    previousOthersCount.current = others.length;
  }, [others]);

    //to get all teh urls
    const all = [self, ...others];

    return (
      <div className="flex flex-col gap-2">
      {/* Notification */}
      {notification && (
        <div className="p-1 text-center bg-green-100 text-green-700 rounded-lg shadow-md text-sm font-sans">
          {notification}
        </div>
      )}
    <div className="flex gap-2 items-center">
        <p className="font-light text-sm"> Users currently editing this page </p>
        <div className="flex -space-x-5">
            {all.map((other,i) => (
                <TooltipProvider key={other?.id + i}>
                <Tooltip>
                  <TooltipTrigger>
                  <Avatar className="border-2 hover: z-50">
                    <AvatarImage src={other?.info.avatar} />
                    
                    <AvatarFallback>{other?.info.name}</AvatarFallback>
                  </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{self?.id === other?.id ? "You" : other?.info.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              

            ))}
        </div>

</div>
        </div>
    );
}

export default Avatars;