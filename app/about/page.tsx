"use client";
import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

function About() {
  return (
    <>
    <main>
    <div className='bg-[#e1ebf1e0] p-12 border-2 border-slate-300'>
    <h1 className='flex justify-center text-5xl font-serif font-bold text-[#165d77] mb-5'> About Us</h1>
    <div className='flex justify-evenly'>
      
      <h2 className='mb-3 '><span className='font-bold font-mono'>IDEAVAULT</span> is a secure, all-in-one platform designed to help you manage your projects, take notes, journal, and store important information in one place. Whether you're working solo or collaborating with a team, IDEAVAULT ensures that your data is safe, organized, and easily accessible</h2>
    </div>
    <div >
      <h1 className='text-2xl font-serif font-semibold mb-2 mt-2 text-[#165d77]'>Mission Statement</h1>
      <p>At IDEAVAULT, our mission is to provide individuals and teams with a powerful and secure platform that enables seamless collaboration and efficient information management. We are committed to delivering the best tools to enhance productivity and ensure that every user has a safe space to store and share ideas.</p>
    </div>
    <div>
        <h1 className='text-2xl font-serif font-semibold mb-2 mt-4 text-[#165d77]'>What Makes IDEAVAULT Unique?</h1>
        <p className='mb-3'>IDEAVAULT stands out by offering a versatile platform suited for both individual productivity and team collaboration.</p>
        <ul className='mb-3 mt-2'>
            <li className='mb-1'><span className='font-semibold font-mono'>For Individuals: </span>IDEAVAULT provides a secure space to store your notes and documents, allowing you to easily access and manage your personal information.</li>
            <li><span className='font-semibold font-mono'>For Teams: </span>The platform enables you to invite other users to access your documents, creating an environment where collaboration can take place seamlessly. 
            Whether you're working on a project or brainstorming ideas, IDEAVAULT ensures that all team members can work together efficiently, anywhere, anytime, or on any device.</li>

        </ul>
        <p>With IDEAVAULT, you have the flexibility to keep your personal tasks organized while also collaborating effectively with your team. Security, accessibility, and ease of collaboration are at the core of everything we do.</p>

    </div>
    <div>
        <h1 className='text-2xl font-serif font-semibold mb-2 mt-4 text-[#165d77]'>Solutions We Offer: </h1>
        <p>IDEAVAULT provides a range of powerful features designed to enhance productivity and collaboration. </p>
        <ul className='mb-3 mt-2'>
            <li className='mb-1'>
            <span className='font-semibold font-mono'>Rich-Text Editor with Flexible Customizations: </span>Our editor offers a comprehensive set of tools to format your documents with ease, enabling you to create, edit, and customize content to suit your needs.
            </li>
            <li className='mb-1'>
           <span className='font-semibold font-mono'>Real-Time Cursor Pointer:</span> Easily identify who is editing a document in real time with the cursor pointer feature, making collaboration seamless.
            </li>
            <li className='mb-1'>
                <span className='font-semibold font-mono'>	Customizable Home Dashboard:</span>Personalize your home screen based on the document title, ensuring a tailored and organized workspace that helps you stay focused.
            </li>
            <li className='mb-1'>
                <span className='font-semibold font-mono'>Summarization and Translation for New Users: </span>New to a document? Quickly understand the key points with our “Translate & Summarize” feature, which helps you get up to speed in no time.
            </li>
            <li className='mb-1'>
                <span className='font-semibold font-mono'>Multilingual Summarization: </span>Receive document summaries in any language of your choice, making it easier to collaborate with people from diverse linguistic backgrounds.
            </li>
            <li className='mb-1'>
            <span className='font-semibold font-mono'>Interactive GPT-Based Document Assistance: </span>Ask questions about your document and engage with our GPT-powered assistant for insights, clarifications, or further explanations. This ensures you always have the support you need while working with your documents.
            </li>
        </ul>
        <p>These solutions are designed to enhance the user experience, making IDEAVAULT an essential tool for individual productivity and team collaboration.</p>
    </div>
    <div>
        <h1 className='text-2xl font-serif font-semibold mb-2 mt-4 text-[#165d77]'>Key Benefits</h1>
        <ol className='mb-3 mt-2'>
            <li className='mb-1'>
                <span className='font-semibold font-mono'>Security: </span>We prioritize your data security with robust encryption and secure storage, ensuring your information is always protected
            </li>
            <li className='mb-1'>
                <span className='font-semibold font-mono'>
                    Collaboration:
                </span>IDEAVAULT allows for smooth and effective collaboration between team members, with real-time editing, document sharing, and live updates.
            </li>
            <li className='mb-1'><span className='font-semibold font-mono'>
                Ease of Use: </span>
                Our platform is intuitive and user-friendly, offering a seamless experience whether you're working solo or as part of a team.
            </li>
        </ol>
    </div>
    </div>
    </main>
    <footer className="flex items-center justify-between w-full p-6 z-50 bg-white">
  <div className="hidden md:flex items-center gap-x-2">
    <Image
      src={"/images/logo_dark.png"}
      height="35"
      width="35"
      alt="app logo"
    />
    <p className={cn("font-semibold font-serif")}>Ideavault</p>
  </div>

  <div className="flex items-center gap-x-2 text-muted-foreground">
    <Button variant="ghost" size="sm">
      Privacy Policy
    </Button>
    <Button variant="ghost" size="sm">
      Terms & Conditions
    
    </Button>
  </div>
  </footer>
    </>
  )
}

export default About;