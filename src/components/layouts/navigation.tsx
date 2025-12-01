import DarkMode from "../dark-mode.tsx";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems: string[] = ["about", "projects", "contact"];

export default function Navigation() {
    return (
        <header className="sticky py-4  left-0 flow top-0  bg-white dark:bg-black z-2 shadow-sm">
            <div className="max-w-[80%] mx-auto flex justify-between items-center">
                <a
                    href="#"
                    className="text-orange-primary font-semibold text-xl sm:text-2xl"
                >
                    Christos Efstathiades
                </a>
                <nav>
                    <ul className="sm:flex space-x-4 hidden sm:items-center">
                        {navItems.map((navItem, index) => {
                            return (
                                <li
                                    key={index}
                                    className="font-medium capitalize cursor-pointer transition hover:text-orange-primary"
                                >
                                    <a href={`#${navItem}`}>{navItem}</a>
                                </li>
                            );
                        })}
                        <li className="cursor-pointer transition dark:hover:bg-[#333]  rounded-full hover:bg-black/5 p-1">
                            <DarkMode />
                        </li>
                    </ul>
                    <div className="sm:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger className="cursor-pointer">
                                <Menu />
                            </SheetTrigger>
                            <SheetContent className="w-[220px]" side="left">
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>
                                    <SheetDescription></SheetDescription>
                                </SheetHeader>
                                <ul className="flex flex-col space-y-4 text-center">
                                    {navItems.map((navItem, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="font-medium text-3xl capitalize cursor-pointer transition hover:text-orange-primary"
                                            >
                                                <a href={`#${navItem}`}>
                                                    {navItem}
                                                </a>
                                            </li>
                                        );
                                    })}
                                    <li className="cursor-pointer mx-auto transition dark:hover:bg-[#333]  rounded-full hover:bg-black/5 p-1">
                                        <DarkMode size={30} />
                                    </li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </header>
    );
}
