import React from "react";
import { Google, GitHub } from "@/shared";
import { AuthButton, Separator } from "@/shared/ui";
import { SignInForm } from "@/components";

const Login = () => {
  return (
    <div>
      <h1 className="text-3xl font-basis font-bold text-center mb-10">
        Log in to your account
      </h1>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-4">
          <AuthButton signInType="google" text="Google" Icon={<Google />} />
          <AuthButton signInType="github" text="Github" Icon={<GitHub />} />
        </div>

        <Separator />
        <SignInForm />
      </div>
    </div>
  );
};

export default Login;
