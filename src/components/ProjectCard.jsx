import React from 'react';
import Heading from "@radui/ui/Heading";
import Text from "@radui/ui/Text";
import Link from 'next/link';
import Avatar from "@radui/ui/Avatar";

function ProjectCard({name, content, link}) {
    return (
        <div className='p-4 space-y-4 lg:max-w-sm hover:bg-gray-400 hover:bg-opacity-70 rounded-2xl hover:text-teal-900'>
            
               <span className='h-12 w-14 items-center justify-center flex bg-slate-200 rounded-[100%]'>
            <Avatar.Root>
              <Avatar.Image src="https://i.pravatar.cc/1000" />
              <Avatar.Fallback>KL</Avatar.Fallback>
            </Avatar.Root>
            </span> 
        
            <Heading as="h6" className="text-gray-1000">{name}</Heading>
            <Text className="text-slate-900 text-sm">{content}</Text>
            <div className='mt-8'>
            <Link href={link}>{link}</Link>
            </div>
        </div>
    );
}

export default ProjectCard;