import { validateToken } from "./utils/validateToken";
import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { valid, error } = validateToken(token);

  if (error || !valid) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/national/:path*",
    "/state/:path*",
    "/citizen/:path*",
    "/ngo/:path*",
  ],
};
