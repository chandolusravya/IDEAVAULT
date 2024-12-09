// components/Comment.tsx

'use client';

import { useThreads } from "@liveblocks/react/suspense"; // for fetching threads
import { Composer, Thread } from "@liveblocks/react-ui"; // for composing and displaying threads
import { cn } from "@/lib/utils";





const CommentSection = () => {
  const { threads } = useThreads();


  // Combine self and others into a list of users
 
  
  return (
    <div className="comments-section max-w-6xl mx-auto p-2 border-[#f4dae7e0] border-2 border-dashed  bg-[#f3edf0]">
      <h2 className="text-lg font-semibold font-serif text-slate-800">COMMENTS</h2>

      {/* Display existing threads */}
      <div className="mt-3">
        {threads.length === 0 ? (
          <p className="font-mono text-sm">No comments yet. Be the first to comment!</p>
        ) : (
          threads.map((thread) => (
            <div
              key={thread.id}
              className={cn(
                " border-2 border-slate-300 p-3 my-4 rounded-md bg-white text-xs" , // Basic border and padding
                thread.resolved ? "opacity-60" : "opacity-100", // Opacity change based on resolved state
                
                "transition-all" // Smooth transitions
              )}
            >
             
            <Thread key={thread.id} thread={thread} className="relative" />
            
            
              </div>
          ))
        )}
      </div>

      {/* Composer for adding new threads */}
      <Composer  className="my-5 bg-gray-100 p-2 rounded-md transition-all hover:bg-white" />
      
    </div>
  );
};

export default CommentSection;
