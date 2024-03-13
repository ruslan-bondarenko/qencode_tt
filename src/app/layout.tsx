import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "@/base/layout";
import "./globals.css";
import { basis } from "@/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qencode",
  description: "by Ruslan Bondarenko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${basis.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
