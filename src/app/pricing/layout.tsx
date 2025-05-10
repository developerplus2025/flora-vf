import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | WESTERN",
  description: "WESTERN - Pricing",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
