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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DatePickerBlog } from "./date-picker-blog";
// import Tabs from "./tabs";
import TabAnimation from "./tabs";
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
        {/* <TabAnimation /> */}
        {/* <AnimatedTabs /> */}
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
        <DatePickerBlog />
      </div>
      {children}
    </section>
  );
}
