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
    <section className="flex flex-col items-center gap-[8.3rem] px-[3rem] pb-[5rem] pt-[9rem]">
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
          <Button
            variant={"outline"}
            className="bg-[#131313] ring-1 ring-[#c6c6c680] ring-offset-2 ring-offset-black"
          >
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 1C4.13401 1 1 4.13401 1 8V11H1.75H2.5H3.25C4.35457 11 5.25 10.1046 5.25 9V8.25C5.25 7.14543 4.35457 6.25 3.25 6.25H2.78426C3.51526 4.0704 5.57424 2.5 8 2.5C10.4258 2.5 12.4847 4.0704 13.2157 6.25H12.75C11.6454 6.25 10.75 7.14543 10.75 8.25V9C10.75 10.1046 11.6454 11 12.75 11H13.5C13.5 12.3807 12.3807 13.5 11 13.5H10V13C10 12.4477 9.55229 12 9 12H7C6.44772 12 6 12.4477 6 13V14C6 14.5523 6.44772 15 7 15H9H10H11C13.2091 15 15 13.2091 15 11V8C15 4.13401 11.866 1 8 1ZM12.75 7.75H13.4944C13.4981 7.83287 13.5 7.91622 13.5 8V9.5H12.75C12.4739 9.5 12.25 9.27614 12.25 9V8.25C12.25 7.97386 12.4739 7.75 12.75 7.75ZM2.50558 7.75C2.50187 7.83287 2.5 7.91622 2.5 8V9.5H3.25C3.52614 9.5 3.75 9.27614 3.75 9V8.25C3.75 7.97386 3.52614 7.75 3.25 7.75H2.50558Z"
                fill="currentColor"
              />
            </svg>
            Start Listening
          </Button>
          <Button
            variant={"outline"}
            className="bg-[#131313] ring-1 ring-[#c6c6c680] ring-offset-2 ring-offset-black"
          >
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.25 1H5.5V1.75V9.40135C5.05874 9.14609 4.54643 9 4 9C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15C5.65685 15 7 13.6569 7 12C7 11.9158 6.99653 11.8324 6.98973 11.75H7V11V2.5H13.5V6.90135C13.0587 6.64609 12.5464 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 9.41581 14.9965 9.33243 14.9897 9.25H15V8.5V1.75V1H14.25H6.25ZM10.5 9.5C10.5 10.3284 11.1716 11 12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5ZM2.5 12C2.5 12.8284 3.17157 13.5 4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12Z"
                fill="currentColor"
              />
            </svg>
            Browse Sounds
          </Button>
        </div>
      </div>
      {children}
    </section>
  );
}
