export default function SubHeading({ title }: { title: string }) {
    const firstWord = title.split(" ")[0];
    const secondWord = title.split(" ")[1];
    return (
        <h2
            className="text-4xl font-medium relative mb-15 
        before:content-[''] before:w-14.5 before:h-0.5 before:bg-foreground before:absolute before:-bottom-3 
        after:content-[''] after:w-10 after:h-0.5 after:absolute after:-bottom-4.5 after:left-0 after:bg-foreground"
        >
            {firstWord}{" "}
            <span className="text-orange-primary">{secondWord}</span>
        </h2>
    );
}
