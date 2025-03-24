"use client";

import { useRouter, usePathname } from "next/navigation";
import { useMemo, useRef } from "react";

const TABS = [
  { label: "All Posts", link: "/blog/" },
  { label: "Interactions", link: "/blog/category/interactions/" },
  { label: "Resources", link: "/blog/category/resources/" },
  { label: "Docs", link: "/blog/category/docs/" },
];

// Chuẩn hóa đường dẫn (loại bỏ dấu '/' cuối nếu có)
const normalizePath = (path: string) => path.replace(/\/$/, "");

export function AnimatedTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Tính toán lại activeTab mỗi khi pathname thay đổi
  const activeTab = useMemo(() => {
    const normalizedPath = normalizePath(pathname);
    return (
      TABS.find((tab) => normalizePath(tab.link) === normalizedPath) ||
      TABS.find((tab) => normalizedPath.startsWith(normalizePath(tab.link)) && tab.link !== "/blog/") ||
      TABS[0]
    );
  }, [pathname]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full">
      {/* Hiệu ứng nền */}
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

      {/* Tabs */}
      <div className="relative flex w-full justify-center">
        {TABS.map(({ label, link }, index) => {
          const isActive = activeTab.label === label;
          return (
            <button
              key={index}
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