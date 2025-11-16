export default function Project({ children }: { children: React.ReactNode }) {
    return (
        <section className="max-w-3xl mb-5 mx-auto rounded-lg flex-col flex dark:bg-[#181818] bg-gray-100 p-6 border-black/5 border">
            {children}
        </section>
    );
}
