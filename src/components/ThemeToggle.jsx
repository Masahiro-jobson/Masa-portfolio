import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";


// This component defines light / dark mode
export const ThemeToggle = (() => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    // To make dark mode by default
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);

        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true)
        }
    };

    return (<button onClick={toggleTheme}
        className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300)",
            "focus:outline-hidden")}>
    {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" />: <Moon className="h-6 w-6 text-blue-900" />}</button>
    )})