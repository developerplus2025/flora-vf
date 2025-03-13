import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function BeautifulFeaturesLayout() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="w-[750px] text-center text-[3.5rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">
            Trusted by Musicians and Producers Worldwide
          </h1>
          <span className="md:text-md max-w-[500px] text-center text-zinc-500 dark:text-zinc-400">
            This software is trusted by professionals in the music industry,
            from independent artists to top recording studios. Discover why so
            many creators rely on it to streamline their workflow and produce
            high-quality music. Join a community that’s making music smarter
            today!
          </span>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Smooth</h3>
            </div>
            <p className="text-sm">
              Optimized performance for seamless music editing and playback.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Powerful</h3>
            </div>
            <p className="text-sm">
              Advanced audio processing tools for every creative need.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />
              <h3 className="text-sm font-medium">Secure</h3>
            </div>
            <p className="text-sm">
              Protects your data and music rights with cutting-edge security.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />
              <h3 className="text-sm font-medium">Customizable</h3>
            </div>
            <p className="text-sm">
              Personalize the interface and features to match your style.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />
              <h3 className="text-sm font-medium">Full Control</h3>
            </div>
            <p className="text-sm">
              Gives you complete control over your music projects.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">AI-Powered</h3>
            </div>
            <p className="text-sm">
              Enhances your workflow with AI-driven music creation and
              production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
