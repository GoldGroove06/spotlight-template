"use client";
import React from 'react';
import Link from 'next/link';
function Footer(props) {
    return (
        <div className='border-t-2 border-gray-600 w-full flex flex-row justify-between items-center p-16'>
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