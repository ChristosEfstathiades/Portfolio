import { ExternalLink } from "lucide-react";
import GitHub from "@/assets/GitHub.svg";
export default function ProjectLinks({
    github,
    site,
}: {
    github: string;
    site?: string;
}) {
    return (
        <div className="flex items-center gap-2 flex-wrap mt-3">
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition px-3 hover:bg-accent font-semibold py-1 gap-1 bg-white dark:bg-[#111] shadow rounded"
            >
                <img className="h-5" src={GitHub} alt="" />
                <p>GitHub</p>
            </a>
            {site && (
                <a
                    href={site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition px-3 hover:bg-accent font-semibold py-1 gap-1 bg-white dark:bg-[#111] shadow rounded"
                >
                    <ExternalLink size={20} />
                    <p>Site</p>
                </a>
            )}
        </div>
    );
}
