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
import { blog } from "@/lib/source";
export default function BlogPage() {
  const posts = blog.getPages();
  return (
    <main className="mb-[4rem] mt-[3rem] flex w-full items-center justify-center">
      <div className="mt-12 space-y-8">
        <div className="flex w-full items-center justify-between px-[10rem]">
          <h2 className="text-2xl font-bold tracking-tight">Recent Articles</h2>
          <Button variant="outline" asChild>
            <Link href="#">View All</Link>
          </Button>
        </div>
        <div className="grid justify-items-center px-[10rem] sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden rounded-none">
              <CardHeader className="hidden p-2">
                {/* <Image
                  src={`/placeholder.svg?height=400&width=800`}
                  width={800}
                  height={400}
                  alt={post.title}
                  className="aspect-[2/1] w-full object-cover"
                /> */}
                <div className="aspect-[2/1] w-full border bg-black object-cover"></div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="outline">{post.data.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.data.data}</span>
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-bold">
                  <Link href="#" className="hover:underline">
                    {post.data.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {post.data.description}
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
