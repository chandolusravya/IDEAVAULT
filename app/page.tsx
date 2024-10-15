import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {Poppins} from "next/font/google"
import TypewriterTitle from "@/components/TypewriterTitle";
import { ArrowRight, Sparkles } from "lucide-react";
import { SignUpButton, SignIn } from "@clerk/nextjs";
import Link from "next/link";
import FlickeringGrid from "@/components/ui/flickering-grid";


const font=Poppins({
  subsets:["latin"],
  weight:["400","400"]
});
export default function Home() {
  {/* <div className="bg-gradient-to-r min-h-screen from-[#FED1C6] to-[#FFEAD6]">
</div>
If I want the background from original coral pink to pricot color
 */}
  return (


    <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] relative z-10">
 
    <FlickeringGrid
        className="z-0 absolute insert-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.4}
        flickerChance={0.1}
       
      />
      <div className="flex justify-start">
       <Image
      src={"/images/logo_dark.png"}
      height="20"
      width="35"
      alt="app logo"
    />
   
      <h2 className="ml-2 sm:text-xl text-primary font-serif font-extrabold mt-4">Ideavault</h2>
      </div>
      
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
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
      
    </div>
   
    <section className=" mt-auto pb-12">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4>Hello second section"> </h1>
      </div>
     </section>
   
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
