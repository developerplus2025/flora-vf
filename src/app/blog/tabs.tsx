// components/TabAnimation.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  label: string;
  href: string;
}

const tabs: Tab[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/blog/category/interactions/" },
  { label: "Contact", href: "/blog/category/interactions/" },
];

const TabAnimation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <div>
      {/* Tab Navigation */}
      <nav style={{ display: "flex", position: "relative" }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setSelectedTab(index)}
            style={{
              marginRight: "1rem",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Link
              href={tab.href}
              style={{ padding: "0.5rem 1rem", display: "block" }}
            >
              {tab.label}
            </Link>

            {selectedTab === index && (
              <motion.div
                layoutId="underline"
                style={{
                  height: 4,
                  backgroundColor: "#0070f3",
                  borderRadius: 2,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Tab Content Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tabs[selectedTab].label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h1>{tabs[selectedTab].label} Page</h1>
          <p>This is the content for the {tabs[selectedTab].label} page.</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabAnimation;
