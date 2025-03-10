import * as Slider from "@radix-ui/react-slider";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import LyricsSync from "./lrc";
import { ScrollArea } from "@/components/ui/scroll-area";
const lyrics = `
  [00:25.27] Cùng cốc thâm sơn
  [00:27.92] Một mình một cõi
  [00:30.58] Giữ cho tâm tịnh
  [00:32.17] Không thể để ác can
  [00:35.88] Thế thái lầm than
  [00:38.55] Rơi vào Mạt Pháp
  [00:41.73] Đâu là Phật nào là ma
  [00:44.37] Giữa chốn ta bà
  [00:47.03] Đời này là Phật hay ma
  [00:49.70] Tránh sao được vạn lời dèm pha
  [00:52.88] Kiên định trong chánh tâm của chính ta
  [00:58.19] Miệng đời chẳng hại được ta
  [01:01.38] Làm sao đóng lối đi nở hoa
  [01:04.03] Cứ ngang tàng cứ ung dung
  [01:06.70] Cứ tự tại
  [01:09.35] Chẳng cần làm vừa lòng ai
  [01:12.52] Chỉ mong cho người người khoan thai
  [01:15.21] Hoan hỷ không dối gian chẳng đúng sai
  [01:20.53] Đời này khẩu Phật tâm ma
  [01:23.73] Đằng sau những khóe môi cười tươi
  [01:26.92] Biết đâu được phía sau lưng hại ta
  [01:55.86] Cùng cốc thâm sơn
  [01:57.98] Một mình một cõi
  [02:00.65] Giữ cho tâm tịnh
  [02:02.26] Không thể để ác can
  [02:05.95] Thế thái lầm than
  [02:08.63] Rơi vào Mạt Pháp
  [02:11.28] Đâu là Phật nào là ma
  [02:14.46] Giữa chốn ta bà
  [02:17.12] Đời này là Phật hay ma
  [02:20.34] Tránh sao được vạn lời dèm pha
  [02:23.02] Kiên định trong chánh tâm của chính ta
  [02:28.88] Miệng đời chẳng hại được ta
  [02:31.53] Làm sao đóng lối đi nở hoa
  [02:34.17] Cứ ngang tàng cứ ung dung
  [02:37.39] Cứ tự tại
  [02:39.54] Chẳng cần làm vừa lòng ai
  [02:42.71] Chỉ mong cho người người khoan thai
  [02:45.92] Hoan hỷ không dối gian chẳng đúng sai
  [02:51.21] Đời này khẩu Phật tâm ma
  [02:53.87] Đằng sau những khóe môi cười tươi
  [02:57.07] Biết đâu được phía sau lưng hại ta
`;
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
const AudioCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentTimeMusic, setCurrentTimeMusic] = useState<string>("3:31");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();
  const [value, setValue] = useState<number[]>([0]);
  const [totalSeconds, setTotalSeconds] = useState<number>(211);
  const [soundValue, setSoundValue] = useState<number[]>([100]);
  const [soundTempValue, setSoundTempValue] = useState<number[]>([50]);
  const [tempValue, setTempValue] = useState<number[]>([0]);

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

  useEffect(() => {
    if (audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }, [pathname]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = (Number(value) / 100) * totalSeconds;
    }
  }, [value, totalSeconds]);
  useEffect(() => {
    setSoundTempValue(soundValue);
    if (audioRef.current) {
      audioRef.current.volume = Number(soundTempValue) / 100;
    }
  }, [soundTempValue, soundValue]);
  const increaseVolume = () => {
    if (audioRef.current && audioRef.current.volume <= 1) {
      audioRef.current.volume = Math.min(1, Number(soundValue) / 100 + 0.1); // Tăng âm lượng 0.1 mỗi lần
      console.log(`Current volume: ${Number(soundValue) / 100}`);
      const sound = audioRef.current.volume * 100; // Lấy giá trị âm lượng hiện tại
      setSoundValue([sound]);
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current && audioRef.current.volume >= 0) {
      audioRef.current.volume = Math.max(0, Number(soundValue) / 100 - 0.1); // Giảm âm lượng 0.1 mỗi lần
      console.log(`Current volume: ${Number(soundValue) / 100}`);
      const sound = audioRef.current.volume * 100; // Lấy giá trị âm lượng hiện tại
      setSoundValue([sound]);
    }
  };

  const handlemousedown = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  const handlemouseup = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60); // Tính phút
    const seconds = Math.floor(time % 60); // Tính giây còn lại
    // Định dạng với 2 chữ số (ví dụ: 01:05)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const lyricsContainerRef = useRef<HTMLDivElement | null>(null);
  const activeLineRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (lyricsContainerRef.current && activeLineRef.current) {
      const container = lyricsContainerRef.current;
      const activeLine = activeLineRef.current;

      // Tính toán vị trí cần cuộn để dòng đang hát nằm giữa
      const containerHeight = container.clientHeight;
      const lineHeight = activeLine.offsetHeight;
      const lineOffset = activeLine.offsetTop - container.offsetTop;

      container.scrollTo({
        top: lineOffset - containerHeight / 2 + lineHeight / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]); // Chạy mỗi khi dòng đang hát thay đổi

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={lyricsContainerRef}
        className="custom_scroll h-[316px] w-full space-y-2 overflow-y-auto rounded-lg border bg-[#131313] py-[1rem] text-center [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2.5"
      >
        {lyricsData.map((line, index) => (
          <p
            key={index}
            ref={index === activeIndex ? activeLineRef : null} // Gán ref cho dòng đang hát
            className={`transition-all duration-200 ${
              index === activeIndex
                ? "text-lg font-bold text-white"
                : "text-[#a1a1a1]"
            }`}
          >
            {line.text}
          </p>
        ))}
      </div>

      <div className="mt-[2rem] flex w-[820px] items-center justify-between gap-[1rem] rounded-lg border bg-[#131313] px-[1rem] py-2">
        <audio
          id="audio"
          ref={audioRef}
          src="/kw04scrx7h.mp3"
          loop
          autoPlay
          onTimeUpdate={handleTimeUpdate}
          className="hidden"
        ></audio>
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-lg border">
          <svg
            data-testid="geist-icon"
            height={20}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={20}
            style={{ color: "currentcolor" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1C4.13401 1 1 4.13401 1 8V11H1.75H2.5H3.25C4.35457 11 5.25 10.1046 5.25 9V8.25C5.25 7.14543 4.35457 6.25 3.25 6.25H2.78426C3.51526 4.0704 5.57424 2.5 8 2.5C10.4258 2.5 12.4847 4.0704 13.2157 6.25H12.75C11.6454 6.25 10.75 7.14543 10.75 8.25V9C10.75 10.1046 11.6454 11 12.75 11H13.5C13.5 12.3807 12.3807 13.5 11 13.5H10V13C10 12.4477 9.55229 12 9 12H7C6.44772 12 6 12.4477 6 13V14C6 14.5523 6.44772 15 7 15H9H10H11C13.2091 15 15 13.2091 15 11V8C15 4.13401 11.866 1 8 1ZM12.75 7.75H13.4944C13.4981 7.83287 13.5 7.91622 13.5 8V9.5H12.75C12.4739 9.5 12.25 9.27614 12.25 9V8.25C12.25 7.97386 12.4739 7.75 12.75 7.75ZM2.50558 7.75C2.50187 7.83287 2.5 7.91622 2.5 8V9.5H3.25C3.52614 9.5 3.75 9.27614 3.75 9V8.25C3.75 7.97386 3.52614 7.75 3.25 7.75H2.50558Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <svg
            className={`${!isPlaying ? "hidden" : "flex"} border-none bg-transparent`}
            onClick={() => {
              setIsPlaying(!isPlaying);
              handlePlayPause();
            }}
            data-testid="geist-icon"
            height={16}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={16}
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
              handlePlayPause();
            }}
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
        </div>
        <div className="flex w-full items-center justify-between gap-[1rem]">
          <p className="text-xs tabular-nums">{formatTime(currentTime)}</p>
          <Slider.Root
            onValueChange={(newTempValue) => setTempValue(newTempValue)}
            onValueCommit={(newValue) => setValue(tempValue)}
            defaultValue={[0]}
            value={[(currentTime / totalSeconds) * 100]}
            max={100}
            step={1}
            className="relative flex w-full touch-none select-none items-center"
          >
            <Slider.Track
              onMouseDown={handlemousedown}
              onMouseUp={handlemouseup}
              className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20"
            >
              {" "}
              <Slider.Range className="absolute h-full bg-primary" />
            </Slider.Track>
            <Slider.Thumb className="block h-3 w-3 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          </Slider.Root>
          <p className="text-xs tabular-nums">{currentTimeMusic}</p>
        </div>
        <div className="flex w-[170px] items-center gap-[1rem]">
          <svg
            className="flex-shrink-0"
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
          <Slider.Root
            onValueChange={(newSoundValue) => {
              setSoundValue(newSoundValue);
            }}
            value={[Number(soundValue)]}
            max={100}
            step={1}
            className="relative flex w-[6rem] touch-none select-none items-center"
          >
            <Slider.Track
              onMouseDown={handlemousedown}
              onMouseUp={handlemouseup}
              className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20"
            >
              <Slider.Range className="absolute h-full bg-primary" />
            </Slider.Track>
            <Slider.Thumb className="block h-3 w-3 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          </Slider.Root>
        </div>
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
              d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
