"use client";

import { Button } from "@/shared/components/ui/button";
import { logOut } from "@/features/auth/lib/actions";

export default function SignOutBtn({ children }: { children: React.ReactNode }) {
  return <Button onClick={async () => await logOut()}>{children}</Button>;
}
