import { Button } from "@/components/ui/button";
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
      <div className="flex flex-col items-center gap-[3rem]">
        <div className="flex flex-col items-center gap-[3rem]">
          <p className="w-[838px] text-center text-[57px] font-bold leading-[3.5rem]">
            {" "}
            Explore a Powerful Sound Library - Crafted for Creators
          </p>
          <span className="w-[530px] text-center text-xl font-semibold">
            Discover a rich collection of high-quality sounds, loops, and
            effects tailored for music producers. Instantly preview, customize,
            and add them to your projects — all within one seamless platform.
          </span>
        </div>
        <div className="flex gap-[2rem]">
          <Button>Start Listening</Button>
          <Button variant={"outline"}>Browse Sounds</Button>
        </div>
      </div>
      {children}
    </section>
  );
}
