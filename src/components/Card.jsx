"use client";
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";

function Card({date, title, description}) {
    return (
        <div className='p-8 space-y-3 hover:bg-gray-400 hover:bg-opacity-70 rounded-2xl max-w-4xl'>
            {
                date == "" ? "" :
                <div className='space-x-4 flex flex-row'>
                    <span className="h-4 w-0.5 rounded-full bg-slate-500 p-0.5"></span>
                    <div className='text-xs text-slate-800'>{date}</div>
                </div>
            }   
            <Heading as="h6" className="text-gray-1000">{title}</Heading>
            <Text className="text-slate-900">{description}</Text>
            <div className='text-teal-900'>Read article</div>
            
        </div>
    );
}

export default Card;