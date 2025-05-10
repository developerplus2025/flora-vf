import Image from "next/image";

export default function CompAvatar() {
  return (
    <div className="group relative grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
      <span>
        <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200" />

      <div className="z-10 flex items-center rounded-full bg-background p-1 px-2 shadow-sm">
        <div className="flex -space-x-1.5">
          <Image
            className="rounded-full ring-1 ring-background"
            src="/charlton-roberts.avif"
            width={20}
            height={20}
            alt="Avatar 01"
          />
          <Image
            className="rounded-full ring-1 ring-background"
            src="/alan-cowen.avif"
            width={20}
            height={20}
            alt="Avatar 02"
          />
          <Image
            className="rounded-full ring-1 ring-background"
            src="/thomas-zahner.avif"
            width={20}
            height={20}
            alt="Avatar 03"
          />
          <Image
            className="rounded-full ring-1 ring-background"
            src="/jony.avif"
            width={20}
            height={20}
            alt="Avatar 04"
          />
        </div>
        <p className="px-2 text-xs text-muted-foreground">
          Trusted by{" "}
          <strong className="font-medium text-foreground">60K+</strong>{" "}
          developers.
        </p>
      </div>
    </div>
  );
}
