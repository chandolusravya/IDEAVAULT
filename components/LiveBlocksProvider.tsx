//higher order component that has children and it wraps around it.
//check if env. variables are not set correctly, we r gng to throw an error.

'use client'

import {
    LiveblocksProvider,
    RoomProvider,
  } from "@liveblocks/react/suspense";

function LiveBlocksProvider({children}:{children: React.ReactNode}){
    if (!process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY) {
        throw new Error("NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY is not set");
    }

    // Define resolveUsers to fetch user metadata
  
    //children because who ever is using will get rendered inside
    return (
        //throttle for 60FPS. to get smooth real time experience. 16 is max 
    <LiveblocksProvider throttle={16} authEndpoint={"/auth-endpoint"}
     resolveUsers = {async ({ userIds }: { userIds: string[] }) => {
        // Fetch user metadata from your own source or Liveblocks API
        // For example, you can return an array of user objects with name and avatar
        
        const users = await userIds.map(userId => ({
          
          name: ` ${userId}`, 
           email: "",
           avatar:"",
        }));
    
        return users;
      }}
    
    >
        {children}
    </LiveblocksProvider>
)}

export default LiveBlocksProvider;