"use client";
import Image from "next/image";
import { RadaChart1 } from "./rada-chart-1";
import { LoopAnimation } from "./loop-animation";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Users, Music, Clock, Download } from "lucide-react";
import { AudioWaveform, Disc3, Music2, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { InteractiveChart } from "./interactive-chart";
import { CoinChart } from "./coin-chart";
const items = [
  {
    id: 1,
    src: "horizontal",
    name: "",
  },
  {
    id: 2,
    src: "jakala",
    name: "",
  },
  {
    id: 3,
    src: "codal",
    name: "",
  },
  {
    id: 4,
    src: "avanade",
    name: "",
  },
];
const stats = [
  {
    title: "Active Users",
    value: "10,483",
    icon: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5 3.25C2.5 1.45507 3.95507 0 5.75 0H6.25C8.04493 0 9.5 1.45507 9.5 3.25V3.75C9.5 5.54493 8.04493 7 6.25 7H5.75C3.95507 7 2.5 5.54493 2.5 3.75V3.25ZM5.75 1.5C4.7835 1.5 4 2.2835 4 3.25V3.75C4 4.7165 4.7835 5.5 5.75 5.5H6.25C7.2165 5.5 8 4.7165 8 3.75V3.25C8 2.2835 7.2165 1.5 6.25 1.5H5.75ZM1.5 14.5V13.1709C2.31958 11.5377 3.99308 10.5 5.82945 10.5H6.17055C8.00692 10.5 9.68042 11.5377 10.5 13.1709V14.5H1.5ZM5.82945 9C3.35483 9 1.10604 10.4388 0.0690305 12.6857L0 12.8353V13V15.25V16H0.75H11.25H12V15.25V13V12.8353L11.931 12.6857C10.894 10.4388 8.64517 9 6.17055 9H5.82945ZM15.931 12.6857C15.3706 11.4715 14.4561 10.4931 13.3439 9.85058L12.5935 11.1494C13.399 11.6148 14.0681 12.3101 14.5 13.1709V14.5H13.5V16H15.25H16V15.25V13V12.8352L15.931 12.6857ZM11.25 0H10.5V1.5H11.25C12.2165 1.5 13 2.2835 13 3.25V3.75C13 4.7165 12.2165 5.5 11.25 5.5H10.5V7H11.25C13.0449 7 14.5 5.54493 14.5 3.75V3.25C14.5 1.45507 13.0449 0 11.25 0Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: "Daily active users",
  },
  {
    title: "Tracks Created",
    value: "856,942",
    icon: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.25 1H5.5V1.75V9.40135C5.05874 9.14609 4.54643 9 4 9C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15C5.65685 15 7 13.6569 7 12C7 11.9158 6.99653 11.8324 6.98973 11.75H7V11V2.5H13.5V6.90135C13.0587 6.64609 12.5464 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 9.41581 14.9965 9.33243 14.9897 9.25H15V8.5V1.75V1H14.25H6.25ZM10.5 9.5C10.5 10.3284 11.1716 11 12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5ZM2.5 12C2.5 12.8284 3.17157 13.5 4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: "Total tracks created",
  },
  {
    title: "Total Playtime",
    value: "2.4M hours",
    icon: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.75V4H7.25V4.75V7.875C7.25 8.18976 7.39819 8.48615 7.65 8.675L9.55 10.1L10.15 10.55L11.05 9.35L10.45 8.9L8.75 7.625V4.75Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: "Cumulative playtime",
  },
  {
    title: "Downloads",
    value: "1.2M",
    icon: (
      <svg
        data-testid="geist-icon"
        height={16}
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width={16}
        style={{ color: "currentcolor" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    description: "Total software downloads",
  },
];
export default function Metric() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const [value, setValue] = useState(0);

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    setValue(2082);
  }, []);
  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);
  useEffect(() => {
    setValue1(2082);
  }, []);
  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);
  useEffect(() => {
    setValue2(2082);
  }, []);
  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);
  useEffect(() => {
    setValue3(2082);
  }, []);
  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);
  return (
    <div className="flex w-[960px] flex-col items-center gap-[2rem]">
      {/* <LoopAnimation /> */}
      <div className="rounded-lg border p-3">
        <svg
          data-testid="geist-icon"
          height={28}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={28}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="w-[750px] text-center text-[3.5rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">
          Flora by the Numbers
        </h1>
        <span className="md:text-md max-w-[550px] text-center text-zinc-500 dark:text-zinc-400">
          See why musicians and producers trust our music software! From the
          number of satisfied users to tracks created, these metrics highlight
          the impact our software is making in the music industry. Join a
          growing community of creators producing faster and smarter with our
          software.
        </span>
      </div>
      <div className="flex items-center justify-between gap-[4rem]">
        <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <motion.div className="flex flex-col gap-2 rounded-xl border p-3 backdrop-blur-lg transition-colors">
                <div className="flex justify-center text-white/70">
                  {stat.icon}
                </div>
                <div className="text-sm text-zinc-400">{stat.title}</div>
                <motion.div
                  className="text-3xl font-bold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-zinc-400">{stat.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <CoinChart />
        {/* <InteractiveChart /> */}
      </div>
    </div>
  );
}
