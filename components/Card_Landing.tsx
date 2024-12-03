"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
interface CardProps {
  image: string;
  text_of_img: string;
}

const Card_Landing: React.FC<CardProps> = ({image, text_of_img}) => {
 const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div className='relative overflow-hidden h-[150px] w-[180px] bg-slate-400 rounded-xl flex justify-center items-center border-2 border-slate-200'
    onHoverStart={() => setShowOverlay(true)}
    onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
      {showOverlay && (
        <motion.div className='absolute inset-0 z-10 flex justify-center items-center'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        >
         <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full' />
          <motion.h1 className='bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center ga-[0.5ch] hover:opacity-75 '
            initial={{y:20}}
            animate={{y:0}}
            exit={{y:20}}
          >
            <span>{text_of_img}</span>
          </motion.h1>
          </motion.div>
      )}
      </AnimatePresence>
      <Image src={image} alt={image} fill style={{objectFit: 'cover'}}></Image>
    </motion.div>
  );
}

export default Card_Landing;