import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/utils/firebase";
import { getDoc, doc } from "firebase/firestore";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;

const TOKEN_EXPIRATION = "1d";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required." },
        { status: 400 }
      );
    }

    const userDoc = doc(db, "users", username);
    const userSnap = await getDoc(userDoc);

    if (!userSnap.exists()) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    const userData = userSnap.data();

    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    if (!JWT_SECRET) {
      return NextResponse.json(
        { success: false, message: "JWT_SECRET is not defined." },
        { status: 500 }
      );
    }

    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION,
    });

    return NextResponse.json({ success: true, token });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
