import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {Poppins} from "next/font/google"
import TypewriterTitle from "@/components/TypewriterTitle";
import { ArrowRight, Sparkles } from "lucide-react";
import Globe from "@/components/ui/globe";
import Link from "next/link";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { CarouselDemo } from "@/components/CarouselDemo";
import Card_Landing from "@/components/Card_Landing";
import useMeasure from "react-use-measure";

const font=Poppins({
  subsets:["latin"],
  weight:["400","400"]
});
export default function Home() {
  {/* <div className="bg-gradient-to-r min-h-screen from-[#FED1C6] to-[#FFEAD6]">
</div>
If I want the background from original coral pink to pricot color
bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
 */}

 const images = [
  { image: "/images/journal_f.jpg", text: "Journal" },
  { image: "/images/meeting_notes.webp", text: "Meeting Notes" },
  {image: "/images/class_notes.jpeg", text: "Class Notes"},
  { image: "/images/planner.jpeg", text: "Planner" },
  { image: "/images/research.jpg", text: "Research" },
  { image: "/images/to_do_task.png", text: "To-Do" },
  
  { image: "/images/memo.webp", text: "Memo" },
];



  return (


    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] relative z-10  scroll-smooth">
 
    <FlickeringGrid
        className="z-0 absolute insert-0 w-full h-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.4}
        flickerChance={0.1}
       
      />
      {/* <div className="flex justify-start">
       <Image
      src={"/images/logo_dark.png"}
      height="20"
      width="35"
      alt="app logo"
    />
   
      <h2 className="ml-2 sm:text-xl text-primary font-serif font-extrabold mt-4">Ideavault</h2>
      </div> */}
  <section className="flex flex-col items-center justify-center min-h-screen mt-[15vh]">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <h1 className="text-outline text-3xl sm:text-6xl md:text-7xl text-slate-800 text-center font-sans font-bold mt-44">
    
      Your <span className="text-[#e36e51] font-serif">ultimate workspace </span>to build something beautiful</h1>
      <div className="mt-12"></div>
      <h2 className="text-base font-semibold sm:text-2xl md:text-3xl text-center font-serif text-slate-700"> 
      <div className="flex items-center"><Sparkles className="mr-2"/><TypewriterTitle />
   
      </div>
      </h2>
      <div className="mt-8"></div>
      <div className="flex justify-between gap-5">
       
      <Button className="px-8 py-0.5 
      border-2 border-[#d3d5f3] hover:border-black dark:border-white uppercase
      bg-[#d3d5f3]
      hover:bg-slate-700
      
      text-black font-bold hover:text-white
      transition duration-200 
      text-sm
      hover: shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
      <Link href="/sign-up" className="flex items-center">
        GET IDEAVAULT FREE <ArrowRight className="ml-2 w-5 h-5 strokewidth={5}"/>
        
        </Link>
      
      </Button>
      <Button className="px-8 py-0.5  
      border-2 border-[#d3d5f3] hover:border-black dark:border-white uppercase
      bg-[#d3d5f3]
      hover:bg-slate-700
      
      text-black font-bold hover:text-white 
      transition duration-200 
      text-sm 
      hover: shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
   <Link href="/" className="flex items-center">
        Explore Docs <ArrowRight className="ml-2 w-5 h-5 strokewidth={5}"/>
        
        </Link>
      </Button>
  
     </div>

   
     <div className="container mx-auto flex justify-center items-center">
        <div className="absolute  flex gap-4  mt-80">
          {[...images].map((item, idx)=> (
           <Card_Landing key={idx} image={item.image}  text_of_img={item.text} />
          ))}
        </div>
         
        
      </div>
     
      
    </div>
</section>
    <section className="flex-grow-1 mt-[0vh] pb-12 ">
      <div className="flex  mb-16 gap-x-14 mr-16 ml-40 ">
      <div className="container mx-auto flex items-center justify-center gap-x-14">
        {/* <h1 className="text-2xl font-bold mb-4"> Collaborate from anywhere</h1>  */}
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b font-serif from-blue-900 to-blue-500/80 bg-clip-text  text-4xl font-bold text-transparent dark:from-white dark:to-slate-900/10 text-wrap" >
      Collaborate in real-time, seamlessly, anywhere, anytime
      </span>
        <div className="relative flex h-[40vh]  w-[101vh] -top-0 items-center justify-center overflow-hidden rounded-xl border  bg-gradient-to-b from-gray-900 to-gray-300/80 md:pb-60 md:shadow-2xl ">
      
        <Globe
     className="absolute inset-0 h-[42vh] w-[42vh]"
   />

      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
     
      </div>
      </div >
      <div className="flex items-center mb-16 gap-x-32 ml-48 mr-16">
  <div className="relative flex h-[40vh] w-[40vh] items-center justify-center overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-b from-gray-800 to-gray-300/80 md:shadow-2xl ">
    <Image
      className="absolute inset-0 h-[40vh] w-[40vh] object-cover"
      src="/images/remember_anything_animated.webp"
      alt="remember"
      width={500} // Arbitrary large value; actual size is controlled by CSS
      height={500} // Arbitrary large value; actual size is controlled by CSS
    />
    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
  </div>
  <div className="flex-1">
    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b font-serif from-blue-950 to-blue-500/80 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-slate-900/10">
      Remember Anything & Everything
    </span>
  </div>
</div>

<div className="flex items-center mb-16 gap-x-12 ml-48 mr-16">
  <div className="flex-1 mt-8">
    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b font-serif from-blue-900 to-blue-500/80 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-slate-900/10 flex text-wrap">
      An editor with endless customization and live pointers tracking who's editing
    </span>
  </div>
  
  <div className="relative flex h-[40vh] w-[65vh] items-center justify-center overflow-hidden rounded-3xl border-2 border-gray-200 bg-gradient-to-b from-gray-800 to-gray-300/80 md:shadow-2xl">
    <Image
      className="absolute inset-0 h-[40vh] w-[65vh] object-cover"
      src="/images/editor_flexible_2.webp"
      alt="remember"
      width={500} // Arbitrary large value; actual size is controlled by CSS
      height={500} // Arbitrary large value; actual size is controlled by CSS
    />
    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
  </div>
</div>

<div className="flex items-center mb-16 gap-x-32 ml-48 mr-16">
  <div className="relative flex h-[50vh] w-[58vh] items-center justify-center overflow-hidden rounded-xl  md:shadow-2xl bg-[#f3edf0] ">
    <CarouselDemo />
  </div>
  <div className="flex-1">
    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b font-serif from-blue-900 to-blue-500/80 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-slate-900/10">
      AI-powered Doc insights: Multilingual Summarization, translation, Interactive GPT - Based Document Assistance, all in one place
    </span>
  </div>
</div>



     </section>


     {/* <section className="  pb-12 flex-grow">
      <div className="container mx-auto py-8 flex justify-center items-center">
        <div className="absolute  flex gap-4 ">
          {[...images].map((item, idx)=> (
           <Card_Landing key={idx} image={item.image}  text_of_img={item.text} />
          ))}
        </div>
         
        
      </div>
     </section> */}
    
   
    
    
   <footer className="flex items-center justify-between w-full p-6 z-50 bg-white">
  <div className="hidden md:flex items-center gap-x-2">
    <Image
      src={"/images/logo_dark.png"}
      height="40"
      width="40"
      alt="app logo"
    />
    <p className={cn("font-semibold", font.className)}>Ideavault</p>
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

</div>


   
     


  );
}
