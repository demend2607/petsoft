import { redirect } from "next/navigation";

import { auth } from "@/shared/lib/auth";

import SignOutBtn from "@/entities/account/ui/SignOutBtn";
export default async function Page() {
  const session = await auth();

  if (!session?.user) return redirect("/login");

  return (
    <main>
      <h1 className="my-8 text-white ">Your Account</h1>
      <section className="content-block flex flex-col justify-center items-center h-[500px]">
        <div className="text-center">
          <p className="mb-3">Logged in as {session?.user?.email}</p>
          <SignOutBtn>Sign out</SignOutBtn>
        </div>
      </section>
    </main>
  );
}
