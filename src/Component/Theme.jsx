import React, { useState, useEffect } from 'react'

export default function Theme() {
    // Initialize theme from localStorage or default to 'dark'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || 'dark';
    });

    // Effect to update the data-theme attribute and localStorage when the theme state changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Function to toggle the theme
    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    }
    return (
        <div className="flex items-center space-x-3">
            <span>
                {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
            </span>

            <input type="checkbox" value="dark" className="toggle theme-controller" onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
    )
}
