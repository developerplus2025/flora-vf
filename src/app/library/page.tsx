"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface TrackData {
  id: string;
  name: string;
  album: {
    images: { url: string; height: number; width: number }[];
    name: string;
  };
  artists: { name: string }[];
}
type Song = {
  name: string;
  artist: string;
  description: string;
  img: string;
};

const songs: Song[] = [
  {
    img: "charlton-roberts",
    name: "Silent Horizon",
    artist: "Lena Rivers",
    description:
      "A calming blend of ambient tones and soft piano, perfect for peaceful evenings.",
  },
  {
    img: "alan-cowen",
    name: "Electric Pulse",
    artist: "Nova Beats",
    description:
      "A high-energy electronic track with pulsating beats and futuristic melodies.",
  },
  {
    img: "thomas-zahner",
    name: "Golden Skies",
    artist: "Aiden Cross",
    description:
      "An uplifting journey through warm synths and nostalgic guitar riffs.",
  },
  {
    img: "jony",
    name: "Midnight Drive",
    artist: "Sierra Lane",
    description:
      "Smooth and rhythmic, this track captures the feel of cruising under city lights.",
  },
  {
    img: "alan-cowen",
    name: "Electric Pulse",
    artist: "Nova Beats",
    description:
      "A high-energy electronic track with pulsating beats and futuristic melodies.",
  },
  {
    img: "thomas-zahner",
    name: "Golden Skies",
    artist: "Aiden Cross",
    description:
      "An uplifting journey through warm synths and nostalgic guitar riffs.",
  },
];

export default function LibraryPage() {
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const res = await fetch("/api/random-tracks");
        if (!res.ok) {
          throw new Error("Failed to fetch tracks");
        }
        const data: TrackData[] = await res.json();

        // Loại bỏ bài hát trùng lặp dựa trên `id`
        const uniqueTracks = Array.from(
          new Map(data.map((track) => [track.id, track])).values(),
        );

        setTracks(uniqueTracks);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className="flex flex-col gap-[2rem] border-t pt-[2rem]">
      <p className="font-bold text-[#a1a1a1]">Top Audio</p>
      <div className="justify-items-between grid grid-cols-3 gap-[3rem]">
        {songs.map((song) => (
          <div
            key={song.name}
            className="relative flex h-[200px] w-[320px] flex-col justify-between border"
          >
            <div className="absolute -left-[1px] -top-[1px] h-[14px] w-[14px] border-l border-t border-[#ffffff]"></div>
            <div className="absolute -right-[1px] -top-[1px] h-[14px] w-[14px] border-r border-t border-[#ffffff]"></div>
            <div className="absolute -bottom-[1px] -left-[1px] h-[14px] w-[14px] border-b border-l border-[#ffffff]"></div>
            <div className="absolute -bottom-[1px] -right-[1px] h-[14px] w-[14px] border-b border-r border-[#ffffff]"></div>
            <div className="flex h-[155px] w-full flex-col gap-4 p-4">
              <div className="flex h-[60px] w-full flex-row-reverse justify-between">
                <div>
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
                      d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-[35px] w-[35px] items-center justify-center rounded-md">
                    <Image
                      height={"400"}
                      width={"300"}
                      alt="gf-vg"
                      className="h-full w-full"
                      src={`/${song.img}.avif`}
                    ></Image>
                  </div>
                  <div className="flex h-[40px] flex-col justify-between">
                    <p className="text-sm">{song.name}</p>
                    <p className="text-xs text-[#a1a1a1]">{song.artist}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-full">
                <p className="text-center text-sm text-[#a1a1a1]">
                  {song.description}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-xs">March 15, 2024</p>
                <p className="text-xs">Rock</p>
              </div>
            </div>
            <div className="flex h-[60px] w-full items-center justify-between gap-[2rem] border-t px-[2rem]">
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
                  d="M7.29289 1.39644C7.68342 1.00592 8.31658 1.00592 8.70711 1.39644L11.7803 4.46966L12.3107 4.99999L11.25 6.06065L10.7197 5.53032L8.75 3.56065V10.25V11H7.25V10.25V3.56065L5.28033 5.53032L4.75 6.06065L3.68934 4.99999L4.21967 4.46966L7.29289 1.39644ZM13.5 9.24999V13.5H2.5V9.24999V8.49999H1V9.24999V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.24999V8.49999H13.5V9.24999Z"
                  fill="currentColor"
                />
              </svg>

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
                  d="M7.06463 3.20474C5.79164 1.93175 3.72772 1.93175 2.45474 3.20474C1.18175 4.47773 1.18175 6.54166 2.45474 7.81465L8 13.3599L13.5453 7.81465C14.8182 6.54166 14.8182 4.47773 13.5453 3.20474C12.2723 1.93175 10.2084 1.93175 8.93537 3.20474L8.53033 3.60979L8 4.14012L7.46967 3.60979L7.06463 3.20474ZM8 2.02321C6.13348 0.286219 3.21165 0.326509 1.39408 2.14408C-0.464694 4.00286 -0.464691 7.01653 1.39408 8.87531L7.46967 14.9509L8 15.4812L8.53033 14.9509L14.6059 8.87531C16.4647 7.01653 16.4647 4.00286 14.6059 2.14408C12.7884 0.326509 9.86653 0.286221 8 2.02321Z"
                  fill="currentColor"
                />
              </svg>

              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fill="#666"
                  fillRule="evenodd"
                  d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
                  clipRule="evenodd"
                  style={{ fill: "currentColor" }}
                />
              </svg>

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
                  d="M3.74421 10.6976L3 10.5H1.5V5.5H3L3.74421 5.30236L8.5 2.58477V13.4152L3.74421 10.6976ZM3 4L8.5 0.857143L10 0V1.72763V14.2724V16L8.5 15.1429L3 12H1C0.447715 12 0 11.5523 0 11V5C0 4.44772 0.447715 4 1 4H3ZM14.2585 2.96051L14.6728 3.58567C15.5116 4.85121 16 6.3697 16 8C16 9.6303 15.5116 11.1488 14.6728 12.4143L14.2585 13.0395L13.0082 12.2108L13.4225 11.5857C14.1034 10.5582 14.5 9.32657 14.5 8C14.5 6.67343 14.1034 5.44176 13.4225 4.41433L13.0082 3.78916L14.2585 2.96051ZM12.059 4.98506L12.4125 5.64655C12.7876 6.34871 13 7.15067 13 8C13 8.84933 12.7876 9.65129 12.4125 10.3534L12.059 11.0149L10.736 10.3081L11.0895 9.64655C11.3513 9.15657 11.5 8.59676 11.5 8C11.5 7.40324 11.3513 6.84344 11.0895 6.35345L10.736 5.69195L12.059 4.98506Z"
                  fill="currentColor"
                />
              </svg>
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
                  d="M4.875 1.5C3.01104 1.5 1.5 3.01104 1.5 4.875V6.40385C1.5 7.22166 1.87727 7.95083 2.47018 8.42791L3.0545 8.89808L2.11415 10.0667L1.52982 9.59656C0.598275 8.84699 0 7.69502 0 6.40385V4.875C0 2.18261 2.18261 0 4.875 0C6.79184 0 8.44888 1.1064 9.2449 2.71201C9.35322 2.93049 9.51183 3 9.60112 3H12.25C14.3211 3 16 4.67893 16 6.75C16 7.8785 15.5006 8.89123 14.7133 9.57758L14.1479 10.0704L13.1622 8.93972L13.7276 8.44689C14.202 8.03329 14.5 7.42688 14.5 6.75C14.5 5.50736 13.4926 4.5 12.25 4.5H9.60112C8.79547 4.5 8.1902 3.96162 7.901 3.37829C7.34838 2.26364 6.20018 1.5 4.875 1.5ZM8.75 13.4393L10.7197 11.4697L11.25 10.9393L12.3107 12L11.7803 12.5303L8.70711 15.6036C8.31658 15.9941 7.68342 15.9941 7.29289 15.6036L4.21967 12.5303L3.68934 12L4.75 10.9393L5.28033 11.4697L7.25 13.4393V7.75V7H8.75V7.75V13.4393Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <p className="font-bold text-[#a1a1a1]">Top Audio</p>
      <div className="justify-items-between grid grid-cols-3 gap-[3rem]">
        {songs.map((song) => (
          <div
            key={song.name}
            className="relative flex h-[200px] w-[320px] flex-col justify-between border"
          >
            <div className="absolute -left-[1px] -top-[1px] h-[14px] w-[14px] border-l border-t border-[#ffffff]"></div>
            <div className="absolute -right-[1px] -top-[1px] h-[14px] w-[14px] border-r border-t border-[#ffffff]"></div>
            <div className="absolute -bottom-[1px] -left-[1px] h-[14px] w-[14px] border-b border-l border-[#ffffff]"></div>
            <div className="absolute -bottom-[1px] -right-[1px] h-[14px] w-[14px] border-b border-r border-[#ffffff]"></div>
            <div className="flex h-[155px] w-full flex-col gap-4 p-4">
              <div className="flex h-[60px] w-full flex-row-reverse justify-between">
                <div>
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
                      d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-[35px] w-[35px] items-center justify-center rounded-md">
                    <Image
                      height={"400"}
                      width={"300"}
                      alt="gf-vg"
                      className="h-full w-full"
                      src={`/${song.img}.avif`}
                    ></Image>
                  </div>
                  <div className="flex h-[40px] flex-col justify-between">
                    <p className="text-sm">{song.name}</p>
                    <p className="text-xs text-[#a1a1a1]">{song.artist}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-full">
                <p className="text-center text-sm text-[#a1a1a1]">
                  {song.description}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-xs">March 15, 2024</p>
                <p className="text-xs">Rock</p>
              </div>
            </div>
            <div className="flex h-[60px] w-full items-center justify-between gap-[2rem] border-t px-[2rem]">
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
                  d="M7.29289 1.39644C7.68342 1.00592 8.31658 1.00592 8.70711 1.39644L11.7803 4.46966L12.3107 4.99999L11.25 6.06065L10.7197 5.53032L8.75 3.56065V10.25V11H7.25V10.25V3.56065L5.28033 5.53032L4.75 6.06065L3.68934 4.99999L4.21967 4.46966L7.29289 1.39644ZM13.5 9.24999V13.5H2.5V9.24999V8.49999H1V9.24999V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.24999V8.49999H13.5V9.24999Z"
                  fill="currentColor"
                />
              </svg>

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
                  d="M7.06463 3.20474C5.79164 1.93175 3.72772 1.93175 2.45474 3.20474C1.18175 4.47773 1.18175 6.54166 2.45474 7.81465L8 13.3599L13.5453 7.81465C14.8182 6.54166 14.8182 4.47773 13.5453 3.20474C12.2723 1.93175 10.2084 1.93175 8.93537 3.20474L8.53033 3.60979L8 4.14012L7.46967 3.60979L7.06463 3.20474ZM8 2.02321C6.13348 0.286219 3.21165 0.326509 1.39408 2.14408C-0.464694 4.00286 -0.464691 7.01653 1.39408 8.87531L7.46967 14.9509L8 15.4812L8.53033 14.9509L14.6059 8.87531C16.4647 7.01653 16.4647 4.00286 14.6059 2.14408C12.7884 0.326509 9.86653 0.286221 8 2.02321Z"
                  fill="currentColor"
                />
              </svg>

              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fill="#666"
                  fillRule="evenodd"
                  d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
                  clipRule="evenodd"
                  style={{ fill: "currentColor" }}
                />
              </svg>

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
                  d="M3.74421 10.6976L3 10.5H1.5V5.5H3L3.74421 5.30236L8.5 2.58477V13.4152L3.74421 10.6976ZM3 4L8.5 0.857143L10 0V1.72763V14.2724V16L8.5 15.1429L3 12H1C0.447715 12 0 11.5523 0 11V5C0 4.44772 0.447715 4 1 4H3ZM14.2585 2.96051L14.6728 3.58567C15.5116 4.85121 16 6.3697 16 8C16 9.6303 15.5116 11.1488 14.6728 12.4143L14.2585 13.0395L13.0082 12.2108L13.4225 11.5857C14.1034 10.5582 14.5 9.32657 14.5 8C14.5 6.67343 14.1034 5.44176 13.4225 4.41433L13.0082 3.78916L14.2585 2.96051ZM12.059 4.98506L12.4125 5.64655C12.7876 6.34871 13 7.15067 13 8C13 8.84933 12.7876 9.65129 12.4125 10.3534L12.059 11.0149L10.736 10.3081L11.0895 9.64655C11.3513 9.15657 11.5 8.59676 11.5 8C11.5 7.40324 11.3513 6.84344 11.0895 6.35345L10.736 5.69195L12.059 4.98506Z"
                  fill="currentColor"
                />
              </svg>
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
                  d="M4.875 1.5C3.01104 1.5 1.5 3.01104 1.5 4.875V6.40385C1.5 7.22166 1.87727 7.95083 2.47018 8.42791L3.0545 8.89808L2.11415 10.0667L1.52982 9.59656C0.598275 8.84699 0 7.69502 0 6.40385V4.875C0 2.18261 2.18261 0 4.875 0C6.79184 0 8.44888 1.1064 9.2449 2.71201C9.35322 2.93049 9.51183 3 9.60112 3H12.25C14.3211 3 16 4.67893 16 6.75C16 7.8785 15.5006 8.89123 14.7133 9.57758L14.1479 10.0704L13.1622 8.93972L13.7276 8.44689C14.202 8.03329 14.5 7.42688 14.5 6.75C14.5 5.50736 13.4926 4.5 12.25 4.5H9.60112C8.79547 4.5 8.1902 3.96162 7.901 3.37829C7.34838 2.26364 6.20018 1.5 4.875 1.5ZM8.75 13.4393L10.7197 11.4697L11.25 10.9393L12.3107 12L11.7803 12.5303L8.70711 15.6036C8.31658 15.9941 7.68342 15.9941 7.29289 15.6036L4.21967 12.5303L3.68934 12L4.75 10.9393L5.28033 11.4697L7.25 13.4393V7.75V7H8.75V7.75V13.4393Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
