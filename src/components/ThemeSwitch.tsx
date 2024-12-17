
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
    const
        [mounted, setMounted] = useState(false),
        { theme, setTheme } = useTheme(),
        handleTheme = () => {
            if (theme === "light")
                setTheme("dark");
            else
                setTheme("light");
        };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted)
        return null;

    return (
        <label className="switch" onChange={handleTheme}>
            <input className="switch__field" type="checkbox" />
            <span className="switch__slider round"></span>
        </label>
    );
};

export default ThemeSwitch;
