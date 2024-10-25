import React from 'react'
import Sidebar from '@/components/Sidebar'
function page() {
  return (
    <div className="flex min-h-screen">
         <Sidebar/>
   
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide"> Doc page
      
        </div>
        </div>
  )
}

export default page
