import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { validateRequest } from "@/utils/validateRequest";
import { Disaster } from "@/models/nationalDisasterCommittee";
import { v4 as uuidv4 } from "uuid";

// Add a new disaster
export async function POST(req: Request) {
  try {
    const body: Partial<Disaster> = await req.json();
    const requiredFields = [
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
    ];
    const { isValid, errors } = validateRequest(body, requiredFields);
    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }
    if (
      !body.exactLocation ||
      !body.exactLocation.latitude ||
      !body.exactLocation.longitude
    ) {
      return NextResponse.json(
        {
          success: false,
          errors: ["Missing or incomplete exactLocation field"],
        },
        { status: 400 }
      );
    }
    const disasterRef = doc(db, "nationalDisasterCommittee", "main");
    const newDisaster = {
      ...body,
      id: uuidv4(),
      startTime: body.startTime || new Date(),
    };
    await updateDoc(disasterRef, {
      declaredDisasters: arrayUnion(newDisaster),
    });
    return NextResponse.json({
      success: true,
      message: "Disaster added successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all declared disasters
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
      declaredDisasters: data?.declaredDisasters || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Update a specific disaster
export async function PUT(req: Request) {
  try {
    const body: { id: string; updatedFields: Partial<Disaster> } =
      await req.json();

    const docRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const updatedDisasters = (data?.declaredDisasters || []).map(
      (disaster: Disaster) =>
        disaster.id === body.id
          ? { ...disaster, ...body.updatedFields }
          : disaster
    );

    await updateDoc(docRef, { declaredDisasters: updatedDisasters });

    return NextResponse.json({
      success: true,
      message: "Disaster updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Delete a specific disaster
export async function DELETE(req: Request) {
  try {
    const body: { id: string } = await req.json();

    const docRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const filteredDisasters = (data?.declaredDisasters || []).filter(
      (disaster: Disaster) => disaster.id !== body.id
    );

    await updateDoc(docRef, { declaredDisasters: filteredDisasters });

    return NextResponse.json({
      success: true,
      message: "Disaster deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
