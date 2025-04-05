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
  return <section>{children}</section>;
}
