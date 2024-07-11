import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState("light");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode === "dark" ? "light" : "dark");
        root.classList.add(darkMode);
    }, [darkMode]);

    return { darkMode, setDarkMode };
};

export default useDarkMode;
