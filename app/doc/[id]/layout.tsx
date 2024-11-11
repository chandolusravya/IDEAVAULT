//we will have roomprovider here.
import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";


function DocLayout({children, params: {id},}: {children: React.ReactNode; params: {id:string};}) {
    //if u r not logged in it is going to throw u to login screen
    auth().protect();
  return (
    <RoomProvider roomId={id}>{children}</RoomProvider>
  )
}

export default DocLayout;