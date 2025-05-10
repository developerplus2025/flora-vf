import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Community | WESTERN",
  description: "WESTERN - Community",
};
export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
