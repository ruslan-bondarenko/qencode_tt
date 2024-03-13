"use client";

import React, { FC, ReactElement } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Button, ButtonVariantEnum } from "@/shared/ui";

type Props = {
  classNames?: string;
  Icon?: ReactElement;
  signInType: string;
  text: string;
};

const AuthButton: FC<Props> = ({ classNames, Icon, signInType, text }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <Button
      className={`h-12 !w-auto min-w-50 !rounded !border !border-gray-300 ${classNames}`}
      icon={Icon}
      variant={ButtonVariantEnum.WHITE}
      onClick={() => signIn(signInType, { callbackUrl })}
    >
      <span className="text-sm">{text}</span>
    </Button>
  );
};

export default AuthButton;
