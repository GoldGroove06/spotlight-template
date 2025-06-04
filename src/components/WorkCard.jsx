"use client";
import React from 'react';
import Avatar from "@radui/ui/Avatar";
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";

function WorkCard({ companyName, role, date }) {
  return (
    <div className="flex flex-row space-x-4 items-center w-30 ">
      <span className='h-12 w-14 items-center justify-center flex bg-slate-200 rounded-[100%]'>
        <Avatar.Root>
          <Avatar.Image src="https://i.pravatar.cc/1000" />
          <Avatar.Fallback>KL</Avatar.Fallback>
        </Avatar.Root>
      </span>
      <div className='w-full space-y-1'>
        <Text className="text-gray-1000 !font-medium !text-sm">{companyName}</Text>
        <div className="flex flex-row justify-between">
          <Text className="text-slate-900 !text-sm">{role}</Text>
          <Text className="text-slate-900 !text-sm">{date}</Text>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;