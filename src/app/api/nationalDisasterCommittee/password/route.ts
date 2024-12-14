import { NextResponse } from "next/server";
import {
  collection,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/utils/firebase";

// Update password
export async function PUT(req: Request) {
  try {
    const { password }: { password: string } = await req.json();
    const docRef = doc(collection(db, "nationalDisasterCommittee"), "main");
    await updateDoc(docRef, { password });
    return NextResponse.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get password
export async function GET() {
  try {
    const docRef = doc(collection(db, "nationalDisasterCommittee"), "main");
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }
    const data = docSnap.data();
    return NextResponse.json({ success: true, password: data?.password });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
