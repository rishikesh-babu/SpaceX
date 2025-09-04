import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="h-[90vh] text-center bg-gradient-to-r from-slate-100 via-gray-200 to-slate-300 dark:bg-gradient-to-r dark:from-black dark:via-gray-800 dark:to-black flex flex-col justify-center items-center">
                <div className="text-5xl font-extrabold mb-6">🚀 SpaceX Explorer</div>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Explore rockets, missions, launches and the journey of SpaceX.
                </p>
                <Link
                    to="/rockets"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold shadow-lg"
                >
                    Explore Rockets
                </Link>
            </section>

            {/* About Section */}
            <section className="min-h-[90vh] py-7 px-1 sm:px-3 md:px-4 lg:px-6 bg-gradient-to-b from-gray-100 to-base-200 dark:from-gray-900 dark:to-black flex flex-col justify-evenly">
                <h2 className="font-extrabold text-4xl md:text-5xl text-center bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text">
                    🌌 About SpaceX
                </h2>

                <div className="max-w-6xl mx-auto mt-7 grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center relative group">
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary opacity-70 blur-xl group-hover:opacity-100 transition duration-500"></div>
                        <img
                            src="/space2.jpg"
                            alt="SpaceX Rocket Launch"
                            className="relative size-[55vh] rounded-full shadow-2xl border-4 border-white/10 dark:border-gray-700 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <p className="text-lg leading-relaxed mb-6 text-justify text-base-content/90 dark:text-gray-300">
                            SpaceX designs, develops, manufactures, and launches advanced rockets
                            and spacecraft. Founded by Elon Musk in 2002, its mission is to make
                            humanity multiplanetary and push the boundaries of space exploration.
                        </p>
                        <p className="text-lg leading-relaxed mb-6 text-justify text-base-content/90 dark:text-gray-300">
                            Over the years, SpaceX has achieved groundbreaking milestones,
                            including the first privately-funded spacecraft to reach orbit, the
                            first reusable orbital-class rocket, and the ambitious Starship
                            program, which aims to carry humans to Mars and beyond.
                        </p>
                        <p className="text-lg leading-relaxed text-justify text-base-content/90 dark:text-gray-300">
                            With innovations like{" "}
                            <span className="font-semibold text-primary">Falcon 9</span>,{" "}
                            <span className="font-semibold text-accent">Dragon</span>, and{" "}
                            <span className="font-semibold text-secondary">Starlink</span>, SpaceX
                            continues to revolutionize space technology and inspire the next
                            generation of explorers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative py-20 px-6 text-center bg-gradient-to-r from-slate-100 via-gray-200 to-slate-300 dark:bg-gradient-to-r dark:from-black dark:via-gray-800 dark:to-black overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_70%)]"></div>

                <div className="relative mx-auto max-w-5xl ">
                    <h2 className="text-5xl font-extrabold mb-8 tracking-tight">🌍 Our Vision</h2>
                    <p className="mb-12 mx-auto max-w-3xl text-lg leading-relaxed">
                        SpaceX is on a mission to revolutionize space technology and make life
                        multiplanetary. Through reusable rockets, groundbreaking spacecraft, and
                        visionary engineering, we’re building the path to a future among the stars.
                    </p>

                    {/* Vision Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4">🚀 Reusability</h3>
                            <p className="opacity-90">
                                Designing rockets that return safely to Earth, lowering costs and
                                making launches more sustainable.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4">🛰️ Innovation</h3>
                            <p className="opacity-90">
                                Pushing the boundaries of aerospace with cutting-edge technology,
                                from satellites to crewed spaceflight.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300">
                            <h3 className="text-2xl font-semibold mb-4">🌌 Beyond Earth</h3>
                            <p className="opacity-90">
                                Building the Starship system to take humanity to the Moon, Mars,
                                and beyond into the cosmos.
                            </p>
                        </div>
                    </div>

                    {/* Closing line */}
                    <p className="mt-16 text-xl font-medium opacity-95">
                        “The future of humanity lies beyond Earth — and we’re taking the first steps today.”
                    </p>
                </div>
            </section>


            {/* Features Section */}
            <section className="py-16 px-6 text-center bg-gradient-to-b from-gray-100 to-base-200 dark:from-gray-900 dark:to-black grid grid-cols-1 md:grid-cols-3 gap-8 ">
                <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-bold mb-4">🚀 Rockets</h3>
                    <p>
                        Discover SpaceX’s incredible lineup of rockets built to carry humans
                        and satellites into orbit.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-bold mb-4">🛰️ Missions</h3>
                    <p>
                        Learn about historic missions that redefined space exploration and
                        future plans beyond Earth.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                    <h3 className="text-2xl font-bold mb-4">🌌 Future</h3>
                    <p>
                        Explore the path to Mars, deep space travel, and humanity’s future
                        among the stars.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6 text-center bg-gray-200 dark:bg-gray-800">
                <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
                <p className="mb-8 text-lg">
                    Take a closer look at the powerful rockets that make space exploration
                    possible.
                </p>
                <Link
                    to="/rockets"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold shadow-lg"
                >
                    Start Exploring →
                </Link>
            </section>
        </div>
    );
}
