export default function Project({ children }: { children: React.ReactNode }) {
    return (
        <section className="max-w-3xl mb-6 mx-auto rounded-2xl flex-col flex dark:bg-[#202020] bg-white p-7 border border-[#ececea] dark:border-[#2c2c2c] shadow-sm dark:shadow-none">
            {children}
        </section>
    );
}
