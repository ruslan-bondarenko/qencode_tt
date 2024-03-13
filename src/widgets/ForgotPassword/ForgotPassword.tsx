import React from "react";
import { ForgotForm } from "@/components";

const ForgotPassword = () => {
  return (
    <div>
      <h1 className="text-3xl font-basis font-bold text-center mb-10 pt-6">
        Forgot Password?
      </h1>
      <div className="flex flex-col gap-2 items-center">
        <ForgotForm />
      </div>
    </div>
  );
};

export default ForgotPassword;
