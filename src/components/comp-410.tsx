import { Button } from "@/components/ui/button";

export default function CompAvatarListBlog() {
  return (
    <div className="flex -space-x-3">
      <img
        className="h-[25px] w-[25px] rounded-full ring-2 ring-background"
        src="/eric-grigorian.avif"
        width={20}
        height={20}
        alt="Avatar 01"
      />
      <img
        className="h-[25px] w-[25px] rounded-full ring-2 ring-background"
        src="/charlton-roberts.avif"
        width={20}
        height={20}
        alt="Avatar 02"
      />
      <img
        className="h-[25px] w-[25px] rounded-full ring-2 ring-background"
        src="/jony.avif"
        width={20}
        height={20}
        alt="Avatar 03"
      />
      <img
        className="h-[25px] w-[25px] rounded-full ring-2 ring-background"
        src="/jasoncottrell-sm.avif"
        width={20}
        height={20}
        alt="Avatar 04"
      />
      <Button
        variant="secondary"
        className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-secondary text-xs text-muted-foreground ring-2 ring-background hover:bg-secondary hover:text-foreground"
        size="icon"
      >
        +3
      </Button>
    </div>
  );
}
