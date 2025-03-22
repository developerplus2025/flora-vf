import React from "react";
import { Navigation } from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function BlogPage() {
  return (
    <main className="mt-[3rem] w-full">
      <div className="mt-12 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Recent Articles</h2>
          <Button variant="outline" asChild>
            <Link href="#">View All</Link>
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "10 Best Free VST Plugins of 2024",
              category: "Plugins",
              image: "Free%20VST%20Plugins",
              description:
                "Discover the top free VST plugins that deliver professional quality sound without the price tag.",
            },
            {
              title: "Mastering Techniques in FL Studio",
              category: "Tutorial",
              image: "FL%20Studio%20Mastering",
              description:
                "Learn professional mastering techniques using only FL Studio's native plugins.",
            },
            {
              title: "Hardware vs Software Synths: The Ultimate Comparison",
              category: "Gear",
              image: "Synth%20Comparison",
              description:
                "We compare the pros and cons of hardware and software synthesizers for modern music production.",
            },
          ].map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={`/placeholder.svg?height=400&width=800&text=${post.image}`}
                  width={800}
                  height={400}
                  alt={post.title}
                  className="aspect-[2/1] w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>March {15 + index}, 2024</span>
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-bold">
                  <Link href="#" className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="link" className="p-0" asChild>
                  <Link href="#" className="inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
