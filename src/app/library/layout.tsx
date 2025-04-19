import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Library | Flora",
  description: "Flora - Library",
};
export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-[3rem] px-[3rem] py-[5rem]">
      {children}
    </section>
  );
}
