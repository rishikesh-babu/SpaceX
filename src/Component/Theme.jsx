import React, { useEffect } from 'react'

export default function Theme() {
    useEffect(() => {
        const theme = localStorage.getItem("data-theme");
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem("data-theme", "light");
        }
    }, [])

    function toggleTheme() {
        const theme = localStorage.getItem("data-theme");
        console.log('Theme: ', theme);

        if (theme === 'dark') {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    }
  return (
    <button onClick={toggleTheme}>
      theme
    </button>
  )
}
