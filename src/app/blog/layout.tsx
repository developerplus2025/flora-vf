import dynamic from "next/dynamic";
const AnimatedTabs = dynamic(
  () => import("./AnimationTab").then((mod) => mod.AnimatedTabs),
  {
    ssr: true,
  },
);
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Flora",
  description: "Blog - Flora",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex w-full items-center justify-between gap-[4rem] px-[10rem] pt-[4rem]">
        <h2 className="flex-shrink-0 text-nowrap text-2xl font-bold tracking-tight">
          Recent Articles
        </h2>
        <AnimatedTabs />
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Search for favorite songs"
            className="w-full rounded-full pl-[3rem] placeholder:text-[#7c7c7c]"
          />
          <MagnifyingGlassIcon
            width="21"
            height="21"
            className="search_input-blog absolute left-[16px] top-1/2 -translate-y-1/2"
          />
        </div>
        <Button variant="outline" asChild>
          <Button variant={"outline"} size={"icon"}>
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
                d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z"
                fill="currentColor"
              />
            </svg>
            Select Date Range
          </Button>
        </Button>
      </div>
      {children}
    </section>
  );
}
