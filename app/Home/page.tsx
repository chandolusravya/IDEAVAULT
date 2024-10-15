import Sidebar from "@/components/Sidebar"

export default function Home(){
    return (
        <div className="flex min-h-screen">
            
              <Sidebar/>
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide"> Home page
      
        </div>
        </div>
    )
}