import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "WESTERN WebApp",
  description: "WESTERN WebApp",
};
export default function WESTERNWebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
