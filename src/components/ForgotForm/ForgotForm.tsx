"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, type FormEventHandler, useEffect } from "react";
import { Input, Button, ButtonVariantEnum } from "@/shared/ui";

import { useAppSelector, useAuthActions } from "@/base/store";
import { EMAIL_PATTERN } from "@/shared";

const ForgotForm = () => {
  const currentEmail = useAppSelector((state) => state.auth.currentEmail);
  const { hideForgottenForm, changeEmail } = useAuthActions();
  const [isButtonDisable, setButtonDusable] = useState<boolean>(true);

  const handleChecker = () => {
    setButtonDusable(!EMAIL_PATTERN.test(currentEmail));
  };

  useEffect(() => {
    handleChecker();
  }, [currentEmail]);

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log("formData", formData.get("email"));

    const res = await fetch(
      "https://auth-qa.qencode.com/v1/auth/password-reset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          redirect_url: "/password-set",
        }),
      }
    );

    console.log("res forgot====", res);

    // const res = await signIn("credentials", {
    //   email: formData.get("email"),
    //   redirect: false,
    // });

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
      </div>

      <div className="flex flex-1 flex-col items-center gap-4">
        <Button
          className="w-full h-12 !rounded"
          variant={ButtonVariantEnum.PRIMARY}
          type="submit"
          disabled={isButtonDisable}
        >
          Send
        </Button>
        <Button
          className="w-full h-12 !rounded"
          variant={ButtonVariantEnum.OUTLINE}
          type="button"
          onClick={() => hideForgottenForm()}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ForgotForm;
