'use server';

import { adminDb } from "@/firebase-admin";
import liveblocks from "@/lib/liveblocks";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    auth().protect();

    //these session claims are from clerk where we customized sessions to ahve username, full name etc
    const {sessionClaims} = await auth();
    const docCollectionRef = adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    })

    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id,
    });

    return {docId: docRef.id};
}

//another server action that takes roomID.
//without the need of calling api, we can directly call server component from client component and can use 'startTransition' to keep a track of updates
export async function deleteDocument(roomId: string) {
    auth().protect(); //to ensure the user is authenticated

    console.log("deleteDocument", roomId);
   
    //if any error occurenced im gonna console the error and return success
    try{
        // 1) first making refernce to roomId: and delete doc reference itself
        await adminDb.collection("documents").doc(roomId).delete();

        //we are finding all the places where our room(eg: abc) is allocated.
        const query = await adminDb
            .collectionGroup("rooms")
            .where("roomId", "==", roomId)
            .get();
    

        const batch = adminDb.batch();

        // 2) delete the room reference in the user's collection for every user who is in the room
        //looping through each one and then we do batch delete
        query.docs.forEach((doc) => {
            batch.delete(doc.ref);
        });

        await batch.commit();

        // 3) delete the room in liveblocks as well
        await liveblocks.deleteRoom(roomId);

        return {success: true};

    } catch (error) {
        console.error(error);
        return { success: false };
    }

}

export async function inviteUserToDocument(roomId: string, email: string) {
    //check if user is authenticated
    auth().protect();
    console.log("inviteUserToDocument", roomId, email);
    

    try {
        //the same thing happens when u create a room from scratch but role will be owner but here it is editor since u r inviting
        await adminDb
           .collection("users")
           .doc(email)
           .collection("rooms")
           .doc(roomId)
           .set({
                userId: email,
                role: "editor",
                createdAt: new Date(),
                roomId,
           });
        return { success: true };

    } catch (error) {
        console.error(error);
        return { success: false };

    }
}

export async function removeUserFromDocument(roomId: string, email: string) {
    auth().protect();

    console.log("removeUserFromDocument", roomId, email);
    
    try {
        await adminDb
            .collection("users")
            .doc(email)
            .collection("rooms")
            .doc(roomId)
            .delete();
        
            return {success: true};
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}