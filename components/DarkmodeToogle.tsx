import React from "react";
import { useTheme } from "next-themes";


const DarkModeToogle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className=''>
            Mode
        </button>
    );
}

export default DarkModeToogle;