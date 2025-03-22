import { Button } from "@/components/ui/button";

export default function CompAvatarListBlog() {
  return (
    <div className="flex -space-x-3">
      <img
        className="h-[20px] w-[20px] rounded-full ring-2 ring-background"
        src="/avatar-80-03.jpg"
        width={20}
        height={20}
        alt="Avatar 01"
      />
      <img
        className="h-[20px] w-[20px] rounded-full ring-2 ring-background"
        src="/avatar-80-04.jpg"
        width={20}
        height={20}
        alt="Avatar 02"
      />
      <img
        className="h-[20px] w-[20px] rounded-full ring-2 ring-background"
        src="/avatar-80-05.jpg"
        width={20}
        height={20}
        alt="Avatar 03"
      />
      <img
        className="h-[20px] w-[20px] rounded-full ring-2 ring-background"
        src="/avatar-80-06.jpg"
        width={20}
        height={20}
        alt="Avatar 04"
      />
      <Button
        variant="secondary"
        className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs text-muted-foreground ring-2 ring-background hover:bg-secondary hover:text-foreground"
        size="icon"
      >
        +3
      </Button>
    </div>
  );
}
