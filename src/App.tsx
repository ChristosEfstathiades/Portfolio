import AppLayout from "@/components/layouts/app-layout";
import SubHeading from "@/components/sub-heading";
import face from "@/assets/myface.webp";
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

                <section id="about" className="py-8 sm:py-16 px-6">
                    <SubHeading title="About Me" />
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <img
                            className="size-40 shrink-0 mr-4 object-cover rounded-full shadow-[0_0_15px_2px_rgba(255,117,24,1)]"
                            src={face}
                            alt=""
                        />
                        <p className="w">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Assumenda doloremque accusantium magnam ea
                            earum eaque perferendis similique? Doloribus ipsum
                            itaque, enim necessitatibus velit id explicabo
                            blanditiis cum animi fugiat vero deleniti. Quos
                            officiis hic accusamus iure reiciendis vel
                            repudiandae recusandae ipsum facere! Recusandae
                            neque quaerat corrupti necessitatibus. Quibusdam
                            velit quod ea similique odio vero consequuntur,
                            mollitia repellat laudantium neque recusandae optio
                            sapiente id, quam magni tempora alias iste unde sed
                            veniam eveniet iure reprehenderit ullam tempore. Hic
                            inventore harum repudiandae aperiam saepe, ad magnam
                            delectus eligendi ullam, nesciunt, veniam tempore!
                            Magnam, ducimus. At, eaque! Dolores vel
                            exercitationem est rem quibusdam.{" "}
                        </p>
                    </div>
                </section>
            </AppLayout>
        </>
    );
}

export default App;
