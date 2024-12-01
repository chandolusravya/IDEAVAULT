// import * as React from "react"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselDemo() {
//   return (
//     <Carousel className="w-full max-w-sm">
//       <CarouselContent>
//         {["/images/translate_doc.png", "/images/chatting.png"].map((src, index) => (
//           <CarouselItem key={index}>
//             <div >
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <img src={src} alt={`carousel-image-${index}`} className="object-cover w-[100%] h-[100%] " />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {["/images/translate_doc.png", "/images/chatting.png"].map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <img
                src={src}
                alt={`carousel-image-${index}`}
                className="object-cover w-full h-full rounded-md" // Adjust image size
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-3xl  text-black bg-white border-2 border-slate-900 rounded-full p-2 mx-2 hover:bg-gray-800 hover:text-white" />
      <CarouselNext className="text-9xl text-black border-2 border-slate-900 bg-white rounded-full p-2 mx-2 hover:bg-gray-800 hover:text-white" />
    </Carousel>
  );
}

