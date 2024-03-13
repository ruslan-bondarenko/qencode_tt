"use client";

import React, { FC, PropsWithChildren } from "react";

import { store } from "../store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <SessionProvider>{children}</SessionProvider>
  </Provider>
);

export default Layout;
