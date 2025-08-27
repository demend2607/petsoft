"use server";

import { signIn, signOut } from "@/shared/lib/auth";

export async function logIn(formData: FormData) {
  // await sleep(1000);
  // console.log(formData);

  const authData = Object.fromEntries(formData.entries());

  await signIn("credentials", authData);
}

export async function logOut() {
  await signOut({ redirectTo: "/" });
}
