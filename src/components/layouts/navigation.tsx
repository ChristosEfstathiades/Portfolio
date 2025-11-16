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
        <header className="sticky py-4 px-6 flex left-0 flow top-0 justify-between items-center bg-white dark:bg-black z-2 shadow-sm">
            <a href="#" className="text-orange-primary text-2xl font-cursive">
                Chris.E
            </a>
            <nav>
                <ul className="sm:flex space-x-4 hidden">
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
                    <li className="cursor-pointer transition hover:text-orange-primary">
                        <DarkMode />
                    </li>
                </ul>
                <div className="sm:hidden">
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
                                            className="font-medium text-2xl capitalize cursor-pointer transition hover:text-orange-primary"
                                        >
                                            <a href={`#${navItem}`}>
                                                {navItem}
                                            </a>
                                        </li>
                                    );
                                })}
                                <li className="cursor-pointer mx-auto transition hover:text-orange-primary hov">
                                    <DarkMode />
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
