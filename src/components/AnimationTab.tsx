"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

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

  // Chuẩn hóa đường dẫn
  const normalizePath = (path: string) => path.replace(/\/$/, "");

  // Tìm tab đang active
  const activeTab =
    TABS.find((tab) => normalizePath(tab.link) === normalizePath(pathname)) ||
    TABS.find((tab) => normalizePath(pathname).startsWith(normalizePath(tab.link)) && tab.link !== "/blog/") ||
    TABS[0];

  // Cập nhật hiệu ứng clip-path
  useLayoutEffect(() => {
    const container = containerRef.current;
    const activeTabElement = activeTabRef.current;

    if (container && activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      const clipLeft = offsetLeft;
      const clipRight = offsetLeft + offsetWidth;

      container.style.clipPath = `inset(0 ${100 - (clipRight / container.offsetWidth) * 100}% 0 ${(clipLeft / container.offsetWidth) * 100}% round 17px)`;
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
            <button
              key={tab.label}
              className="flex h-8 items-center text-nowrap rounded-full p-3 text-sm font-medium text-white dark:text-black"
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
          const isActive = activeTab.label === label;
          return (
            <button
              key={label}
              ref={isActive ? activeTabRef : null}
              onClick={() => router.push(link)}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              className={`flex h-8 items-center text-nowrap rounded-full p-3 text-sm font-medium ${
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