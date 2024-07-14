import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { JOSEError } from "jose/errors";

export async function middleware(request: NextRequest) {
  // check for cookie
  const cookie = cookies().get("Authorization");
  if (!cookie) {
    // if no cookie, redirect to login
    console.log("no cookie");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // validate it
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = cookie.value;

  try {
    const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {});
    console.log(payload);
  } catch (e) {
    console.log(e);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/protected/:path*",
};
