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
      <div className="flex flex-col items-center gap-[2rem]">
        <div className="flex flex-col items-center gap-[2rem]">
          <p className="w-[950px] text-center text-[65px] font-bold leading-[4.5rem]">
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
