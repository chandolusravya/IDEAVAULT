import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {Poppins} from "@next/font/google"
import TypewriterTitle from "@/components/TypewriterTitle";
import { ArrowRight, Sparkles } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

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


    <main className="flex flex-col min-h-screen bg-gradient-to-r  from-[#FFF3DB] to-[#fab5a9]">
   
      <h2 className="ml-8 sm:text-xl text-primary font-serif font-extrabold mt-4">Ideavault</h2>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
      <h1 className="text-outline text-2xl sm:text-6xl md:text-7xl text-slate-800 text-center font-sans font-bold mt-44">Your <span className="text-[#e36e51] font-serif">ultimate workspace </span>to build something beautiful</h1>
      <div className="mt-12"></div>
      <h2 className="text-base font-semibold sm:text-2xl md:text-3xl text-center font-serif text-slate-700"> 
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
   
    <section className=" mt-auto pb-12">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4>Hello second section">Section part </h1>
      </div>
     </section>
   
     <footer className="flex items-center justify-between w-full p-6 z-50">
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
 

    </main>
     


  );
}
