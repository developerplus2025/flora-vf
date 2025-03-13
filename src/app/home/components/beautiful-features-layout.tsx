import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Music,
  AudioWaveformIcon,
  Share2,
  Headphones,
  Download,
  Zap,
  Layers,
} from "lucide-react";

export default function BeautifulFeaturesLayout() {
  return (
    <section className="bg-gradient-to-b from-background to-zinc-100/30 px-4 py-24 dark:from-background dark:to-zinc-900/30 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <Badge
            variant="outline"
            className="mb-4 border-zinc-200 bg-zinc-100/50 px-3 py-1 text-sm text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300"
          >
            Powerful Features
          </Badge>
          <h2 className="mb-6 w-[42rem] text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything You Need to Create Amazing Music
          </h2>
          <p className="w-[31rem] text-xl text-muted-foreground">
            Professional tools designed for musicians at every level, from
            beginners to seasoned professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-zinc-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="absolute right-0 top-0 p-4 opacity-10">
                {feature.icon}
              </div>
              <CardHeader className="pb-2">
                <div className="mb-3 text-zinc-700 dark:text-zinc-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-md font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="min-h-[80px] text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-zinc-200/50 pt-2 dark:border-zinc-800/50">
                <p className="text-xs text-muted-foreground">{feature.tag}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 text-primary hover:text-primary/80"
                >
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="mx-auto max-w-4xl overflow-hidden border">
            <CardContent className="flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
              <div className="text-left md:w-2/3">
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                  Ready to transform your music production?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Join thousands of musicians who have elevated their sound with
                  our professional tools.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-md">
                    Try Free for 14 Days
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-md">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:w-1/3">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-zinc-100 dark:bg-black">
                  <Zap className="h-20 w-20 text-zinc-800 opacity-80 dark:text-zinc-200" />
                  <div className="absolute inset-0 animate-pulse rounded-full border-4 border-zinc-200 dark:border-zinc-700"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <Music className="h-8 w-8" />,
    title: "Advanced Audio Editing",
    description:
      "Professional-grade tools for precise audio editing with non-destructive workflows and multi-track support.",
    tag: "Studio Quality",
  },
  {
    icon: <AudioWaveformIcon className="h-8 w-8" />,
    title: "Real-time Effects",
    description:
      "Apply and customize effects in real-time with zero latency performance. Includes reverb, compression, EQ and more.",
    tag: "Zero Latency",
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: "One-Click Sharing",
    description:
      "Share your creations directly to all major platforms with a single click. Integrated with Spotify, Apple Music, and more.",
    tag: "Seamless Integration",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Studio-Quality Sound",
    description:
      "Experience pristine audio quality with our advanced processing algorithms and high-definition output options.",
    tag: "Hi-Def Audio",
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Extensive Sound Library",
    description:
      "Access thousands of royalty-free samples, loops, and instruments. New content added monthly by professional producers.",
    tag: "10,000+ Samples",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Intelligent Automation",
    description:
      "Save time with smart automation features and customizable templates that adapt to your unique workflow.",
    tag: "Time-Saving",
  },
];
