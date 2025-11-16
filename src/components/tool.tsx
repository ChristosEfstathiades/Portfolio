export default function Tool({ name, image }: { name: string; image: string }) {
    return (
        <div className="px-2 font-semibold py-0.5 gap-1 bg-white dark:bg-[#111] shadow flex rounded items-center">
            <img className="h-5" src={image} alt="Logo" />
            <p>{name}</p>
        </div>
    );
}
