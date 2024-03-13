"use client";

import clsx from "clsx";
import Link from "next/link";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ElementType,
  FC,
  PropsWithChildren,
  ReactElement,
} from "react";

import { ButtonVariantEnum } from "./types";

type Props = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag" | "ref"
> & {
  className?: string;
  componentType?: ElementType;
  href?: string;
  openInAnotherTab?: boolean;
  variant?: ButtonVariantEnum;
  icon?: ReactElement;
  hasCustomIconHeight?: boolean;
};

const Button: FC<Props & PropsWithChildren> = ({
  className,
  componentType = "button",
  href = "",
  openInAnotherTab = false,
  variant = ButtonVariantEnum.PRIMARY,
  icon = null,
  children,
  hasCustomIconHeight = false,
  ...props
}) => {
  const Component = href ? Link : componentType;

  const VARIANT_MAPS: Record<ButtonVariantEnum, string> = {
    [ButtonVariantEnum.PRIMARY]: clsx(
      "bg-tone-700 hover:bg-tone-600 px-3 md:px-4"
    ),
    [ButtonVariantEnum.SECONDARY]: clsx(
      "bg-gray-700 hover:bg-gray-500 px-3 md:px-4"
    ),
    [ButtonVariantEnum.WHITE]: clsx("bg-white hover:bg-gray-200 px-3 md:px-4"),
    [ButtonVariantEnum.OUTLINE]: clsx(
      "bg-white hover:bg-gray-200 border border-gray-300 px-3 md:px-4"
    ),
    [ButtonVariantEnum.GRAY]: clsx(
      "bg-gray-500 hover:bg-gray-300 px-3 md:px-4"
    ),
    [ButtonVariantEnum.INVISIBLE]: "",
    [ButtonVariantEnum.PRIMARY_TEXT]: "",
  };

  const VARIANT_TITLE_MAPS: Record<ButtonVariantEnum, string> = {
    [ButtonVariantEnum.PRIMARY]: clsx("text-gray-100"),
    [ButtonVariantEnum.SECONDARY]: clsx("text-white"),
    [ButtonVariantEnum.WHITE]: "",
    [ButtonVariantEnum.OUTLINE]: "",
    [ButtonVariantEnum.GRAY]: clsx("text-white"),
    [ButtonVariantEnum.INVISIBLE]: clsx(
      "text-gray-500 hover:text-gray-300 border-b border-gray-500 hover:border-gray-300 transition-all ease-linear"
    ),
    [ButtonVariantEnum.PRIMARY_TEXT]: clsx(
      "text-tone-700 hover:text-tone-600 font-normal"
    ),
  };

  return (
    <Component
      className={clsx(
        "flex rem:min-h-[32px] md:rem:min-h-[40px] gap-3 items-center justify-center",
        "transition-all duration-300",
        "disabled:!bg-gray-300 disabled:!cursor-not-allowed",
        VARIANT_MAPS[variant],
        className
      )}
      {...props}
      href={href}
      target={openInAnotherTab ? "_blank" : "_self"}
    >
      {icon ? (
        <div
          className={clsx({
            "overflow-hidden max-h-5": !hasCustomIconHeight,
          })}
        >
          {icon}
        </div>
      ) : null}

      <span
        className={clsx(
          "font-basis text-xs md:text-m font-medium shrink-0",
          VARIANT_TITLE_MAPS[variant]
        )}
      >
        {children}
      </span>
    </Component>
  );
};

export default Button;
