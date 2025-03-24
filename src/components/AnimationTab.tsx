"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TABS = [
  { label: "All Posts", link: "/blog/" },
  { label: "Interactions", link: "/blog/category/interactions/" },
  { label: "Resources", link: "/blog/category/resources/" },
  { label: "Docs", link: "/blog/category/docs/" },
];

export function AnimatedTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    console.log("Current Path:", pathname);

    // Tìm tab có đường dẫn khớp chính xác nhất
    let matchedTab = TABS[0];
    for (const tab of TABS) {
      if (
        pathname.startsWith(tab.link) &&
        tab.link.length > matchedTab.link.length
      ) {
        matchedTab = tab;
      }
    }

    setActiveTab(matchedTab.label);
  }, [pathname]);

  useEffect(() => {
    const container = containerRef.current;
    const activeTabElement = activeTabRef.current;

    if (container && activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      const clipLeft = (offsetLeft / container.offsetWidth) * 100;
      const clipRight =
        ((offsetLeft + offsetWidth) / container.offsetWidth) * 100;

      container.style.clipPath = `inset(0 ${100 - clipRight}% 0 ${clipLeft}% round 17px)`;
    }
  }, [activeTab]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full">
      {/* Hiệu ứng nền */}
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative flex w-full justify-center bg-black dark:bg-white">
          {TABS.map((tab) => (
            <motion.button
              key={tab.label}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="flex h-8 items-center text-nowrap rounded-full p-3 text-sm font-medium text-white dark:text-black"
              tabIndex={-1}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="relative flex w-full justify-center">
        {TABS.map(({ label, link }) => {
          const isActive = activeTab === label;
          return (
            <motion.button
              key={label}
              ref={isActive ? activeTabRef : null}
              onClick={() => {
                setActiveTab(label);
                router.push(link);
              }}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex h-8 items-center text-nowrap rounded-full p-3 text-sm font-medium ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-neutral-500 dark:text-neutral-300"
              }`}
            >
              {label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
