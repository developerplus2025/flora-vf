// Dependencies: pnpm install lucide-react

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";
import Image from "next/image";
const branch = [
  {
    id: "1",
    src: "tailwindcss",
  },
  {
    id: "2",
    src: "framer",
  },
  {
    id: "3",
    src: "shadcnui",
  },
  {
    id: "4",
    src: "react",
  },
  {
    id: "5",
    src: "nextjs",
  },
  {
    id: "6",
    src: "swc",
  },
];
const items = [
  {
    id: "1",
    title: "What makes this software unique?",
    content:
      "Our music software prioritizes user experience and performance. Built with TypeScript, it ensures strong type safety, follows accessibility standards, and includes thorough documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the interface?",
    content:
      "You can use CSS variables for global styling, or className and style props for specific components. We support CSS modules, Tailwind CSS, and built-in dark mode.",
  },
  {
    id: "3",
    title: "Is the software optimized for performance?",
    content:
      "Yes. The software features tree-shaking, code splitting, and minimal runtime overhead. Most components are lightweight—under 5KB gzipped.",
  },
  {
    id: "4",
    title: "Is the software accessible?",
    content:
      "All features follow WAI-ARIA guidelines with proper ARIA attributes, keyboard navigation, and screen reader support. We regularly test with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "5",
    title: "What platforms are supported?",
    content:
      "The software works on Windows, macOS, and modern browsers. The web version also adapts well to mobile devices.",
  },
  {
    id: "6",
    title: "Is dark mode supported?",
    content:
      "Yes, dark mode is built-in and can be toggled based on your system settings or personal preferences.",
  },
  {
    id: "7",
    title: "How do I import music?",
    content:
      "You can import music files from your computer, via direct links, or from cloud platforms like Google Drive and Dropbox.",
  },
  {
    id: "8",
    title: "Does it require an internet connection?",
    content:
      "No, internet is not required for core functionality. However, features like syncing and updates do require connectivity.",
  },
];

export default function AccordionFAQ() {
  return (
    <div className="flex w-full justify-center px-[3rem]">
      <div className="flex w-full flex-col-reverse items-center gap-[2rem] rounded-lg">
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            className="w-[850px] space-y-2"
            defaultValue="3"
          >
            {items.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="rounded-lg border bg-background px-4 py-1"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                    {item.title}
                    <Plus
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-2 ps-7 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex h-full w-[500px] flex-col items-center justify-center gap-[2rem]">
          <h1 className="text-center text-[3.5rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">
            Got Questions? We&apos;ve Got Answers!
          </h1>
          <span className="md:text-md max-w-[480px] text-center text-zinc-500 dark:text-zinc-400">
            Curious about our flora software? Check out the frequently asked
            questions below to find answers about features, pricing,
            customization, and more. Whether you&apos;re wondering how it works
            or what&apos;s included, we&apos;ve got all the details you need
            right here.
          </span>
        </div>

        {/* <div className="grid grid-cols-3 place-items-center gap-[4rem] rounded-lg">
        {branch.map((branch) => (
          <div
            className="flex h-[150px] w-[300px] flex-col items-start justify-start gap-1 rounded-lg border px-4 py-4"
            key={branch.id}
          >
            <Image
              src={`/${branch.src}.svg`}
              alt={branch.src}
              className="h-[50px] w-[50px]"
              height={"30"}
              width={"30"}
            ></Image>
            <h1 className="text-md capitalize">{branch.src}</h1>
            <h1 className="text-sm capitalize text-[#a1a1a1]">
              The library for web and native user interfaces. Next.js is built
              on the latest React features, including Server Components and
              Actions.
            </h1>
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
}
