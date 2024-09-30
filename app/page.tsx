import { Button } from "@/components/ui/button";
import Image from "next/image";
import TypewriterTitle from "@/components/TypewriterTitle";
import { ArrowRight, Sparkles } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  {/* <div className="bg-gradient-to-r min-h-screen from-[#FED1C6] to-[#FFEAD6]">
</div>
If I want the background from original coral pink to pricot color
 */}
  return (


    <main className="flex flex-col min-h-screen bg-gradient-to-r  from-[#FFF3DB] to-[#fab5a9]">
   
      <h2 className="ml-8 sm:text-xl text-primary font-serif font-extrabold mt-4">Ideavault</h2>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <h1 className="text-outline text-2xl sm:text-7xl text-slate-800 text-center font-sans font-bold mt-44">Your <span className="text-[#e36e51] font-serif">ultimate workspace </span>to build something beautiful</h1>
      <div className="mt-12"></div>
      <h2 className="font-semibold text-2xl text-center font-serif text-slate-700"> 
      <div className="flex items-center"><Sparkles className="mr-2"/><TypewriterTitle />
   
      </div>
      </h2>
      <div className="mt-8"></div>
      <div className="flex justify-center">
      <Button>
      <SignInButton>
        Get Started 
     
      </SignInButton>
      <ArrowRight className="ml-2 w-5 h-5 strokewidth={5}"/>
      </Button>
     </div>
      
    </div>
   
     <section className="mt-auto pb-12 overflow-hidden">
      <div>
        <h1>Hello second section </h1>
      </div>
     </section>
    </main>
   

  );
}
