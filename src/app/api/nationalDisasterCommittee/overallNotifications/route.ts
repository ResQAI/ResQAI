import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { validateRequest } from "@/utils/validateRequest";
import { OverallNotification } from "@/models/nationalDisasterCommittee";

// Add a notification
export async function POST(req: Request) {
  try {
    const body: Partial<OverallNotification> = await req.json();
    const { isValid, errors } = validateRequest(body, [
      "type",
      "departmentsConcerned",
      "urgency",
      "dateIssued",
      "status",
      "title",
      "message",
      "attachedFiles",
    ]);

    if (!isValid) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const notification = { ...body, id: uuidv4() };

    const docRef = doc(db, "nationalDisasterCommittee", "main");

    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "No data found" },
        { status: 404 }
      );
    }

    const data = docSnap.data();
    const overallNotifications = data?.overallNotifications || [];
    const updatedOverallNotifications = [...overallNotifications, notification];

    await updateDoc(docRef, {
      overallNotifications: updatedOverallNotifications,
    });

    return NextResponse.json({
      success: true,
      message: "Notification added successfully",
      notification,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all notifications
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

    const overallNotifications = data?.overallNotifications || [];

    return NextResponse.json({
      success: true,
      notifications: overallNotifications,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Delete a notification
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

    const overallNotifications = data?.overallNotifications || [];

    const updatedNotifications = overallNotifications.filter(
      (notification: any) => notification.id !== body.id
    );

    await updateDoc(docRef, { overallNotifications: updatedNotifications });

    return NextResponse.json({
      success: true,
      message: "Notification deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Mark notification as read
export async function PATCH(req: Request) {
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

    const overallNotifications = data?.overallNotifications || [];

    const updatedNotifications = overallNotifications.map((notification: any) =>
      notification.id === body.id
        ? { ...notification, status: "read" }
        : notification
    );

    await updateDoc(docRef, { overallNotifications: updatedNotifications });

    return NextResponse.json({
      success: true,
      message: "Notification marked as read successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get a specific notification
export async function getSpecificNotification(req: Request) {
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

    const notification = (data?.overallNotifications || []).find(
      (notification: any) => notification.id === body.id
    );

    return NextResponse.json({
      success: true,
      notification,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Mark all notifications as read
export async function markAllNotificationsAsRead() {
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

    const overallNotifications = data?.overallNotifications || [];

    const updatedNotifications = overallNotifications.map(
      (notification: any) => ({
        ...notification,
        status: "read",
      })
    );

    await updateDoc(docRef, { overallNotifications: updatedNotifications });

    return NextResponse.json({
      success: true,
      message: "All notifications marked as read successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
