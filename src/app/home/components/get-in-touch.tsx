import React from "react";
import RichTextEditor from "./rich-text-editor";
import YouTubeTextEditor from "./youtube-text";
import Image from "next/image";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="container mx-auto hidden px-4 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="text-center text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-[2.75rem]/none">
              <p>Get In Touch</p>
            </div>
            <p className="mx-auto w-[32rem] text-muted-foreground">
              Have questions about our music software? Need technical support?
              Or just want to share your feedback? We&apos;d love to hear from
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* <RichTextEditor /> */}

        <div className="relative mt-16">
          <div
            aria-hidden
            className="bg-linear-to-b absolute inset-0 z-10 from-transparent from-35% to-background"
          />
          <div className="relative mx-auto max-w-6xl overflow-hidden px-4">
            <Image
              className="z-2 relative hidden rounded-2xl border border-border/25 dark:block"
              src="/music.webp"
              alt="app screen"
              width={2796}
              height={2008}
            />
            <Image
              className="z-2 relative rounded-2xl border border-border/25 dark:hidden"
              src="/music.webp"
              alt="app screen"
              width={2796}
              height={2008}
            />
          </div>
        </div>
        {/* <YouTubeTextEditor /> */}
      </div>
    </div>
  );
};

export default GetInTouch;
