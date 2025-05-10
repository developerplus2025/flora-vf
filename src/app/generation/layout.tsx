import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Generation | WESTERN",
  description: "WESTERN - Generation",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
