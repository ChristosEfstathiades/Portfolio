import { ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

import GitHub from "@/assets/GitHub.svg";
import GitHubWhite from "@/assets/GitHubWhite.svg";

export default function ProjectLinks({
    github,
    site,
}: {
    github: string;
    site?: string;
}) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => {
            setDarkMode(
                document.documentElement.classList.contains("dark")
            );
        };

        // initial check
        checkDarkMode();

        // observe class changes on <html>
        const observer = new MutationObserver(checkDarkMode);

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex items-center gap-2 flex-wrap mt-3">
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition duration-0 hover:duration-150 px-3.5 hover:bg-accent font-medium py-[7px] gap-1.5 text-sm bg-[#f6f6f4] dark:bg-[#161616] border border-[#e7e7e4] dark:border-[#2c2c2c] rounded-lg"
            >
                <img
                    className="h-5"
                    src={darkMode ? GitHubWhite : GitHub}
                    alt="GitHub"
                />

                <p>GitHub</p>
            </a>

            {site && (
                <a
                    href={site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition duration-0 hover:duration-150 px-3.5 hover:bg-accent font-medium py-[7px] gap-1.5 text-sm bg-[#f6f6f4] dark:bg-[#161616] border border-[#e7e7e4] dark:border-[#2c2c2c] rounded-lg"
                >
                    <ExternalLink size={20} />
                    <p>Site</p>
                </a>
            )}
        </div>
    );
}
