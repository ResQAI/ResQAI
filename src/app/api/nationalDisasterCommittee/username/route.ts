import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

// Update username
export async function PUT(req: Request) {
  try {
    const { username }: { username: string } = await req.json();
    const docRef = doc(db, "nationalDisasterCommittee", "main");
    await updateDoc(docRef, { username });
    return NextResponse.json({
      success: true,
      message: "Username updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get username
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
    return NextResponse.json({ success: true, username: data?.username });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
