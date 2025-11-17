import Tool from "@/components/tool";
export default function Tools({
    tools,
    images,
}: {
    tools: string[];
    images: { [key: string]: string };
}) {
    return (
        <>
            {tools.map((tool) => {
                return <Tool key={tool} name={tool} image={images[tool]} />;
            })}
        </>
    );
}
