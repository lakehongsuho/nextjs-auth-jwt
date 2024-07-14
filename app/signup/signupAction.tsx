"use server";

import { redirect } from "next/navigation";

export default async function signupAction(
  currentState: any,
  formData: FormData
): Promise<string> {
  // get data off form
  const email = formData.get("email");
  const password = formData.get("password");

  // send to our api route
  const response = await fetch(process.env.ROOT_URL + "/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  // redirect to login if success
  if (response.ok) {
    redirect("/login");
  } else {
    return data.error;
  }
}
