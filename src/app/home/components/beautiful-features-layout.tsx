import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Music, AudioWaveformIcon, Share2, Headphones, Download, Zap, Layers } from "lucide-react"

export default function BeautifulFeaturesLayout() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-zinc-100/30 dark:from-background dark:to-zinc-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm border-zinc-200 bg-zinc-100/50 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300"
          >
            Powerful Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Everything You Need to Create Amazing Music
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional tools designed for musicians at every level, from beginners to seasoned professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-zinc-200 bg-white/50 dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">{feature.icon}</div>
              <CardHeader className="pb-2">
                <div className="text-zinc-700 dark:text-zinc-300 mb-3">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base min-h-[80px]">{feature.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <p className="text-xs text-muted-foreground">{feature.tag}</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-xl bg-gradient-to-r from-zinc-100 via-white to-zinc-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3 text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your music production?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of musicians who have elevated their sound with our professional tools.
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
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <Zap className="w-20 h-20 text-zinc-800 dark:text-zinc-200 opacity-80" />
                  <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-700 animate-pulse"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
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
]

