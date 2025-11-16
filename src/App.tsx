import AppLayout from "@/components/layouts/app-layout";
import SubHeading from "@/components/sub-heading";
import face from "@/assets/myface.webp";
import soullink from "@/assets/soullink.png";
import signposting from "@/assets/signposting.png";
import Project from "@/components/project";
import Tool from "@/components/tool";
import Laravel from "@/assets/Laravel.svg";
import React from "@/assets/React.svg";
import Tailwind from "@/assets/Tailwind.svg";
import SQLite from "@/assets/SQLite.svg";
import GitHub from "@/assets/GitHub.svg";
import Python from "@/assets/Python.svg";
import Flask from "@/assets/Flask.svg";
const images = {
    Laravel,
    React,
    Tailwind,
    SQLite,
    Python,
    Flask,
    GitHub,
};
function App() {
    return (
        <>
            <AppLayout>
                <section className="hero py-24 text-center text-white bg-[linear-gradient(-45deg,#ffbf00,#ffad00,#ff9b00,#ff880b,#ff7518)]">
                    <div>
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
                    className="py-8 sm:py-16 max-w-[80%] mx-auto"
                >
                    <SubHeading title="About Me" />
                    <div className="flex flex-col max-w-5xl mx-auto sm:flex-row items-center sm:items-start gap-16">
                        <img
                            className="sm:size-50 size-40 shrink-0  object-cover rounded-full shadow-[0_0_15px_2px_rgba(255,117,24,1)]"
                            src={face}
                            alt="My Face"
                        />
                        <p className="text-[#737373]">
                            I'm a recent graduate from the University of
                            Manchester with a{" "}
                            <b>Bachelor's degree in Computer Science</b> who is
                            looking to begin my career in Software Development.
                            I have experience developing full stack web
                            applications but I enjoy solving problems in all
                            areas of Software Engineering such as Data Science,
                            Embedded Systems, Machine Learning, and more. I'm
                            passionate about using the right tools for the job
                            and continuously learning new technologies.
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
                            <h3 className="text-2xl font-bold mb-4">
                                Soullink
                            </h3>
                            <img
                                className="max-w-lg w-full mx-auto rounded-lg block duration-300 transition"
                                src={soullink}
                                alt="Screenshot of Soullink"
                            />
                            <p className="my-3">
                                Soullink is a teambuilding web application for 2
                                player Pokemon Nuzlockes (A.K.A a Soullink).
                                Soullink lets users create, view, edit, and add
                                Pokemon to their Party. Soullink provides a team
                                generator that suggests possible teams to the
                                user that obey the Soullink restrictions.
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-lg pl-2.5 border-l-3 font-bold border-orange-primary">
                                    Tools
                                </h4>
                                <Tool
                                    name="Laravel"
                                    image={images["Laravel"]}
                                />
                                <Tool name="React" image={images["React"]} />
                                <Tool
                                    name="Tailwind"
                                    image={images["Tailwind"]}
                                />
                                <Tool name="SQLite" image={images["SQLite"]} />
                            </div>
                        </Project>
                        <Project>
                            <h3 className="text-2xl font-bold mb-4">
                                Signposting Knowledge Graph Tool
                            </h3>
                            <img
                                className="max-w-lg w-full mx-auto rounded-lg block duration-300 transition"
                                src={signposting}
                                alt="Screenshot of Signposting Knowledge Graph Tool"
                            />
                            <p className="my-3">
                                Python web crawler that retrieves hundreds of
                                counts of Linked Data from Signposting links on
                                the scholarly web. Constructs Knowledge Graphs
                                in RDF format using the associated Linked Data.
                                Stores Knowledge Graphs in a triple store
                                database. Displays Knowledge graphs and executes
                                explorative queries using SPARQL.
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-lg pl-2.5 border-l-3 font-bold border-orange-primary">
                                    Tools
                                </h4>
                                <Tool name="Python" image={images["Python"]} />
                                <Tool name="Flask" image={images["Flask"]} />
                            </div>
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
                            href="mailto:christosefstathiades@outlook.com"
                        >
                            christosefstathiades@outlook.com{" "}
                        </a>{" "}
                        or through this form.
                    </p>
                </section>
            </AppLayout>
        </>
    );
}

export default App;
