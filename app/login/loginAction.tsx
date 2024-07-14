"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginAction(
  currentState: any,
  formData: FormData
): Promise<string> {
  // get data off form
  const email = formData.get("email");
  const password = formData.get("password");

  // send to our api route
  const response = await fetch(process.env.ROOT_URL + "/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  cookies().set("Authorization", data.token, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: "/",
    sameSite: "strict",
  });

  // redirect to login if success
  if (response.ok) {
    redirect("/protected");
  } else {
    return data.error;
  }
}
