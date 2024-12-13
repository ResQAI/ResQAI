import { NextResponse } from "next/server";
import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  collection,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import { validateRequest } from "@/utils/validateRequest";
import { Chat, Group } from "@/models/nationalDisasterCommittee";
import { v4 as uuidv4 } from "uuid";

// Add a new chat group
export async function POST(req: Request) {
  try {
    const body: Partial<Group> = await req.json();
    const { isValid, errors } = validateRequest(body, ["name", "members"]);

    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const groupRef = doc(db, "nationalDisasterCommittee", "main");
    // const groupId = doc(collection(db, "chats")).id;
    const newGroup = {
      id: uuidv4(),
      chats: [],
      createdAt: new Date(),
      ...body,
    };

    await updateDoc(groupRef, {
      "chats.groups": arrayUnion(newGroup),
    });

    return NextResponse.json({
      success: true,
      message: "Group added successfully",
      group: newGroup,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all chat groups
export async function GET() {
  try {
    const docRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    return NextResponse.json({
      success: true,
      groups: data?.chats?.groups || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Add a chat to a specific group
export async function PUT(req: Request) {
  try {
    const body: { groupId: string; newChat: Chat } = await req.json();

    const committeeRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(committeeRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const updatedGroups = (data?.chats?.groups || []).map((group: Group) => {
      if (group.id === body.groupId) {
        return { ...group, chats: [...group.chats, body.newChat] };
      }
      return group;
    });

    await updateDoc(committeeRef, { "chats.groups": updatedGroups });

    return NextResponse.json({
      success: true,
      message: "Chat added successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Delete a chat group
export async function DELETE(req: Request) {
  try {
    const body: { groupId: string } = await req.json();

    const committeeRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(committeeRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const updatedGroups = (data?.chats?.groups || []).filter(
      (group: Group) => group.id !== body.groupId
    );

    await updateDoc(committeeRef, { "chats.groups": updatedGroups });

    return NextResponse.json({
      success: true,
      message: "Group deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
