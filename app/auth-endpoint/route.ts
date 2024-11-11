import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import liveblocks from "@/lib/liveblocks";
import { adminDb } from "@/firebase-admin";


export async function POST(req:NextRequest) {
    auth().protect(); //to ensure user is authenticated.
    
    const {sessionClaims} = await auth();
    const {room}=await req.json();

    //get user, prepare a session & populate data in the user info as part of the access token 
    const session= liveblocks.prepareSession(sessionClaims?.email!, {
        userInfo:{
            name: sessionClaims?.fullName!,
            email: sessionClaims?.email!,
            avatar: sessionClaims?.image!,
        },

    });

    //we check the users database records to see all the rooms useer has access to 
    const usersInRoom= await adminDb
    .collectionGroup("rooms")
    .where("userId", "==", sessionClaims?.email)
    .get();

    //check whether the room the user is about to access is within the list of records that are stored on the users rooms collection.
    const userInRoom=usersInRoom.docs.find((doc) => doc.id ===room);

    //allowing user to access this room-letting through in
    if (userInRoom?.exists){
        session.allow(room,session.FULL_ACCESS);
        const {body, status}=await session.authorize();
        
        console.log("you are authorized!")
        
        return new Response(body, {status});// returning this t frontend with body n status
    }else{
        return NextResponse.json(
            {message: "You are not in this room"},
            {status: 403}
        );
    }
}