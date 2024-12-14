import { NextResponse } from "next/server";
import { db } from "@/utils/firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
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
    ]);

    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const newReport = { ...body, id: uuidv4() };

    const reportRef = doc(db, "nationalDisasterCommittee", "main");
    await updateDoc(reportRef, {
      situationshipReports: arrayUnion(newReport),
    });

    return NextResponse.json({
      success: true,
      message: "Situationship report added successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all situationship reports
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
      situationshipReports: data?.situationshipReports || [],
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
    const body: { id: string; updatedFields: Partial<SituationshipReport> } =
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
    const updatedReports = (data?.situationshipReports || []).map(
      (report: SituationshipReport) =>
        report.id === body.id ? { ...report, ...body.updatedFields } : report
    );

    await updateDoc(docRef, { situationshipReports: updatedReports });

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
    const filteredReports = (data?.situationshipReports || []).filter(
      (report: SituationshipReport) => report.id !== body.id
    );

    await updateDoc(docRef, { situationshipReports: filteredReports });

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
