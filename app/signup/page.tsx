"use client";

import { useFormState } from "react-dom";
import signupAction from "./signupAction";

export default function Signup() {
  const [error, formAction] = useFormState(signupAction, undefined);
  return (
    <div>
      <h1>signup</h1>
      <form action={formAction}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">signup</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
