"use client";
import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";

function UseCard({ title, description }) {
    return (
        <div className='space-y-2'>
            <Heading as="h6">{title}</Heading>
            <Text className="text-slate-900">{description}</Text>
        </div>
    );
}

export default UseCard;