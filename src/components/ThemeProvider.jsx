"use client"

import React, { useEffect, useState } from 'react';
import Theme from "@radui/ui/Theme";
import Navbar from "./Navbar";
import Layout from "./Layout";
import Footer from "./Footer";
import { setCookie, getCookie } from 'cookies-next';


function ThemeProvider({ children, themeCookie }) {
    console.log(themeCookie);
    const [theme, setTheme] = useState(themeCookie ? themeCookie : 'light');

    console.log(getCookie('theme'));
    useEffect(() => {
        setCookie('theme', theme);
    }, [theme]);

    return (
        <Theme appearance={theme} accentColor="teal" className="bg-gray-100 justify-center items-center flex flex-col">
            <Navbar theme={theme} setTheme={setTheme} />
            <Layout>
            {children}
            </Layout>
            <Footer />
        </Theme>
    );
}

export default ThemeProvider;