"use client";

import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

import { Input } from "@/shared/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/shared/components/ui/button";

export default function AuthForm() {
  const pathName = usePathname();
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  const formAction = async (data) => {
    const result = await trigger();
    if (!result) return;
    const formData = getValues();
    console.log(formData);
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(formAction)}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" {...register("email")} />
        {/* {errors.email && <p>{errors.email.message}</p>} */}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register("password")} />
        {/* {errors.password && <p>{errors.password.message}</p>} */}
      </div>

      <Button className="btn my-3" onSubmit={handleSubmit(getValues)}>
        {pathName === "/login" ? "Log In" : "Sign Up"}
      </Button>
    </form>
  );
}
