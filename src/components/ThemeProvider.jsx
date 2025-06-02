"use client"

import React from 'react';
import Theme from "@radui/ui/Theme";
import Navbar from "./Navbar";

function ThemeProvider({children}) {
    const [theme, setTheme] = React.useState("dark");
    return (
          <Theme appearance={theme} accentColor="teal">
            <Navbar theme={theme} setTheme={setTheme} />
            {children}
        </Theme>
    );
}

export default ThemeProvider;