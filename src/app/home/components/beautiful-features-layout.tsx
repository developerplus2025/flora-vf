import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";
import { title } from "process";
import { description } from "./chart";
const items = [
  {
    id: 1,
    title: "Smooth",
    description:
      " Optimized performance for seamless music editing and playback.",
    icons: Zap,
  },
  {
    id: 2,
    title: "Powerful",
    description: " Advanced audio processing tools for every creative need.",
    icons: Cpu,
  },
  {
    id: 3,
    title: "Secure",
    description:
      "Protects your data and music rights with cutting-edge security.",
    icons: Fingerprint,
  },
  {
    id: 4,
    title: "Customizable",
    description: " Personalize the interface and features to match your style.",
    icons: Pencil,
  },
  {
    id: 5,
    title: "Full Control",
    description: "Gives you complete control over your music projects.",
    icons: Settings2,
  },
  {
    id: 6,
    title: "AI-Powered",
    description:
      " Enhances your workflow with AI-driven music creation and production.",
    icons: Sparkles,
  },
];
export default function BeautifulFeaturesLayout() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="w-[750px] text-center text-[3.5rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">
            The foundation for professional music creation
          </h1>
          <span className="md:text-md max-w-[450px] text-center text-zinc-500 dark:text-zinc-400">
            Our software is more than just a tool. It’s an ecosystem that
            supports everything from APIs to platforms, helping developers and
            artists innovate effortlessly.
          </span>
        </div>

        <div className="relative mx-auto grid max-w-4xl rounded-lg border bg-[#000000] *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((items) => (
            <div
              key={items.id}
              className={`${items.id === 1 ? "space-y-3" : "space-y-2"} ${items.id === 1 || items.id === 2 || items.id === 3 ? "border-b" : ""} ${items.id === 1 || items.id === 2 || items.id === 4 || items.id === 5 ? "border-r" : ""} `}
            >
              <div className="flex items-center gap-2">
                <items.icons className="size-4" />
                <h3 className="text-sm font-medium">{items.title}</h3>
              </div>
              <p className="text-sm">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
