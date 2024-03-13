"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, type FormEventHandler, useEffect } from "react";
import { Input, Button, ButtonVariantEnum } from "@/shared/ui";
import Link from "next/link";

import { useAppSelector, useAuthActions } from "@/base/store";
import { EMAIL_PATTERN } from "@/shared";

const SignInForm = () => {
  const currentEmail = useAppSelector((state) => state.auth.currentEmail);
  const { showForgottenForm, changeEmail } = useAuthActions();
  const [isButtonDisable, setButtonDusable] = useState<boolean>(true);
  const [pass, setPass] = useState<string>("");

  const handleChecker = () => {
    setButtonDusable(pass.length < 8 || !EMAIL_PATTERN.test(currentEmail));
  };

  useEffect(() => {
    handleChecker();
  }, [currentEmail, pass]);

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // const res = await signIn("credentials", {
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    //   redirect: false,
    // });

    console.log('formData.get("email")', formData.get("email"));
    console.log('formData.get("password")', formData.get("password"));

    const res = await fetch(
      "https://auth-qa.qencode.com/v1/auth/access-token",
      {
        method: "POST",
        body: JSON.stringify({
          api_key: process.env.QENCODE_API_KEY,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const login = await fetch("https://auth-qa.qencode.com/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("res", res);
    console.log("login", login);

    // if (res && !res.error) {
    //   router.push("/profile");
    // } else {
    //   console.log("Error:", res);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 min-w-100 w-full"
    >
      <div className="flex flex-col gap-6 w-full">
        <Input
          type="email"
          name="email"
          placeholder="Work email"
          setInputValue={changeEmail}
          required
        />

        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            setInputValue={setPass}
            required
          />
          <Button
            className="w-full h-12 !rounded !inline-block !text-end"
            variant={ButtonVariantEnum.PRIMARY_TEXT}
            onClick={() => showForgottenForm()}
          >
            Forgot your password?
          </Button>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-4">
        <Button
          className="w-full h-12 !rounded"
          variant={ButtonVariantEnum.PRIMARY}
          type="submit"
          disabled={isButtonDisable}
        >
          Log in to Qencode
        </Button>

        <div className="flex gap-2">
          <div>Is your company new to Qencode?</div>
          <Link href="#" className="text-tone-700">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
