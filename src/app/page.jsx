"use client";
import React from "react";
import Image from "next/image";
import Avatar from "@radui/ui/Avatar";
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Card from "@/components/Card"
import Button from "@radui/ui/Button";
import WorkCard from "@/components/WorkCard"
import Footer from "@/components/Footer"

const LinkedInIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
  )
}

export default function Home() {

  return (
    <>
        <section className=" flex flex-col w-full items-start">
          <div className="lg:ml-12 max-w-3xl space-y-6 flex- flex flex-col items-start">
            <Avatar.Root className='!h-16 !w-16'
            >
              <Avatar.Image src="https://i.pravatar.cc/1000" />
              <Avatar.Fallback>KL</Avatar.Fallback>
            </Avatar.Root>
            <Heading as="h1" className="text-gray-1000">
              Software designer, founder, and amateur astronaut.
            </Heading>
            <Text className="text-slate-900 !text-xl">
              I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
            </Text>
            <span className="p-4">
              <LinkedInIcon />
            </span>
          </div>
        </section>

        <section className="pr-16 flex flex-col items-center overflow-hidden w-[98vw] p-4">
          <div className="flex flex-row space-x-4 justify-center">
            {Array.from({ length: 5 }, (_, i) => (
              <Image
                key={i}
                src={`/images/image-${i + 1}.webp`}
                alt={`Image ${i + 1}`}
                width="300" height="100"

                className="rounded-xl aspect-square  rotate-[5deg]"
              />
            ))}

          </div>
        </section> 

        <div className="flex lg:flex-row flex-col  lg:m-8 lg:space-x-8 ">
          <section className="mt-16 lg:mt-0 space-y-16 lg:space-y-0">
            <Card date="01/01/2023" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
            <Card date="01/01/2023" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
            <Card date="01/01/2023" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
          </section>

          <section className="space-y-8 lg:mt-4  mt-16">
            <div className="rounded-2xl p-6 space-y-4 border border-gray-600">
              <Text className="text-gray-1000 !font-semibold">Stay Up to date</Text>
              <Text className="text-slate-900">Get notified when I publish something new, and unsubscribe at any time.</Text>
              <div className="flex flex-row space-x-4 items-center">
                <input className="p-2 rounded-lg border border-gray-600 bg-gray-300 placeholder-gray-800 w-full" type="email" placeholder="Email address" />
                <Button className="p-2">Join</Button>
              </div>
            </div>

            <div className="rounded-2xl p-6 space-y-4 border border-gray-600">

              <Text className="text-gray-1000 !font-semibold">Work</Text>

              <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
              <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
              <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
              <WorkCard companyName="Planetaria" role="CEO" date="2023 - Present" />
              <Button className="w-full">Download CV</Button>
            </div>
          </section>
        </div>

      </>
  );
}
