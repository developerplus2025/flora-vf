"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const [activeTab, setActiveTab] = useState<string>(TABS[0].label);

  // Xác định tab hiện tại dựa trên pathname
  useEffect(() => {
    const matchedTab = TABS.reduce(
      (bestMatch, tab) =>
        pathname.startsWith(tab.link) && tab.link.length > bestMatch.link.length
          ? tab
          : bestMatch,
      TABS[0],
    );

    setActiveTab(matchedTab.label);
  }, [pathname]);

  // Cập nhật hiệu ứng clipPath
  useEffect(() => {
    const container = containerRef.current;
    const activeTabElement = activeTabRef.current;

    if (container && activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      const containerWidth = container.offsetWidth;

      if (containerWidth > 0) {
        const clipLeft = (offsetLeft / containerWidth) * 100;
        const clipRight =
          100 - ((offsetLeft + offsetWidth) / containerWidth) * 100;

        container.style.clipPath = `inset(0 ${clipRight}% 0 ${clipLeft}% round 17px)`;
      }
    }
  }, [activeTab]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full">
      {/* Hiệu ứng nền */}
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden transition-[clip-path] duration-250 ease-in-out"
      >
        <div className="relative flex w-full justify-center bg-black dark:bg-white">
          {TABS.map((tab) => (
            <button
              key={tab.label}
              className="flex h-8 items-center rounded-full p-3 text-sm font-medium text-white dark:text-black"
              tabIndex={-1}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="relative flex w-full justify-center">
        {TABS.map(({ label, link }) => {
          const isActive = activeTab === label;
          return (
            <button
              key={label}
              ref={isActive ? activeTabRef : null}
              onClick={() => router.push(link)}
              aria-selected={isActive}
              className={`flex h-8 items-center rounded-full p-3 text-sm font-medium ${
                isActive
                  ? "text-black dark:text-white"
                  : "text-neutral-500 dark:text-neutral-300"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
