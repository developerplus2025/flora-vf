import Image from "next/image";
import * as Masonry from "./masonry";
import * as React from "react";
import Activity from "./activity";
import { useStore } from "@nanostores/react";
import { $bookmarks, $likes, $reposts, $views } from "./stores";
const items = [
  {
    name: "Eric Grigorian",
    username: "Senior Software Engineer, Frontend",
    body: "I have tried many music apps before, but this one truly amazed me. The interface is smooth, easy to navigate, and the overall experience is fantastic. I can quickly find my favorite songs and create playlists effortlessly, making my music experience seamless and enjoyable.",
    img: "eric-grigorian",
  },
  {
    name: "Charlton Roberts",
    username: "Charlton Roberts, Product Engineering",
    body: "The audio quality in this app is outstanding. Every note is crystal clear, from the deep bass to the sharp highs. If you're a true music lover, you will appreciate the sound precision and richness this app offers.",
    img: "charlton-roberts",
  },
  {
    name: "Jonathan Melville",
    username: "Daniel Lopes, Frontend Developer",
    body: "One of the best things about this app is its speed. Songs load almost instantly, and there's no lag at all. Even when I have a large playlist, the app handles it effortlessly, making it a top choice for music streaming.",
    img: "jony",
  },
  {
    name: "Alan Cowen",
    username: "Senior Software Engineer, Frontend",
    body: "I have tried many music apps before, but this one truly amazed me. The interface is smooth, easy to navigate, and the overall experience is fantastic. I can quickly find my favorite songs and create playlists effortlessly, making my music experience seamless and enjoyable.",
    img: "alan-cowen",
  },
  {
    name: "Thomas Zahner",
    username: "Charlton Roberts, Product Engineering",
    body: "The audio quality in this app is outstanding. Every note is crystal clear, from the deep bass to the sharp highs. If you're a true music lover, you will appreciate the sound precision and richness this app offers.",
    img: "thomas-zahner",
  },
  {
    name: "Jason Cottrell",
    username: "Daniel Lopes, Frontend Developer",
    body: "One of the best things about this app is its speed. Songs load almost instantly, and there's no lag at all. Even when I have a large playlist, the app handles it effortlessly, making it a top choice for music streaming.",
    img: "jasoncottrell-sm",
  },
  // {
  //   name: "David",
  //   username: "@david",
  //   body: "I love how customizable this app is. From themes to equalizer settings, I can adjust everything to match my preferences. Whether I want more bass or a balanced sound, this app gives me full control over my listening experience.",
  //   img: "https://avatar.vercel.sh/david",
  // },
  // {
  //   name: "Emma",
  //   username: "@emma",
  //   body: "The offline mode is a lifesaver! I can download my favorite playlists and listen to them without needing an internet connection. It's perfect for traveling or when I'm in areas with poor network coverage.",
  //   img: "https://avatar.vercel.sh/emma",
  // },
  // {
  //   name: "Frank",
  //   username: "@frank",
  //   body: "Managing playlists has never been easier. The app allows me to create, edit, and organize my playlists in just a few taps. The intuitive design makes the entire process smooth and enjoyable.",
  //   img: "https://avatar.vercel.sh/frank",
  // },
  // {
  //   name: "Grace",
  //   username: "@grace",
  //   body: "I am amazed by how well the app understands my music taste. The smart recommendations suggest songs that perfectly match my preferences, helping me discover new artists and tracks that I genuinely enjoy.",
  //   img: "https://avatar.vercel.sh/grace",
  // },
  // {
  //   name: "Hannah",
  //   username: "@hannah",
  //   body: "Seamless device syncing is one of my favorite features. I can start listening on my laptop and continue right where I left off on my phone. It's incredibly convenient and enhances my music experience.",
  //   img: "https://avatar.vercel.sh/hannah",
  // },
  // {
  //   name: "Isaac",
  //   username: "@isaac",
  //   body: "Unlike other music apps, this one supports a wide range of audio formats. I can play all my music files without needing to convert them, which is a huge plus for someone who has an extensive collection.",
  //   img: "https://avatar.vercel.sh/isaac",
  // },
  // {
  //   name: "Jack",
  //   username: "@jack",
  //   body: "The equalizer settings are simply amazing. I can fine-tune the sound exactly how I like it. Whether I'm in the mood for deep bass or clear vocals, this app lets me adjust the audio experience to perfection.",
  //   img: "https://avatar.vercel.sh/jack",
  // },
  // {
  //   name: "Kelly",
  //   username: "@kelly",
  //   body: "Battery efficiency is impressive. Unlike some other apps that drain my battery quickly, this one is well-optimized, allowing me to enjoy my music for hours without worrying about my phone running out of power.",
  //   img: "https://avatar.vercel.sh/kelly",
  // },
  // {
  //   name: "Leo",
  //   username: "@leo",
  //   body: "Dark mode is a game-changer! It’s easy on the eyes, especially at night. The sleek design and color scheme make the app look even more premium and enjoyable to use.",
  //   img: "https://avatar.vercel.sh/leo",
  // },
  // {
  //   name: "Mia",
  //   username: "@mia",
  //   body: "As an audiophile, I appreciate that this app supports high-resolution audio. It allows me to experience music at its best quality, bringing out every detail in my favorite songs.",
  //   img: "https://avatar.vercel.sh/mia",
  // },
  // {
  //   name: "Noah",
  //   username: "@noah",
  //   body: "Gesture controls make navigating the app so much more intuitive. Swiping to change tracks or adjust the volume feels natural and responsive, making my music experience even smoother.",
  //   img: "https://avatar.vercel.sh/noah",
  // },
  // {
  //   name: "Olivia",
  //   username: "@olivia",
  //   body: "The built-in radio feature is incredible! I can explore a variety of stations and discover new music from different genres without even having to search for songs manually.",
  //   img: "https://avatar.vercel.sh/olivia",
  // },
  // {
  //   name: "Paul",
  //   username: "@paul",
  //   body: "Having both music and podcast support in the same app is fantastic. I no longer need to switch between different apps, making my listening experience more convenient and enjoyable.",
  //   img: "https://avatar.vercel.sh/paul",
  // },
  // {
  //   name: "Quinn",
  //   username: "@quinn",
  //   body: "The integrated lyrics feature is one of my favorites. I love being able to sing along to my favorite songs without having to search for the lyrics separately.",
  //   img: "https://avatar.vercel.sh/quinn",
  // },
  // {
  //   name: "Ryan",
  //   username: "@ryan",
  //   body: "Frequent updates keep improving the app. It’s great to see that the developers actually listen to user feedback and continue to add new features and fix bugs regularly.",
  //   img: "https://avatar.vercel.sh/ryan",
  // },
  // {
  //   name: "Sophia",
  //   username: "@sophia",
  //   body: "The user community is amazing! I can share my playlists with friends, discover new music, and even interact with other users who have similar tastes in music.",
  //   img: "https://avatar.vercel.sh/sophia",
  // },
  // {
  //   name: "Tom",
  //   username: "@tom",
  //   body: "Cross-platform support is one of the best features of this app. I can use it seamlessly on my Windows PC, MacBook, iPhone, and Android device without any issues.",
  //   img: "https://avatar.vercel.sh/tom",
  // },
  // {
  //   name: "Uma",
  //   username: "@uma",
  //   body: "The best part? No annoying ads! Unlike other apps that constantly interrupt my music, this one provides a truly immersive and uninterrupted listening experience.",
  //   img: "https://avatar.vercel.sh/uma",
  // },
];

export function PeopleSay() {
  const reposts = useStore($reposts);
  const bookmarks = useStore($bookmarks);
  const likes = useStore($likes);
  const views = useStore($views);
  return (
    <div className="flex flex-col gap-[4rem]">
      <div className="flex flex-col items-center gap-[2rem]">
        <div className="text-center text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-[2.75rem]/none">
          <p>What People Say ?</p>
        </div>
        <span className="text-md w-[557px] text-center dark:text-zinc-400">
          Discover what users around the world are saying about our music
          software. From producers to casual listeners, hear real feedback on
          how it&apos;s transforming the way they create, mix, and enjoy music.
        </span>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-[2rem]">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex-cols gap relative flex w-[400px] flex-col justify-between gap-3 rounded-lg border bg-[#0c0c0c] p-4 text-card-foreground shadow-sm"
          >
            {/* <div className="absolute -left-[10px] -top-[10px] h-[10px] w-[10px] border-b border-r"></div>
              <div className="absolute -right-[10px] -top-[10px] h-[10px] w-[10px] border-b border-l"></div>
              <div className="absolute -bottom-[10px] -left-[10px] h-[10px] w-[10px] border-r border-t"></div>
              <div className="absolute -bottom-[10px] -right-[10px] h-[10px] w-[10px] border-l border-t"></div> */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between gap-1 text-sm leading-tight sm:text-base">
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      alt={item.img}
                      src={`/${item.img}.avif`}
                      width={"50"}
                      height={"50"}
                      className="h-[30px] w-[40px]"
                    ></Image>
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-[#a1a1a1]">@{item.username}</p>
                  </div>
                </div>
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
                    d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm text-white">
                &quot;{item.body}&quot;
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <svg
                  data-testid="geist-icon"
                  height={14}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={14}
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
                  height={14}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={14}
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
                  height={14}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={14}
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
              <p className="text-xs">March 15, 2024</p>
            </div>
            {/* <Activity
              className="~px-0/16"
              likes={likes.count}
              onLike={$likes.toggle}
              liked={likes.hasIncremented}
              reposts={reposts.count}
              onRepost={$reposts.toggle}
              reposted={reposts.hasIncremented}
              bookmarks={bookmarks.count}
              onBookmark={$bookmarks.toggle}
              bookmarked={bookmarks.hasIncremented}
              views={views.count}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
