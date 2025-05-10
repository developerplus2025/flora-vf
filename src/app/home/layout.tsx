import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "WESTERN: A Useful Platform For Musicians",
  description: "WESTERN - Home",
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
