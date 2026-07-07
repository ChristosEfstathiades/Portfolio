export default function Tool({ name, image }: { name: string; image: string }) {
    return (
        <div className="px-[11px] font-medium py-[5px] gap-1.5 text-sm bg-[#f6f6f4] dark:bg-[#161616] border border-[#e7e7e4] dark:border-[#2c2c2c] flex rounded-lg items-center">
            <img className="h-5" src={image} alt="Logo" />
            <p>{name}</p>
        </div>
    );
}
