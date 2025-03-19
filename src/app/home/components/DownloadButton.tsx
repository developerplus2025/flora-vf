// components/DownloadButton.tsx
"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Wind } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DownloadButton: React.FC = () => {
  const router = useRouter();
  const [downloadReady, setDownloadReady] = useState(false);

  const handleClick = async () => {
    // Chuyển trang và chờ quá trình chuyển hoàn tất
    await router.push("/docs/user-win-download");
    setDownloadReady(true);
  };
  return (
    <Button
      className="bg-[#131313] ring-1 ring-[#c6c6c680] ring-offset-1 ring-offset-black"
      variant={"outline"}
      onClick={handleClick}
    >
      <ArrowDownToLine className="mr-2 h-4 w-4" />
      Download for Windows
    </Button>
  );
};

export default DownloadButton;
