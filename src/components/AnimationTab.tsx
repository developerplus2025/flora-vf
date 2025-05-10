"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const TABS = [
  { label: "All Posts", link: "/blog/" },
  { label: "Interactions", link: "/blog/category/interactions/" },
  { label: "Resources", link: "/blog/category/resources/" },
  { label: "Docs", link: "/blog/category/docs/" },
];

const normalizePath = (path: string) => path.replace(/\/$/, "");

export function AnimatedTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const [activeTab, setActiveTab] = useState<string>(() => {
    const currentPath = pathname; // usePathname sẽ trả về giá trị đúng khi chạy trên client
    const normalizedPath = normalizePath(currentPath);
    const currentTab =
      TABS.find((tab) => normalizePath(tab.link) === normalizedPath) ||
      TABS.find(
        (tab) =>
          normalizedPath.startsWith(normalizePath(tab.link)) &&
          tab.link !== "/blog/",
      ) ||
      TABS[0];
    return currentTab.label;
  });

  // Cập nhật activeTab khi pathname thay đổi
  useLayoutEffect(() => {
    const normalizedPath = normalizePath(pathname);
    const currentTab =
      TABS.find((tab) => normalizePath(tab.link) === normalizedPath) ||
      TABS.find(
        (tab) =>
          normalizedPath.startsWith(normalizePath(tab.link)) &&
          tab.link !== "/blog/",
      ) ||
      TABS[0];
    setActiveTab(currentTab.label);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Lưu pathname hiện tại vào `currentUrl`
    localStorage.setItem("currentUrl", pathname);
  }, [pathname]);

  useEffect(() => {
    if (!activeTab) return;
    const container = containerRef.current;
    const activeTabElement = activeTabRef.current;

    if (container && activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      const clipLeft = offsetLeft;
      const clipRight = offsetLeft + offsetWidth;

      container.style.clipPath = `inset(0 ${100 - (clipRight / container.offsetWidth) * 100}% 0 ${
        (clipLeft / container.offsetWidth) * 100
      }% round 17px)`;
    }
  }, [activeTab]);

  // if (activeTab === null) return null;

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full">
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative flex w-full justify-center bg-black dark:bg-white">
          {TABS.map((tab, index) => (
            <button
              key={index}
              className="flex h-8 items-center text-nowrap rounded-full p-3 text-sm font-medium text-white dark:text-black"
              tabIndex={-1}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative flex w-full justify-center">
        {TABS.map(({ label, link }, index) => {
          const isActive = activeTab === label;
          return (
            <button
              key={index}
              ref={isActive ? activeTabRef : null}
              onClick={() => {
                setActiveTab(label);
                router.push(link);
              }}
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
