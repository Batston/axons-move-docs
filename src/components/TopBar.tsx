import { useState } from "react";

export default function TopBar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark", !darkMode);
    };

    return (
        <header className="sticky top-0 z-10 h-16 border-b border-slate-200 bg-white flex items-center justify-end px-6">
            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-200 focus:outline-none"
            >
                {darkMode ? "☀️" : "🌙"}
            </button>        
        </header>
    )
}