"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const TABS = [
  { id: 1, label: "All Posts", link: "" },
  { id: 2, label: "Interactions", link: "/category/interactions/" },
  { id: 3, label: "Resources", link: "/category/resources/" },
  { id: 4, label: "Docs", link: "/category/docs/" },
];

const normalizePath = (path: string) => path.replace(/\/$/, "");

export function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const router = useRouter();
  return (
    <div className="flex space-x-1">
      {TABS.map((tab) => (
        <Link href={`/blog/${tab.link}`} key={tab.id}>
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative flex h-8 items-center justify-center text-nowrap rounded-full p-3 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ duration: 0.25 }}
              />
            )}
            {tab.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
