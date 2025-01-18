import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export function validateToken(token: string) {
  try {
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined.");
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error };
  }
}
