import { redis } from "./redis";
import { headers } from "next/headers";

export async function rateLimit(identifier: string = "default") {
  // Temporarily disabled
  return 1;
  
  // const ip = (await headers()).get("x-forwarded-for") || "anonymous";
  // const key = `rate-limit:${identifier}:${ip}`;
  
  // const window = 60 * 60; // 1 hour window
  // const max = 5; // max 5 requests per window

  // const count = await redis.incr(key);
  
  // if (count === 1) {
  //   await redis.expire(key, window);
  // }

  // if (count > max) {
  //   throw new Error("Rate limit exceeded. Please try again later.");
  // }

  // return count;
} 