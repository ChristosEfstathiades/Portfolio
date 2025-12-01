import AppLayout from "@/components/layouts/app-layout";
import SubHeading from "@/components/sub-heading";
import face from "@/assets/myface.webp";
import soullink from "@/assets/soullink.png";
import signposting from "@/assets/signposting.png";
import pathfinding from "@/assets/pathfinding.png";
import Project from "@/components/project";
import Tools from "@/components/tools";
import ToolsTitle from "@/components/tools-title";
import Laravel from "@/assets/Laravel.svg";
import React from "@/assets/React.svg";
import Tailwind from "@/assets/Tailwind.svg";
import SQLite from "@/assets/SQLite.svg";
import GitHub from "@/assets/GitHub.svg";
import Python from "@/assets/Python.svg";
import Flask from "@/assets/Flask.svg";
import JavaScript from "@/assets/JavaScript.svg";
import ProjectTitle from "@/components/project-title";
import ProjectDescription from "@/components/project-description";
import ProjectLinks from "@/components/project-links";
import { Copyright } from "lucide-react";
const images: { [key: string]: string } = {
    Laravel: Laravel,
    React: React,
    Tailwind: Tailwind,
    SQLite: SQLite,
    Python: Python,
    Flask: Flask,
    GitHub: GitHub,
    JavaScript: JavaScript,
};
function App() {
    return (
        <>
            <AppLayout>
                <section className="hero py-24 text-center text-white bg-[linear-gradient(-45deg,#ffbf00,#ffad00,#ff9b00,#ff880b,#ff7518)]">
                    <div className="fadeinUp">
                        <h1 className="text-5xl font-bold">
                            Christos Efstathiades
                        </h1>
                        <p className="mt-12 text-2xl">
                            Full Stack Software Engineer
                        </p>
                        <p className="mt-2 text-lg">
                            Web Applications | Data Science | Embedded Software
                        </p>
                    </div>
                </section>

                <section
                    id="about"
                    className="py-8 sm:py-16 max-w-[80%] mx-auto fadeinUp"
                >
                    <SubHeading title="About Me" />
                    <div className="flex flex-col max-w-5xl mx-auto sm:flex-row items-center sm:items-start gap-16">
                        <img
                            className="sm:size-50 size-40 shrink-0  object-cover rounded-full shadow-[0_0_15px_2px_rgba(255,117,24,1)]"
                            src={face}
                            alt="My Face"
                        />
                        <p className="text-[#737373]">
                            I'm an <b>Embedded Software Engineer at IQHQ</b> and
                            a Computer Science graduate from the University of
                            Manchester. I've built full-stack web applications
                            and enjoy tackling problems across the wider field
                            of Software Engineering, including data science,
                            embedded systems, and machine learning. I'm
                            motivated by using the right tools for the job and
                            continuously expanding my skill set.
                        </p>
                    </div>
                </section>

                <section
                    id="projects"
                    className="py-8 sm:py-16 max-w-[80%] mx-auto"
                >
                    <SubHeading title="My Projects" />
                    <section>
                        <Project>
                            <ProjectTitle title="Soullink" />
                            <img
                                className="max-w-lg w-full mx-auto rounded-lg block duration-300 transition"
                                src={soullink}
                                alt="Screenshot of Soullink"
                            />
                            <ProjectDescription>
                                Soullink is a teambuilding web application for 2
                                player Pokemon Nuzlockes (A.K.A a Soullink).
                                Soullink lets users create, view, edit, and add
                                Pokemon to their Party. Soullink provides a team
                                generator that suggests possible teams to the
                                user that obey the Soullink restrictions.
                            </ProjectDescription>
                            {/* TODO: move div and toolstitle into tools component */}
                            <div className="flex items-center gap-2 flex-wrap">
                                <ToolsTitle />

                                <Tools
                                    tools={[
                                        "Laravel",
                                        "React",
                                        "Tailwind",
                                        "SQLite",
                                    ]}
                                    images={images}
                                />
                            </div>
                            <ProjectLinks
                                github="https://github.com/ChristosEfstathiades/Soullink"
                                site="https://soullink.christosefstathiades.com"
                            />
                        </Project>
                        <Project>
                            <ProjectTitle title="Signposting Knowledge Graph Tool" />
                            <img
                                className="max-w-lg w-full mx-auto rounded-lg block duration-300 transition"
                                src={signposting}
                                alt="Screenshot of Signposting Knowledge Graph Tool"
                            />
                            <ProjectDescription>
                                Python web crawler that retrieves hundreds of
                                counts of Linked Data from Signposting links on
                                the scholarly web and constructs Knowledge
                                Graphs in RDF format using the associated Linked
                                Data. Stores each respective Knowledge Graph in
                                a triple store database (Apache Jena Fuseki).
                                Displays Knowledge graphs and executes
                                explorative queries using SPARQL.
                            </ProjectDescription>
                            <div className="flex items-center gap-2 flex-wrap">
                                <ToolsTitle />
                                <Tools
                                    tools={["Python", "Flask"]}
                                    images={images}
                                />
                            </div>
                            <ProjectLinks github="https://github.com/ChristosEfstathiades/3rdYearProject" />
                        </Project>
                        <Project>
                            <ProjectTitle title="Pathfinding Visualiser Tool " />
                            <img
                                className="max-w-lg w-full mx-auto rounded-lg block duration-300 transition"
                                src={pathfinding}
                                alt="Screenshot of Pathfinding Visualiser Tool"
                            />
                            <ProjectDescription>
                                {" "}
                                Visualisation tool for pathfinding algorithms
                                including A* and Dijkstra’s algorithm.
                            </ProjectDescription>
                            <div className="flex items-center gap-2 flex-wrap">
                                <ToolsTitle />
                                <Tools tools={["JavaScript"]} images={images} />
                            </div>
                            <ProjectLinks
                                github="https://github.com/ChristosEfstathiades/PathfindingVisualiser"
                                site="https://pathfindingnea.netlify.app"
                            />
                        </Project>
                    </section>
                </section>

                <section
                    id="contact"
                    className="py-8 sm:py-16 max-w-[80%] mx-auto"
                >
                    <SubHeading title="Contact Me" />
                    <p className="text-[#737373]">
                        Please contact me directly at{" "}
                        <a
                            className="underline"
                            href="mailto:christos.efstathiades@outlook.com"
                        >
                            christos.efstathiades@outlook.com{" "}
                        </a>{" "}
                    </p>
                </section>

                <footer className="grid place-items-center bg-[#333] h-25">
                    <p className="text-white/70 flex items-center gap-1">
                        <Copyright size={16} /> 2025 Christos Efstathiades
                    </p>
                </footer>
            </AppLayout>
        </>
    );
}

export default App;
