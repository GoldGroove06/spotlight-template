"use client";
import React from 'react';
import Link from 'next/link';
function Footer(props) {
    return (
        <div className=' text-slate-1000 border-t-gray-600 border-l-gray-600 border-r-gray-600  border bg-[var(--rad-ui-color-gray-300)]  w-full flex  lg:w-[90vw] w-screen lg:flex-row flex-col space-y-4 p-8 pb-14 justify-between items-center '>
            <div className='flex flex-row space-x-4'>
                <Link href="/about">About</Link>
                 <Link href="/articles">Articles</Link>
                 <Link href="/projects">Projects</Link>
                 <Link href="/speaking">Speaking</Link>
                 <Link href="/uses">Uses</Link>
                 </div>
                 <div className='text-slate-800'>
                    2025 GoldGroove06
                 </div>
        </div>
    );
}

export default Footer;