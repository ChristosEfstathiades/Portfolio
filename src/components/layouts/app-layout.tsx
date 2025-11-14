import Navigation from "@/components/layouts/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navigation />
            <section>{children}</section>
        </>
    );
}
