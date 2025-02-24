import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function isAuthenticated() {
  try {
    const token = (await cookies()).get("admin_token")?.value;
    if (!token) return false;

    verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
} 