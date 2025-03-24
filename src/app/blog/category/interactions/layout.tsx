import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog - Flora",
  description: "Blog - Flora",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="pt-[4rem]">{children}</section>;
}
