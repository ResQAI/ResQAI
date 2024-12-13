import { NextResponse } from "next/server";
import { validateToken } from "./utils/validateToken";

export async function middleware(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const { valid, error } = validateToken(token);

  if (error || !valid) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/national/*", "/state/*", "/citizen/*", "/ngo/*"],
};
