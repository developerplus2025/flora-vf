import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Payment | WESTERN",
  description: "WESTERN",
};
export default function PayMentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
