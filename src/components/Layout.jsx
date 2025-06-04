import React from 'react';

function Layout({ children }) {
    return (
        <div className="flex flex-col items-center bg-gray-100 justify-center min-h-screen text-gray-1000">
            <div className="bg-gray-300 min-h-screen justify-start items-center flex flex-col lg:w-[90vw] max-w-[1240px] w-screen border border-l-gray-600 border-r-gray-600 border-t-0 p-4 pb-32">
                {children}
            </div>
        </div>
    );
}

export default Layout;