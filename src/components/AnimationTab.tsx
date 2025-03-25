"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  
  // Ban đầu set là `null` để tránh lỗi trên server
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Kiểm tra nếu đang chạy trên server thì thoát

    // Lấy tab từ localStorage hoặc pathname
    const storedUrl = localStorage.getItem("currentUrl") || pathname;
    const normalizedPath = normalizePath(storedUrl);

    const currentTab =
      TABS.find((tab) => normalizePath(tab.link) === normalizedPath) ||
      TABS.find((tab) => normalizedPath.startsWith(normalizePath(tab.link)) && tab.link !== "/blog/") ||
      TABS[0];

    setActiveTab(currentTab.label);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Lưu `currentUrl` và `prevUrl` vào localStorage
    const prevUrl = localStorage.getItem("currentUrl") || "";
    localStorage.setItem("prevUrl", prevUrl);
    localStorage.setItem("currentUrl", pathname);
  }, [pathname]);

  // Cập nhật hiệu ứng nền dựa trên tab đang active
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

  if (activeTab === null) return null; // Tránh lỗi render sai khi chưa có tab

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
