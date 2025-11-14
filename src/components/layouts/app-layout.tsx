import Navigation from "./navigation.tsx";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            <section>{children}</section>
        </>
    );
}
