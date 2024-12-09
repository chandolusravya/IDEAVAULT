//we will have roomprovider here.
import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";


export default async function DocLayout({children, params:paramsPromise, }: {children: React.ReactNode; params: Promise<{id:string}>;}) {
    //if u r not logged in it is going to throw u to login screen
    //auth().protect();
    const { userId } = await auth()

  if (!userId) {
    return new Response('User is not signed in.', { status: 401 })
  }
    const {id} = await paramsPromise;
  return (
    <RoomProvider roomId={id}>{children}</RoomProvider>
  )
}

