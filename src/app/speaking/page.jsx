"use client"
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Seperator from "@radui/ui/Separator";
import Card from "@/components/Card"

function page() {
    return (
        <div className="flex flex-col items-center bg-gray-100 justify-center min-h-screen text-gray-1000">
      <div className="bg-[var(--rad-ui-color-gray-300)] h-full justify-center items-start flex flex-col lg:w-[90vw] w-screen border border-l-gray-600 border-r-gray-600 p-16 space-y-8">
            <section className='max-w-3xl space-y-8 mb-16'>
            <Heading as="h1">I’ve spoken at events all around the world and been interviewed for many podcasts.</Heading>
            <Text className="text-slate-900 !text-lg">
                One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.
            </Text>
        </section>
            <section className='flex flex-col w-[80%] '>
               
                <div className='flex flex-row space-x-4 items-start mb-8'>
                     <Seperator orientation="vertical" className=""/>
                    <div className=' text-slate-1000 mt-6 text-nowrap'>Conferences</div>
                    <div className='flex flex-col'>
                <Card date="SysConf 2021" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                <Card date="SysConf 2021" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                </div>
                </div>

               
                <div className='flex flex-row space-x-4 items-start mt-16'>
                    <Seperator orientation="vertical" className=""/>
                    <div className='text-slate-1000 mt-6 text-nowrap'>Podcasts</div>
                     <div className='flex flex-col'>
                <Card date="SysConf 2021" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                <Card date="SysConf 2021" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                <Card date="SysConf 2021" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                </div>
                </div>
            </section>

        </div>
        </div>
    );
}

export default page;