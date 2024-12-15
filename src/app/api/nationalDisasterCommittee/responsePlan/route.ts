import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { validateRequest } from "@/utils/validateRequest";
import { Task as ResponsePlan } from "@/models/nationalDisasterCommittee";



// Add a new response plan
export async function POST(req: Request) {
  try {
    const body: Partial<ResponsePlan> = await req.json();
    const { isValid, errors } = validateRequest(body, [
      "name",
      "status",
      "departmentConcerned",
      "description",
      "startTime",
      "disasterId",
      "estimatedTime",
      "isFailed",
      "statusUpdates"
    ]);

    console.log(errors);
    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const newResponsePlan = { ...body, id: uuidv4() };

    const planRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(planRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();

    const declaredDisasters = data?.declaredDisasters || [];
    const disasterIndex = declaredDisasters.findIndex(
      (disaster: any) => disaster.id === body.disasterId
    );

    if (disasterIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Disaster not found" },
        { status: 404 }
      );
    }

    declaredDisasters[disasterIndex].responsePlans = [
      ...(declaredDisasters[disasterIndex].responsePlans || []),
      newResponsePlan,
    ];

    await updateDoc(planRef, { declaredDisasters });

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
export async function getAllResponsePlans(req: Request) {
  try {
    const body: { disasterId: string } = await req.json();
    const docRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();

    const disaster = (data?.declaredDisasters || []).find(
      (disaster: any) => disaster.id === body.disasterId
    );

    return NextResponse.json({
      success: true,
      responsePlans: disaster?.responsePlan || [],
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
    const body: {
      disasterId: string;
      id: string;
      updatedFields: Partial<ResponsePlan>;
    } = await req.json();

    const docRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();

    const declaredDisasters = data?.declaredDisasters || [];
    const disasterIndex = declaredDisasters.findIndex(
      (disaster: any) => disaster.id === body.disasterId
    );

    if (disasterIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Disaster not found" },
        { status: 404 }
      );
    }

    declaredDisasters[disasterIndex].responsePlans = declaredDisasters[
      disasterIndex
    ].responsePlans.map((plan: ResponsePlan) =>
      plan.id === body.id ? { ...plan, ...body.updatedFields } : plan
    );

    await updateDoc(docRef, { declaredDisasters });

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
    const body: { disasterId: string; id: string } = await req.json();

    const docRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();

    const declaredDisasters = data?.declaredDisasters || [];

    const disasterIndex = declaredDisasters.findIndex(
      (disaster: any) => disaster.id === body.disasterId
    );

    if (disasterIndex === -1) {
      return NextResponse.json(
        { success: false, message: "Disaster not found" },
        { status: 404 }
      );
    }

    declaredDisasters[disasterIndex].responsePlans = declaredDisasters[
      disasterIndex
    ].responsePlans.filter((plan: ResponsePlan) => plan.id !== body.id);

    await updateDoc(docRef, { declaredDisasters });

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

// Get a specific response plan
export async function getSpecificResponsePlan(req: Request) {
  try {
    const body: { disasterId: string; id: string } = await req.json();
    const docRef = doc(db, "nationalDisasterCommittee", "main");
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();

    const disaster = (data?.declaredDisasters || []).find(
      (disaster: any) => disaster.id === body.disasterId
    );

    const responsePlan = disaster?.responsePlans.find(
      (plan: ResponsePlan) => plan.id === body.id
    );

    return NextResponse.json({
      success: true,
      responsePlan,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
