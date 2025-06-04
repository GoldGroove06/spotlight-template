"use client"
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Seperator from "@radui/ui/Separator";
import Card from "@/components/Card";
import ProjectCard from '../../components/ProjectCard';

function page(props) {
    return (
        <div className="flex flex-col items-center bg-gray-100 justify-center min-h-screen text-gray-1000">
            <div className="bg-[var(--rad-ui-color-gray-300)] h-full justify-center items-start flex flex-col lg:w-[90vw] w-screen border border-l-gray-600 border-r-gray-600 lg:p-16 p-4 pb-32 space-y-8">
                <section className='max-w-3xl space-y-8 mb-16'>
                    <Heading as="h1">Things I’ve made trying to put my dent in the universe.</Heading>
                    <Text className="text-slate-900 !text-lg">
                        I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
                    </Text>
                </section>
                <section className='flex flex-row flex-wrap w-full space-y- lg:space-y-0'>

                    <ProjectCard name="name" content="High performance web animation library, hand-written in optimized WASM." link="link" />
                    <ProjectCard name="name" content="High performance web animation library, hand-written in optimized WASM." link="link" />
                    <ProjectCard name="name" content="High performance web animation library, hand-written in optimized WASM." link="link" />
                    <ProjectCard name="name" content="High performance web animation library, hand-written in optimized WASM." link="link" />
                    <ProjectCard name="name" content="High performance web animation library, hand-written in optimized WASM." link="link" />


                </section>

            </div>
        </div>
    );
}

export default page;