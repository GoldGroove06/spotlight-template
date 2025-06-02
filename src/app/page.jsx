"use client";
import React from "react";
import Image from "next/image";
import Avatar from "@radui/ui/Avatar";
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Card from "@/components/Card"
import Button from "@radui/ui/Button";
import WorkCard from "@/components/WorkCard"

const LinkedInIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-100 justify-center min-h-screen text-gray-1000">
      <div className="bg-[var(--rad-ui-color-gray-300)] h-full lg:w-[90vw] w-screen ">
        <section className="m-8 space-y-4 w-2/3">
          <Avatar.Root>
            <Avatar.Image src="https://i.pravatar.cc/1000" />
            <Avatar.Fallback>KL</Avatar.Fallback>
          </Avatar.Root>
          <Heading as="h2">
            Software designer, founder, and amateur astronaut.
          </Heading>
          <Text className="text-slate-900">
            I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
          </Text>
          <span>
            <LinkedInIcon />
          </span>
        </section>

        <section className="flex flex-row items-center justify-center">
          <div className="flex flex-row space-x-8 overflow-hidden ">
            {Array.from({ length: 5 }, (_, i) => (
              <Image
                key={i}
                src={`/images/image-${i + 1}.webp`}
                alt={`Image ${i + 1}`}
                width="350" height="100"
              />
            ))}

          </div>
        </section>
        <section className="space-y-8">
          <Card date="01/01/2023" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
          <Card date="01/01/2023" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
          <Card date="01/01/2023" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
        </section>

        <div className="rounded-2xl p-8 space-y-4 border border-gray-600 m-16">
          <Heading as="h6" className="text-gray-1000">Stay Up to date</Heading>
          <Text className="text-slate-900">Get notified when I publish something new, and unsubscribe at any time.</Text>
          <input className="p-2 rounded-lg border border-gray-600 bg-gray-300 placeholder-gray-800" type="email" placeholder="Email address" />
          <Button>Subscribe</Button>
        </div>

        <div className="rounded-2xl p-8 space-y-4 border border-gray-600 m-16">

          <Heading as="h6" className="text-gray-1000">Work</Heading>
         
            <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
            <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
            <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
            <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
            <Button className="w-full">Download CV</Button>
        </div>
      </div>
    </div>
  );
}
