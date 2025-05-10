import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog - WESTERN",
  description: "Blog - WESTERN",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="">{children}</section>;
}
