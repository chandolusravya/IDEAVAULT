//document page..i.e when clicked on new document, its gonna take u here rather than 404, we edit here together
'use client'
import Sidebar from '@/components/Sidebar'
import Document from '@/components/Document'
import { use } from 'react';
//u get this params by giving props as argument within paranthesis and then give command console.log(props)
function DocumentPage({
  params: paramsPromise,
}: {
  params: Promise<{id: string}>;
}) {
  const params =use(paramsPromise);
  const {id} =params;
  
  //console.log(id);
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexGrow: 1 }}>
      <Sidebar />
      <div style={{ margin: '30px', flexGrow: 1 }}>
      {/**<div className='flex flex-col flex-1 min-h-screen'> */}
      <Document id={id} />
            {/**<div>Document page : {id}</div>*/}
      </div>
    </div>
  )
}

export default DocumentPage;