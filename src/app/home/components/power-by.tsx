"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
export default function PowerBy() {
  return (
    <div className="flex flex-col items-center gap-[2rem]">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="w-[860px] text-center text-[3.5rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">
          Technologies Behind the Software
        </h1>
        <span className="md:text-md max-w-[510px] text-center text-zinc-500 dark:text-zinc-400">
          This software is built using modern web technologies that ensure high
          performance, scalability, and a seamless user experience. From
          front-end frameworks to back-end services, each tool has been
          carefully selected to optimize development and functionality.
        </span>
      </div>

      <div className="grid gap-4 px-[11rem] sm:grid-cols-2 lg:grid-cols-3">
        <IntegrationCard
          title="Google Gemini"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <Gemini />
        </IntegrationCard>

        <IntegrationCard
          title="Replit"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <Replit />
        </IntegrationCard>

        <IntegrationCard
          title="Magic UI"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <MagicUI />
        </IntegrationCard>

        <IntegrationCard
          title="VSCodium"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <VSCodium />
        </IntegrationCard>

        <IntegrationCard
          title="MediaWiki"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <MediaWiki />
        </IntegrationCard>

        <IntegrationCard
          title="Google PaLM"
          description="Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente."
        >
          <GooglePaLM />
        </IntegrationCard>
      </div>
    </div>
  );
}
const IntegrationCard = ({
  title,
  description,
  children,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="*:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
