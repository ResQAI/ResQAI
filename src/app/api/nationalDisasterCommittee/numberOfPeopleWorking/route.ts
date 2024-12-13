import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

// Update number of people working
export async function PUT(req: Request) {
  try {
    const { numberOfPeopleWorking }: { numberOfPeopleWorking: number } =
      await req.json();
    const docRef = doc(db, "nationalDisasterCommittee", "main");
    await updateDoc(docRef, { numberOfPeopleWorking });
    return NextResponse.json({
      success: true,
      message: "Number of people working updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get number of people working
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
      numberOfPeopleWorking: data?.numberOfPeopleWorking,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
