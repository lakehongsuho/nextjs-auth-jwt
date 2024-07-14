import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export default function Nav() {
  const isLoggedIn = cookies().get("Authorization");

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <li>
            <Link href="/dashboard">dashboard</Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/login">login</Link>
            </li>
            <li>
              <Link href="/signup">signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
