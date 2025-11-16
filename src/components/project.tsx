export default function Project({ children }: { children: React.ReactNode }) {
    return (
        <section className="max-w-3xl mb-5 mx-auto rounded-lg flex-col flex bg-gray-100 p-4 border-black/5 border">
            {children}
        </section>
    );
}
