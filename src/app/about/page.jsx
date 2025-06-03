"use client";
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Image from "next/image";
import Separator from "@radui/ui/Separator";

function page(props) {
    return (
        <div className="flex flex-col items-center bg-gray-100 justify-center min-h-screen text-gray-1000">
        <div className='bg-[var(--rad-ui-color-gray-300)] h-full justify-center items-center flex flex-row lg:w-[90vw] w-screen border border-l-gray-600 border-r-gray-600'>
            <section className='flex flex-1 flex-col p-8 mt-16 space-y-8'>
            <Heading as='h1'>
                I’m Spencer Sharp. I live in New York City, where I design the future.
            </Heading>
            <Text className="text-slate-900 !text-lg">
                I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</Text>
        <Text className="text-slate-900 !text-lg">
The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.<br/>
</Text><Text className="text-slate-900 !text-lg">
I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.<br/>
</Text><Text className="text-slate-900 !text-lg">
Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.<br/>
            </Text>
            </section>
        <section className='flex flex-1 flex-col p-8 mt-16 justify-center items-center w-full'>
            <Image src="/images/image-1.webp" alt="" height={300} width={300}
            className='object-contain rounded-2xl rotate-3'
            />
            <div className='flex flex-col'>
                <div>Follow on X</div>
                <div>Follow on X</div>
                <div>Follow on X</div>
                <div>Follow on X</div>
                <Separator />
                <div>emailme@email.com</div>
            </div>
            </section>
        </div>
        </div>
    );
}

export default page;