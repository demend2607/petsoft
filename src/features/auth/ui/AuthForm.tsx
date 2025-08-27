import { useForm } from "react-hook-form";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/shared/components/ui/button";

import { logIn } from "../lib/actions";

export default function AuthForm({ type }: { type: "logIn" | "signUp" }) {
  return (
    <form className="space-y-3" action={logIn}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </div>

      <Button className="btn my-3">{type === "logIn" ? "Log In" : "Sign Up"}</Button>
    </form>
  );
}
