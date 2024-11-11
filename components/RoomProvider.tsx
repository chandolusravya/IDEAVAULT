//to have our own cursors and other stuff automatically plugged in.
'use client'
import { LiveList, LiveObject } from "@liveblocks/client";
import { 
    ClientSideSuspense,
    RoomProvider as RoomProviderWrapper,
 } from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";
import LiveCursorProvider from "./LiveCursorProvider";
function RoomProvider({roomId, children}:{
    roomId: string;
    children: React.ReactNode;
}) {
  return (
    <RoomProviderWrapper
    id={roomId}
    initialPresence={{
        cursor: null
    }}
    //initialStorage={{
     //   people: new LiveList([new LiveObject({name: "Marie", age: 30})]),
   // }}
    >
        <ClientSideSuspense fallback={<LoadingSpinner/>}>
        <LiveCursorProvider>
            {children}
        </LiveCursorProvider>
        </ClientSideSuspense>
    </RoomProviderWrapper>
  )
}

export default RoomProvider;