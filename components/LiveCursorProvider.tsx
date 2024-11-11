'use client'
//for real time aspect we use presence

import { useMyPresence, useOthers } from "@liveblocks/react/suspense"
import { PointerEvent } from "react";
import FollowPointer from "./FollowPointer";


function LiveCursorProvider({children}:{children: React.ReactNode}) {

  const [myPresence, updateMyPresence]=useMyPresence(); //from liveblocks.config.ts
  const others= useOthers();

function handlePointerMove(e: PointerEvent<HTMLDivElement>){
    //update from clientX and clientY to PageX and PageY for full page cursor tracking
  const cursor= {x: Math.floor(e.pageX), y: Math.floor(e.pageY)};
  updateMyPresence({cursor});
}

//when i leave ntg happens n other in the collaborative env. will see that im no longer active.
function handlePointerLeave(){
    updateMyPresence({cursor:null});
}

  return(
    <div 
    onPointerMove={handlePointerMove}
    onPointerLeave={handlePointerLeave}
    >
    {/** Render Cursors/ other peeople on page: */}
    {/**saying filter out only those who have curosor value. */}
    {others
    .filter((other) => other.presence.cursor !== null)
    .map(({connectionId, presence, info}) => (
     <FollowPointer 
     key={connectionId}
     info={info}
     //whenever u enter into room, u r assigned with a connection id.
      x={presence.cursor!.x}
      y={presence.cursor!.y}
      />   
     
    ))}
    
      {children}
    
    </div>
    );
  
}

export default LiveCursorProvider;