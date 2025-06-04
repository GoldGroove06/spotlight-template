"use client";
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Seperator from "@radui/ui/Separator";
import Card from "@/components/Card"
import UseCard from "@/components/UseCard"
import MasterParentCard from '@/components/MasterParentCard';

function page() {
    return (
        <div className="flex flex-col items-center bg-gray-100 justify-center min-h-screen text-gray-1000">
            <div className="bg-[var(--rad-ui-color-gray-300)] h-full justify-center items-start flex flex-col lg:w-[90vw] w-screen border border-l-gray-600 border-r-gray-600 lg:p-16  p-4 space-y-8">
                <section className='max-w-3xl space-y-8 mb-16'>
                    <Heading as="h1">Software I use, gadgets I love, and other things I recommend.</Heading>
                    <Text className="text-slate-900 !text-lg">
                        I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.
                    </Text>
                </section>
                <section className='flex flex-col lg:w-[80%] space-y-16'>
                    <MasterParentCard title="September 2022" >
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                    </MasterParentCard>



                    <MasterParentCard title="September 2022" >
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                    </MasterParentCard>

                    <MasterParentCard title="September 2022" >
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                    </MasterParentCard>

                    <MasterParentCard title="September 2022" >
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                        <UseCard title="16” MacBook Pro, M1 Max, 64GB RAM (2021)" description="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations." />
                    </MasterParentCard>
                </section>

            </div>
        </div>
    );
}

export default page;