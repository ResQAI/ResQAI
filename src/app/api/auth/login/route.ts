import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/utils/firebase";
import { getDoc, doc } from "firebase/firestore";

const JWT_SECRET = process.env.JWT_SECRET;

const TOKEN_EXPIRATION = "1d";

export async function POST(req: Request) {
  try {
    const body: { username: string; password: string } = await req.json();

    if (!body.username || !body.password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required." },
        { status: 400 }
      );
    }

    const userDoc = doc(db, "nationalDisasterCommittee", "main");
    const userSnap = await getDoc(userDoc);

    if (!userSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    const userData = userSnap.data();

    if (!JWT_SECRET) {
      return NextResponse.json(
        { success: false, message: "JWT_SECRET is not defined." },
        { status: 500 }
      );
    }

    if (
      body.username === userData.username &&
      body.password === userData.password
    ) {
      const token = jwt.sign({ username: body.username }, JWT_SECRET, {
        expiresIn: TOKEN_EXPIRATION,
      });
      return NextResponse.json({ success: true, token });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
