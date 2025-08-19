"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthP() {
  const pathName = usePathname();
  return (
    <>
      {pathName === "/login" ? (
        <p>
          No account yet?&nbsp;
          <Link href="/signup" className="text-zinc-500 text-sm hover:text-gray-900">
            Sign Up
          </Link>
        </p>
      ) : (
        <p>
          Already have an account?&nbsp;
          <Link href="/login" className="text-zinc-500 text-sm hover:text-gray-900">
            Log In
          </Link>
        </p>
      )}
    </>
  );
}
