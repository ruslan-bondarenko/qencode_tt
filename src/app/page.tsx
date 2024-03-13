"use client";

import { Logo } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import { ForgotPassword, Login, ResetPassword } from "@/widgets";

import { getAccessToken, useAppSelector } from "@/base/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { token, hasForgotten } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAccessToken() as any);
  }, []);

  useEffect(() => {
    console.log("token", token);
  }, [token]);

  return (
    <div className="flex-col-cc min-h-screen h-full p-10">
      <Link className="flex-cc w-40 mb-16" href="/">
        <Image
          src={Logo.src}
          width={Logo.width}
          height={Logo.height}
          alt="logo"
        />
      </Link>

      {!hasForgotten ? <Login /> : <ForgotPassword />}
      {/* <ResetPassword /> */}
    </div>
  );
};

export default Home;
