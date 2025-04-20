import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
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
        <div className="group relative grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_85%)_inset] transition-colors duration-200 dark:shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset]">
          <span>
            <span
              className={cn(
                "spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full",
                "[mask:linear-gradient(black,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] dark:[mask:linear-gradient(white,_transparent_50%)]",
                "before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,black_360deg)] dark:before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)]",
                "before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]",
              )}
            />
          </span>
          <span className="backdrop absolute inset-px rounded-full bg-neutral-100 transition-colors duration-200 dark:bg-neutral-950" />
          <span className="z-10 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Introducing Flora AI v1.5.2
          </span>
        </div>
        <div className="flex flex-col items-center gap-[2rem]">
          <p className="w-[794px] text-balance text-center text-[66px] font-semibold leading-[3.6rem] -tracking-[3px]">
            {" "}
            Fuel Your Music with Sounds that Spark Ideas
          </p>
          <span className="text-md w-[570px] text-center">
            Step into a world of sound where every detail is crafted to inspire.
            Browse through evolving textures, vivid tones, and compelling
            rhythms that breathe life into your musical ideas and take your
            creativity to new heights.
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
