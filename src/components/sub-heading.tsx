export default function SubHeading({ title }: { title: string }) {
    const firstWord = title.split(" ")[0];
    const secondWord = title.split(" ")[1];
    return (
        <h2 className="text-3xl font-medium relative mb-7.5 before:content-[''] before:w-12.5 before:h-0.5 before:bg-foreground before:absolute before:-bottom-px after:content-[''] after:w-8 after:h-0.5 after:absolute after:-bottom-2 after:left-0 after:bg-foreground">
            {firstWord}{" "}
            <span className="text-orange-primary">{secondWord}</span>
        </h2>
    );
}
