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
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { AnimatedTabs } from "./AnimationTab";
import { DatePickerBlog } from "./date-picker-blog";
export default function BlogPage() {
  const posts = blog.getPages();
  return (
    <main className="mb-[4rem] flex w-full flex-col items-center justify-center px-[10rem]">
      <div className="flex w-full items-center justify-between gap-[4rem] pt-[4rem]">
        <h2 className="flex-shrink-0 text-nowrap text-2xl font-bold tracking-tight">
          Recent Articles
        </h2>
        <AnimatedTabs />
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="Search for favorite songs"
            className="w-full rounded-full pl-[3rem] placeholder:text-[#7c7c7c]"
          />
          <MagnifyingGlassIcon
            width="21"
            height="21"
            className="search_input-blog absolute left-[16px] top-1/2 -translate-y-1/2"
          />
        </div>
        <DatePickerBlog />
      </div>
      <div className="mt-12 space-y-8">
        <div className="grid justify-items-center divide-x-1 divide-y-1 border-b border-r first:!rounded first:!rounded-tr-lg sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 102 }).map((_, index) => {
            const post = posts[index % posts.length]; // Lặp lại danh sách khi hết dữ liệu
            return (
              <Card
                key={index}
                className={`flex flex-col justify-between overflow-hidden rounded-none ${index === 2 ? "rounded-tr-lg" : ""} ${index === 0 ? "rounded-tl-lg border-[0px] border-l border-t" : "border-[0px]"}`}
              >
                <CardHeader className="hidden p-2">
                  <div className="aspect-[2/1] w-full border-[0px] bg-black object-cover"></div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4 border-[0px] text-sm text-muted-foreground">
                    <Badge
                      className="border-0 p-0 font-medium"
                      variant="outline"
                    >
                      {post.data.category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      {/* <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z"
                          fill="currentColor"
                        />
                      </svg> */}

                      <span>{post.data.date}</span>
                    </div>
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    <Link href="#" className="">
                      {post.data.title}
                    </Link>
                  </h3>
                  <p className="mt-4 line-clamp-[9] text-sm text-muted-foreground">
                    {post.data.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4 border-[0px] px-6 pb-6 pt-0">
                  <div className="flex w-full items-center justify-between">
                    <Button variant="link" className="p-0" asChild>
                      <Link
                        href={`/blog/${post.data.link}`}
                        className="group relative inline-flex items-center gap-1"
                      >
                        Read More{" "}
                        <ArrowRight className="absolute h-3 w-3 translate-x-[50px] transition-transform duration-300 ease-out group-hover:translate-x-[60px]" />
                      </Link>
                    </Button>
                    <div className="flex items-center gap-4">
                      <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.29289 1.39644C7.68342 1.00592 8.31658 1.00592 8.70711 1.39644L11.7803 4.46966L12.3107 4.99999L11.25 6.06065L10.7197 5.53032L8.75 3.56065V10.25V11H7.25V10.25V3.56065L5.28033 5.53032L4.75 6.06065L3.68934 4.99999L4.21967 4.46966L7.29289 1.39644ZM13.5 9.24999V13.5H2.5V9.24999V8.49999H1V9.24999V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.24999V8.49999H13.5V9.24999Z"
                          fill="currentColor"
                        />
                      </svg>

                      <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.89531 2.23972C6.72984 2.12153 6.5 2.23981 6.5 2.44315V5.25001C6.5 6.21651 5.7165 7.00001 4.75 7.00001H2.5V13.5H12.1884C12.762 13.5 13.262 13.1096 13.4011 12.5532L14.4011 8.55318C14.5984 7.76425 14.0017 7.00001 13.1884 7.00001H9.25H8.5V6.25001V3.51458C8.5 3.43384 8.46101 3.35807 8.39531 3.31114L6.89531 2.23972ZM5 2.44315C5 1.01975 6.6089 0.191779 7.76717 1.01912L9.26717 2.09054C9.72706 2.41904 10 2.94941 10 3.51458V5.50001H13.1884C14.9775 5.50001 16.2903 7.18133 15.8563 8.91698L14.8563 12.917C14.5503 14.1412 13.4503 15 12.1884 15H1.75H1V14.25V6.25001V5.50001H1.75H4.75C4.88807 5.50001 5 5.38808 5 5.25001V2.44315Z"
                          fill="currentColor"
                        />
                      </svg>

                      <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.98327 10.6318L2.8914 10.4028L2.73103 10.2153C1.94229 9.29322 1.5 8.18175 1.5 7C1.5 4.14431 4.21574 1.5 8 1.5C11.7843 1.5 14.5 4.14431 14.5 7C14.5 9.85569 11.7843 12.5 8 12.5C7.61994 12.5 7.24851 12.4724 6.88809 12.4196L6.22471 12.3226L5.70994 12.7521C5.33961 13.0611 4.87888 13.3835 4.32918 13.6584C4.01409 13.8159 3.69637 13.9446 3.38773 14.0495C3.4564 13.7131 3.5 13.3588 3.5 13C3.5 12.1045 3.22909 11.2445 2.98327 10.6318ZM1 16C1 16 1.76096 16 2.8135 15.7653C3.46733 15.6195 4.23366 15.3832 5 15C5.66881 14.6656 6.22579 14.2753 6.67094 13.9038C7.10321 13.9671 7.54721 14 8 14C12.4183 14 16 10.866 16 7C16 3.13401 12.4183 0 8 0C3.58172 0 0 3.13401 0 7C0 8.57152 0.591845 10.0221 1.59114 11.1903C1.80733 11.7292 2 12.3826 2 13C2 13.4808 1.88317 13.9834 1.72937 14.4367C1.43322 15.3097 1 16 1 16ZM4.5 8C3.94772 8 3.5 7.55228 3.5 7C3.5 6.44772 3.94772 6 4.5 6C5.05228 6 5.5 6.44772 5.5 7C5.5 7.55228 5.05228 8 4.5 8ZM7 7C7 7.55228 7.44772 8 8 8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55229 6 8 6C7.44772 6 7 6.44772 7 7ZM11.5 8C10.9477 8 10.5 7.55228 10.5 7C10.5 6.44772 10.9477 6 11.5 6C12.0523 6 12.5 6.44772 12.5 7C12.5 7.55228 12.0523 8 11.5 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-between">
                    <CompAvatarListBlog />
                    <p className="text-sm text-[#a1a1a1]">
                      {" "}
                      Giacomo, Alice, and 2 others
                    </p>
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
