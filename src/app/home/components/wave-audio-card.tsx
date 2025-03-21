"use client";
import WavesurferPlayer from "@wavesurfer/react";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js"; // Import kiểu dữ liệu

const WaveAudioCard = () => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };
  const onPlayPause = () => {
    wavesurfer?.playPause();
  };

  return (
    <div className="flex flex-col gap-4">
      <WavesurferPlayer
        waveColor="#202020"
        progressColor="#ffffff"
        url="/kw04scrx7h.mp3"
        dragToSeek={true}
        hideScrollbar={true}
        normalize={true}
        barGap={6}
        height={20}
        width={"32rem"}
        barHeight={20}
        barRadius={20}
        barWidth={1}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="wavesurfer-controls flex w-full justify-center gap-4">
        <div className="text-[1.5rem]">
          <svg
            className={`${!isPlaying ? "hidden" : "flex"} border-none bg-transparent`}
            onClick={() => {
              setIsPlaying(!isPlaying);
              onPlayPause();
            }}
            data-testid="geist-icon"
            height={20}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={20}
            style={{ color: "currentcolor" }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5.5-2.5h-5v5h5v-5Z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className={`${isPlaying ? "hidden" : "flex"} border-none bg-transparent`}
            onClick={() => {
              setIsPlaying(!isPlaying);
              onPlayPause();
            }}
            data-testid="geist-icon"
            height={20}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={20}
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
        </div>
      </div>
    </div>
  );
};

export default WaveAudioCard;
