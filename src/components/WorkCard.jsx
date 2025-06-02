"use client";
import React from 'react';
import Avatar from "@radui/ui/Avatar";
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";

function WorkCard({companyName, role, date}) {
    return (
         <div className="flex flex-row space-x-4 items-center w-30 ">
            <Avatar.Root>
              <Avatar.Image src="https://i.pravatar.cc/1000" />
              <Avatar.Fallback>KL</Avatar.Fallback>
            </Avatar.Root>
            <div>
              <Heading as="h6" className="text-gray-1000">{companyName}</Heading>
              <div className="flex flex-row justify-between w-full">
                <Text className="text-slate-900 text-sm">{role}</Text>
                <Text className="text-slate-900 text-sm">{date}</Text>
              </div>
            </div>
           </div> 
    );
}

export default WorkCard;