import { NextResponse } from "next/server";
import {
  collection,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { validateRequest } from "@/utils/validateRequest";
import { IncomingDisaster } from "@/models/nationalDisasterCommittee";

// Add a new incoming disaster
export async function POST(req: Request) {
  try {
    const body: Partial<IncomingDisaster> = await req.json();
    const { isValid, errors } = validateRequest(body, [
      "name",
      "tags",
      "exactLocation",
      "level",
      "peopleAffected",
      "estimatedEconomicImpact",
      "startTime",
      "endTime",
      "status",
      "causativeFactors",
      "geologicalData",
      "weatherData",
    ]);

    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }
    const disasterRef = doc(
      collection(db, "nationalDisasterCommittee"),
      "main"
    );

    const newIncomingDisaster = { ...body, id: uuidv4() };

    await updateDoc(disasterRef, {
      incomingDisasters: arrayUnion(newIncomingDisaster),
    });

    return NextResponse.json({
      success: true,
      message: "Incoming disaster added successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all incoming disasters
export async function GET() {
  const docRef = doc(collection(db, "nationalDisasterCommittee"), "main");
  const docSnap = await getDoc(docRef);

  try {
    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Update a specific incoming disaster
export async function PUT(req: Request) {
  try {
    const body: { id: string; updatedFields: Partial<IncomingDisaster> } =
      await req.json();

    const docRef = doc(collection(db, "nationalDisasterCommittee"), "main");
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const updatedDisasters = (data?.incomingDisasters || []).map(
      (disaster: IncomingDisaster) =>
        disaster.id === body.id
          ? { ...disaster, ...body.updatedFields }
          : disaster
    );

    await updateDoc(docRef, { incomingDisasters: updatedDisasters });

    return NextResponse.json({
      success: true,
      message: "Incoming disaster updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Delete a specific incoming disaster
export async function DELETE(req: Request) {
  try {
    const body: { id: string } = await req.json();

    const docRef = doc(collection(db, "nationalDisasterCommittee"), "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const filteredDisasters = (data?.incomingDisasters || []).filter(
      (disaster: IncomingDisaster) => disaster.id !== body.id
    );

    await updateDoc(docRef, { incomingDisasters: filteredDisasters });

    return NextResponse.json({
      success: true,
      message: "Incoming disaster deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
