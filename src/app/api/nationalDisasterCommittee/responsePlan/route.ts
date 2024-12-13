import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { validateRequest } from "@/utils/validateRequest";
import { Task as ResponsePlan } from "@/models/nationalDisasterCommittee";

// Add a new response plan
export async function POST(req: Request) {
  try {
    const body: Partial<ResponsePlan> = await req.json();
    const { isValid, errors } = validateRequest(body, [
      "planTitle",
      "description",
      "assignedTo",
      "startDate",
      "endDate",
    ]);

    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const planRef = doc(db, "nationalDisasterCommittee", "main");
    const newReponsePlan = { ...body, id: uuidv4() };

    await updateDoc(planRef, {
      responsePlans: arrayUnion(newReponsePlan),
    });

    return NextResponse.json({
      success: true,
      message: "Response plan added successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all response plans
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
      responsePlans: data?.responsePlans || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Update a specific response plan
export async function PUT(req: Request) {
  try {
    const body: { id: string; updatedFields: Partial<ResponsePlan> } =
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
    const updatedPlans = (data?.responsePlans || []).map((plan: ResponsePlan) =>
      plan.id === body.id ? { ...plan, ...body.updatedFields } : plan
    );

    await updateDoc(docRef, { responsePlans: updatedPlans });

    return NextResponse.json({
      success: true,
      message: "Response plan updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Delete a specific response plan
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
    const filteredPlans = (data?.responsePlans || []).filter(
      (plan: ResponsePlan) => plan.id !== body.id
    );

    await updateDoc(docRef, { responsePlans: filteredPlans });

    return NextResponse.json({
      success: true,
      message: "Response plan deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
