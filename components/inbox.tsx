"use client";
import { ClientSideSuspense } from "@liveblocks/react";
import { Bell, BellIcon } from "lucide-react";
import {InboxNotification, InboxNotificationList} from "@liveblocks/react-ui";
import { useInboxNotifications } from "@liveblocks/react/suspense";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export const Inbox = () =>{
    return (
    <ClientSideSuspense fallback={<p>Loading..</p>}>
     <InboxMenu/>
    </ClientSideSuspense>
    );
};

const InboxMenu =() => {
    const {inboxNotifications} = useInboxNotifications();
return (
<DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button
        variant={"ghost"}
        className="relative"
        size={"icon"}
        >
            <BellIcon className="size-5" />
            {inboxNotifications.length > 0 && (
             <span className="absolute -top-1 -right-1 size-4 rounded-full bg-sky-500 text-xs text-white flex items-center justify-center">
                {inboxNotifications.length}
             </span>
            )}
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-auto">
     {inboxNotifications.length > 0 ? (

      <InboxNotificationList>

      </InboxNotificationList>
     ) : (
        <div className="p-2 w-[400px] text-center text-sm text-muted-foreground">
            No Notifications!
        </div>
     )}
    </DropdownMenuContent>
</DropdownMenu>
);
};