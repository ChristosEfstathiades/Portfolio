import DarkMode from "../dark-mode.tsx";
export default function Navigation() {
    return (
        <header className="fixed p-4 w-screen flex left-0 flow top-0 justify-between">
            <p>Christos Efstathiades</p>
            <nav>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>
                        <DarkMode />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
