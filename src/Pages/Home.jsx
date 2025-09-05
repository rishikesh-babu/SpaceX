import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[100vh] py-8 text-center bg-gradient-to-r from-slate-100 via-gray-200 to-slate-300 dark:bg-gradient-to-r dark:from-black dark:via-gray-800 dark:to-black flex flex-col justify-center items-center overflow-hidden">

                {/* Subtle space background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_70%)]"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    {/* Title */}
                    <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        🚀 SpaceX Explorer
                    </motion.h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Discover the technology, missions, and vision that are shaping the future
                        of space travel. From reusable rockets to interplanetary dreams,
                        SpaceX is redefining what’s possible.
                    </p>

                    {/* Primary Action */}
                    <Link
                        to="/rockets"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold shadow-lg transition transform hover:scale-105"
                    >
                        Explore Rockets
                    </Link>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-8 mt-16 text-gray-800 dark:text-gray-200">
                        <div>
                            <h3 className="text-4xl font-bold">
                                <CountUp start={0} end={200} duration={5} />+
                            </h3>
                            <p className="opacity-80">Successful Launches</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">
                                <CountUp end={20} duration={5} />+
                            </h3>
                            <p className="opacity-80">Active Rockets & Spacecraft</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">∞</h3>
                            <p className="opacity-80">Possibilities Ahead</p>
                        </div>
                    </div>

                    {/* Scroll Down Hint */}
                    <div className="mt-16 animate-bounce">
                        <span className="text-2xl opacity-70">⬇</span>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="min-h-[101vh] py-7 px-2 sm:px-3 md:px-4 lg:px-6 bg-gradient-to-b from-gray-100 to-base-200 dark:from-gray-900 dark:to-black flex flex-col justify-evenly">
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
                            className="relative size-[20rem] rounded-full shadow-2xl border-4 border-white/10 dark:border-gray-700 object-cover transition-transform duration-500 group-hover:scale-105"
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
