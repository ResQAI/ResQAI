import { NextResponse } from "next/server";
import { db } from "@/utils/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { validateRequest } from "@/utils/validateRequest";
import { v4 as uuidv4 } from "uuid";
import { SituationReport as SituationshipReport } from "@/models/nationalDisasterCommittee";

// Add a new situationship report
export async function POST(req: Request) {
  try {
    const body: Partial<SituationshipReport> = await req.json();
    const { isValid, errors } = validateRequest(body, [
      "disasterStatus",
      "casualties",
      "materialFlow",
      "teamArrival",
      "summary",
      "disasterId",
      "submissionTime",
    ]);

    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const newReport = { ...body, id: uuidv4() };

    const reportRef = doc(db, "nationalDisasterCommittee", "main");

    const docSnap = await getDoc(reportRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const updatedDisasters = (data?.declaredDisasters || []).map(
      (disaster: any) =>
        disaster.id === body.disasterId
          ? {
              ...disaster,
              situationshipReports: [...(disaster.situationshipReports || []), newReport]
            }
          : disaster
    );

    await updateDoc(reportRef, { declaredDisasters: updatedDisasters });

    return NextResponse.json({
      success: true,
      message: "Situationship report added successfully",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all situationship reports
export async function getAllSituationshipReports(req: Request) {
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
      situationshipReports: disaster?.situationshipReports || [],
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Update a specific situationship report
export async function PUT(req: Request) {
  try {
    const body: {
      disasterId: string;
      id: string;
      updatedFields: Partial<SituationshipReport>;
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
    const updatedDisasters = (data?.declaredDisasters || []).map(
      (disaster: any) =>
        disaster.id === body.disasterId
          ? {
              ...disaster,
              situationshipReports: disaster.situationshipReports.map(
                (report: SituationshipReport) =>
                  report.id === body.id
                    ? { ...report, ...body.updatedFields }
                    : report
              ),
            }
          : disaster
    );

    await updateDoc(docRef, { declaredDisasters: updatedDisasters });

    return NextResponse.json({
      success: true,
      message: "Situationship report updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Delete a specific situationship report
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
    const updatedDisasters = (data?.declaredDisasters || []).map(
      (disaster: any) =>
        disaster.id === body.disasterId
          ? {
              ...disaster,
              situationshipReports: disaster.situationshipReports.filter(
                (report: SituationshipReport) => report.id !== body.id
              ),
            }
          : disaster
    );

    await updateDoc(docRef, { declaredDisasters: updatedDisasters });

    return NextResponse.json({
      success: true,
      message: "Situationship report deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get a specific situationship report
export async function getSpecificSituationshipReport(req: Request) {
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

    const report = disaster?.situationshipReports.find(
      (report: SituationshipReport) => report.id === body.id
    );

    return NextResponse.json({
      success: true,
      report,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
