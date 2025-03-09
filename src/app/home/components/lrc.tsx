"use client";

import { useEffect, useRef, useState } from "react";

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

const LyricsSync = () => {
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
        <source src="/kw04scrx7h.mp3" type="audio/mpeg" />
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
