"use client"
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Seperator from "@radui/ui/Separator";
import Card from "@/components/Card"

function page(props) {
    return (
        <div className='lg:ml-16 lg:mt-16'>
                <section className='max-w-3xl space-y-8 mb-16'>
                    <Heading as="h1">Writing on software design, company building, and the aerospace industry.</Heading>
                    <Text className="text-slate-900 !text-lg">
                        All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.
                    </Text>
                </section>
                <section className='flex flex-col lg:w-[80%] space-y-16 lg:space-y-0'>

                    <div className='flex flex-row space-x-4 items-start'>
                        <Seperator orientation="vertical" className="lg:block hidden" />
                        <div className='text-xs text-slate-800 mt-9 lg:mt-7 text-nowrap lg:block hidden'>September 5, 2022</div>
                        <Card date="September 5, 2022" dateClassName="block lg:hidden" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                    </div>
                    <div className='flex flex-row space-x-4 items-start'>
                        <Seperator orientation="vertical" className="lg:block hidden" />
                        <div className='text-xs text-slate-800 mt-9 lg:mt-7 text-nowrap lg:block hidden'>September 5, 2022</div>
                        <Card date="September 5, 2022" dateClassName="block lg:hidden" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                    </div>
                    <div className='flex flex-row space-x-4 items-start'>
                        <Seperator orientation="vertical" className="lg:block hidden" />
                        <div className='text-xs text-slate-800 mt-9 lg:mt-7 text-nowrap lg:block hidden'>September 5, 2022</div>
                        <Card date="September 5, 2022" dateClassName="block lg:hidden" title="Card title" description="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system." />
                    </div>
                </section>

        </div>
    );
}

export default page;