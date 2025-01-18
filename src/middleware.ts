import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

<<<<<<< HEAD
const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('Authorization')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
=======
export async function middleware(req: Request) {
  // const token = req.headers.get("Authorization")?.split(" ")[1];

  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // const { valid, error } = validateToken(token);

  // if (error || !valid) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  return NextResponse.next();
>>>>>>> 76b486bdac7ef6c602e15faac9599fbb9decd483
}

export const config = {
  matcher: [
    "/national/:path*",
    "/state/:path*",
    "/citizen/:path*",
    "/ngo/:path*",
  ],
};
