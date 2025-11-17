import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkMode({ ...props }) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);
    return (
        <div onClick={() => setDarkMode(!darkMode)}>
            {/* <Moon /> */}
            {darkMode ? <Sun {...props} /> : <Moon {...props} />}
        </div>
    );
}
