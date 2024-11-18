//code for collanorative editor
"use client";
import { useRoom, useSelf } from "@liveblocks/react/suspense";
import { useEffect, useState } from "react";
import * as Y from "yjs";
import {LiveblocksYjsProvider} from "@liveblocks/yjs";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { BlockNoteView } from "@blocknote/shadcn";
import { BlockNoteEditor } from "@blocknote/core";
import { useCreateBlockNote} from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import stringToColor from "@/lib/stringToColor";
import TranslateDocument
 from "./TranslateDocument";
type EditorProps = {
    doc: Y.Doc;
    provider: any;
    darkMode: boolean;
}

function BlockNote({doc, provider, darkMode}: EditorProps) {
    //useSelf is liveblocks hooks
    //this gives user information i.e. if u r typing, then ur friends can see ur typing . So this is where that real time typing updates as well as color matching is done
    const userInfo = useSelf((me) => me.info);

    const editor: BlockNoteEditor = useCreateBlockNote({
        collaboration: {

            provider,

            //fragment tells where in the YDoc we r storing the info.{we r storing with the key of document-store}
            fragment: doc.getXmlFragment("document-store"),

            //here, as the user is typing, user info. name n all is populated with the auth-endpoint which was using clerk.
            user: {
                name: userInfo?.name,
                color: stringToColor(userInfo?.email),

            },
        },

    });

  return (
    <div className="relative max-w-6xl mx-auto">
        <BlockNoteView
          className="min-h-screen"
            editor={editor} 
            theme={
                darkMode ? "dark" : "light"
            }
            />
    </div>
  )
}



function Editor() {
    //to get access to room info
    const room = useRoom();
    const [doc, setDoc] =useState<Y.Doc>();
    const [provider, setProvider]= useState<LiveblocksYjsProvider>();
    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        const yDoc = new Y.Doc(); //Y.Doc is the structire of the document that stores rich text and real time data store.
        const yProvider = new LiveblocksYjsProvider(room, yDoc);
        setDoc(yDoc);
        setProvider(yProvider);

        //whenever we leave the room we destroy/cleanup the following:

        return() => {
            yDoc?.destroy();
            yProvider?.destroy();

        };

    }, [room]);

    //if no doc or provider we are going t return null;

    if (!doc || !provider){
        return null;
    }

    const style = `hover:text-white ${
        darkMode
        ? "text-gray-300 bg-gray-700 hover:bg-gray-100 hover:text-gray-700"
        : "text-gray-700 bg-gray-200 hover:bg-gray-300 hover:text-gray-700"
    }`;

 return ( 
 <div className="max-w-6xl mx-auto">
    <div className="flex items-center gap-2 justify-end mb-10">
       
        {/**translate document AI  */}

        <TranslateDocument doc={doc} />

        {/**chat with docuent AI */}

        {/**Dark mode */}
        <Button className={style} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" /> }
        </Button>
    </div>
    {/**block note */}
    <BlockNote doc={doc} provider={provider} darkMode={darkMode} />

 </div>
 );
}

export default Editor;