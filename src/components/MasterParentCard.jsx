"use client"
import React from 'react';
import Seperator from "@radui/ui/Separator";


function MasterParentCard({ title, children }) {
    return (
        <div className='flex lg:flex-row flex-col items-start space-y-8 lg:space-y-0'>
            <Seperator orientation="vertical" className="lg:block hidden" />
            <div className=' text-nowrap lg:ml-4'>{title}</div>
            <div className='flex flex-col space-y-16 w-full items-start lg:ml-16'>

                {children}
            </div>
        </div>
    );
}

export default MasterParentCard;