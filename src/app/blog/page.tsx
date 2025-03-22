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
import CompAvatarListBlog from "@/components/comp-410";
export default function BlogPage() {
  const posts = blog.getPages();
  return (
    <main className="mb-[4rem] mt-[3rem] flex w-full items-center justify-center px-[10rem]">
      <div className="mt-12 space-y-8">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Recent Articles</h2>
          <Button variant="outline" asChild>
            <Link href="#">View All</Link>
          </Button>
        </div>
        <div className="grid justify-items-center divide-x-1 divide-y-1 border sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 102 }).map((_, index) => {
            const post = posts[index % posts.length]; // Lặp lại danh sách khi hết dữ liệu
            return (
              <Card
                key={index}
                className="overflow-hidden rounded-none border-[0px]"
              >
                <CardHeader className="hidden p-2">
                  <div className="aspect-[2/1] w-full border-[0px] bg-black object-cover"></div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4 border-[0px] text-sm text-muted-foreground">
                    <Badge variant="outline">{post.data.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.data.date}</span>
                    </div>
                  </div>

                  <h3 className="mt-2 text-xl font-bold">
                    <Link href="#" className="">
                      {post.data.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {post.data.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 border-[0px] px-6 pb-6 pt-0">
                  <Button variant="link" className="p-0" asChild>
                    <Link
                      href={`/blog/${post.data.link}`}
                      className="group relative inline-flex items-center gap-1"
                    >
                      Read More{" "}
                      <ArrowRight className="absolute h-3 w-3 translate-x-[50px] transition-transform duration-300 ease-out group-hover:translate-x-[60px]" />
                    </Link>
                  </Button>
                  <div>
                    <CompAvatarListBlog />
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
