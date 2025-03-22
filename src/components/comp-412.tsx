export default function CompAvatar() {
  return (
    <div className="group relative grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
      <span>
        <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200" />
      <span className="z-10 text-xs font-medium text-neutral-400">
        Introducing Flora v10.9.5
      </span>
      <div className="flex items-center rounded-full border bg-background p-1 shadow-sm">
        <div className="flex -space-x-1.5">
          <img
            className="rounded-full ring-1 ring-background"
            src="/avatar-80-03.jpg"
            width={20}
            height={20}
            alt="Avatar 01"
          />
          <img
            className="rounded-full ring-1 ring-background"
            src="/avatar-80-04.jpg"
            width={20}
            height={20}
            alt="Avatar 02"
          />
          <img
            className="rounded-full ring-1 ring-background"
            src="/avatar-80-05.jpg"
            width={20}
            height={20}
            alt="Avatar 03"
          />
          <img
            className="rounded-full ring-1 ring-background"
            src="/avatar-80-06.jpg"
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
