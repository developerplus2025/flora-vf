import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sign In | WESTERN",
  description: "WESTERN - Sign In",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
