import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "portfolio_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // one week

function adminPassword() {
  return process.env.ADMIN_PASSWORD ?? "";
}

export function isAdminConfigured() {
  return adminPassword().length > 0;
}

/** Session token is derived from the password, so changing it invalidates old sessions. */
function sessionToken() {
  return createHmac("sha256", adminPassword()).update("admin-session").digest("hex");
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function checkPassword(candidate: string) {
  const expected = adminPassword();
  if (!expected) return false;
  return safeEqual(candidate, expected);
}

export async function startSession() {
  const store = await cookies();
  store.set(COOKIE, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function endSession() {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function isAuthenticated() {
  if (!isAdminConfigured()) return false;
  const store = await cookies();
  const value = store.get(COOKIE)?.value;
  if (!value) return false;
  return safeEqual(value, sessionToken());
}

/** Throws in server actions when the caller is not signed in. */
export async function requireAdmin() {
  if (!(await isAuthenticated())) {
    throw new Error("Not authorised");
  }
}
