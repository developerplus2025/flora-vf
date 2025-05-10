import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/animate-ui/radix-dialog";

export const RadixDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-[#131313] ring-1 ring-[#c6c6c680] ring-offset-2 ring-offset-black"
          variant="outline"
        >
          <svg
            className="mr-2 h-4 w-4"
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
          Wacth Demo Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" from="left">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read the following terms of service carefully.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Decline</Button>
          <Button type="submit">Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
