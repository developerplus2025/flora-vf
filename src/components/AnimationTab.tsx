"use client"; // @NOTE: Add in case you are using Next.js

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
  const pathname = usePathname(); // Lấy đường dẫn hiện tại
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<string>("");

  // Đồng bộ activeTab với đường dẫn khi component mount hoặc URL thay đổi
  useEffect(() => {
    const matchedTab = TABS.find((tab) => pathname.startsWith(tab.link));
    if (matchedTab) {
      setActiveTab(matchedTab.label);
    }
  }, [pathname]); // Chạy lại mỗi khi pathname thay đổi

  // Hiệu ứng clip-path cho tab active
  useEffect(() => {
    const container = containerRef.current;
    if (container && activeTab) {
      const activeTabElement = activeTabRef.current;
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;

        container.style.clipPath = `inset(0 ${100 - (clipRight / container.offsetWidth) * 100}% 0 ${(clipLeft / container.offsetWidth) * 100}% round 17px)`;
      }
    }
  }, [activeTab]);

  return (
    <div className="relative mx-auto flex w-fit flex-col items-center rounded-full">
      {/* Lớp nền hiệu ứng */}
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

      {/* Các tab điều hướng */}
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
