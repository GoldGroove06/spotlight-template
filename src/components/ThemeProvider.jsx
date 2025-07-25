"use client"

import React, { useEffect, useState } from 'react';
import Theme from "@radui/ui/Theme";
import Navbar from "./Navbar";
import Layout from "./Layout";
import Footer from "./Footer";

function ThemeProvider({ children }) {
     const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage ) {
            return localStorage.getItem('themePreference') || 'dark';
        }
        return 'dark';
    })
    
    useEffect(() => {
        localStorage.setItem('themePreference', theme);
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