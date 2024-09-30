//for typewriter effect in landing page - using typewriter component of react
"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'
import { Sparkles } from 'lucide-react';

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
   
   <Typewriter
    options={{
        loop: true,
        //to loop forever
    }}
    onInit={(typewriter)=>{
    
     typewriter.typeString("Create. Plan. Collaborate.")
     .pauseFor(1000).deleteAll()
     .typeString("From Thoughts to Notes: Unleash Your Creativity with IdeaVault")
     .start()
    }}
   />
  )
}

export default TypewriterTitle;