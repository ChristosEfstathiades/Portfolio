export default function Tool({ name }: { name: string }) {
    return (
        <div className="px-2 font-semibold py-0.5 gap-1 bg-white shadow flex rounded items-center">
            <p>{name}</p>
            <img className="h-5" src={`/src/assets/${name}.svg `} alt="Logo" />
        </div>
    );
}
