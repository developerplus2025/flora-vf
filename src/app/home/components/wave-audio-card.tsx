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
    <div>
      <WavesurferPlayer
        waveColor="#202020"
        progressColor="#ffffff"
        url="/kw04scrx7h.mp3"
        dragToSeek={true}
        hideScrollbar={true}
        normalize={true}
        barGap={6}
        height={60}
        barHeight={20}
        barRadius={20}
        barWidth={3}
      />
      <div className="wavesurfer-controls flex gap-4">
        <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
};

export default WaveAudioCard;
