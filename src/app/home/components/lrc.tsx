"use client";

import { useEffect, useRef, useState } from "react";

const parseLyrics = (lyrics: string) => {
  return lyrics
    .trim()
    .split("\n")
    .map((line) => {
      const match = line.match(/\[(\d+):(\d+\.\d+)\] (.+)/);
      if (!match) return null;
      const minutes = parseInt(match[1], 10);
      const seconds = parseFloat(match[2]);
      return { time: minutes * 60 + seconds, text: match[3] };
    })
    .filter(Boolean) as { time: number; text: string }[];
};

interface LyricsSyncProps {
  lyrics: string; // Nhận lời bài hát từ props
  audioSrc: string; // Nhận nguồn audio từ props
}

const LyricsSync = ({ lyrics, audioSrc }: LyricsSyncProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricsData = parseLyrics(lyrics);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);

    return () => audio.removeEventListener("timeupdate", updateTime);
  }, []);

  const activeIndex =
    lyricsData.findIndex((line) => line.time > currentTime) - 1;

  return (
    <div className="flex flex-col items-center space-y-4">
      <audio ref={audioRef} controls className="w-full max-w-md">
        <source src={audioSrc} type="audio/mpeg" />
      </audio>

      <div className="w-full max-w-md space-y-2 text-center">
        {lyricsData.map((line, index) => (
          <p
            key={index}
            className={`transition-all duration-200 ${
              index === activeIndex
                ? "text-lg font-bold text-blue-500"
                : "text-gray-500"
            }`}
          >
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LyricsSync;
