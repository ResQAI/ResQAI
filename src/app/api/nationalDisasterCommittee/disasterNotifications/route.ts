import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { validateRequest } from "@/utils/validateRequest";
import { Notification } from "@/models/nationalDisasterCommittee";

// Add a notification
export async function POST(req: Request) {
  try {
    const body: Partial<Notification> = await req.json();
    const { isValid, errors } = validateRequest(body, [
      "disasterId",
      "type",
      "departmentsConcerned",
      "urgency",
      "dateIssued",
      "status",
      "title",
      "message",
      // "attachedFiles",
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

    declaredDisasters[disasterIndex].notifications = [
      ...(declaredDisasters[disasterIndex].notifications || []),
      notification,
    ];

    await updateDoc(docRef, { declaredDisasters });

    return NextResponse.json({
      success: true,
      message: "Notification added successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Get all notifications
export async function getAllNotifications(req: Request) {
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
      notifications: disaster?.notifications || [],
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

    const updatedNotifications = (
      declaredDisasters[disasterIndex].notifications || []
    ).filter((notification: any) => notification.id !== body.id);

    declaredDisasters[disasterIndex].notifications = updatedNotifications;

    await updateDoc(docRef, { declaredDisasters });

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

    const updatedNotifications = (
      declaredDisasters[disasterIndex].notifications || []
    ).map((notification: any) =>
      notification.id === body.id
        ? { ...notification, status: "read" }
        : notification
    );

    declaredDisasters[disasterIndex].notifications = updatedNotifications;

    await updateDoc(docRef, { declaredDisasters });

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

    const notification = (disaster?.notifications || []).find(
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
export async function markAllNotificationsAsRead(req: Request) {
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

    const updatedNotifications = (
      declaredDisasters[disasterIndex].notifications || []
    ).map((notification: any) => ({ ...notification, status: "read" }));

    declaredDisasters[disasterIndex].notifications = updatedNotifications;

    await updateDoc(docRef, { declaredDisasters });

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
