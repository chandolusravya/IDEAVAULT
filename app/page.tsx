import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  {/* <div className="bg-gradient-to-r min-h-screen from-[#FED1C6] to-[#FFEAD6]">
</div>
If I want the background from original coral pink to pricot color
 */}
  return (


    <main className="flex w-full flex-col bg-gradient-to-r min-h-screen from-[#FFF3DB] to-[#fab5a9]">
    <div >
      <h2 className="ml-8 sm:text-xl text-primary font-serif font-extrabold mt-4">Ideavault</h2>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-outline text-2xl sm:text-7xl text-slate-800 text-center font-sans font-bold mt-44">Your <span className="text-[#e36e51] font-serif">ultimate workspace </span>to build something beautiful</h1>
      <div>
      <h3> Ideavault helps you and your team to create, plan, and collaborate seamlessly</h3>
    </div>
      </div>
    </div>
    
     
    </main>

  );
}
