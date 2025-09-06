import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Rockets() {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetchRockets();
        window.scroll(0, 0)
    }, []);

    function fetchRockets() {
        axios({
            method: 'GET',
            url: 'https://api.spacexdata.com/v4/rockets'
        })
            .then((res) => {
                console.log('res.data :>> ', res.data);
                setRockets(res.data);
            });
    }

    return (
        <div className="py-10 px-2 sm:px-3 md:px-4 lg:px-6 min-h-screen ">

            {/* Page Title + Subtitle */}
            <div className="text-center mb-12">
                <h1 className="mb-4 font-extrabold text-4xl md:text-5xl text-cyan-500 dark:text-accent">🚀 SpaceX Rockets</h1>
                <p className="max-w-2xl mx-auto font-semibold text-lg text-justify sm:text-center text-accent dark:text-cyan-300">
                    Discover the incredible fleet of SpaceX rockets that are pushing the
                    boundaries of innovation and making space travel more accessible.
                    Click on any rocket to dive into full details.
                </p>
            </div>

            {/* Rockets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rockets.map((rocket) => (
                    <Link to={`/rockets/${rocket.id}`}>
                        <div
                            key={rocket.id}
                            className="relative group p-6 bg-base-300 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                        >
                            {/* Rocket Image (clickable) */}
                            <img
                                src={rocket.flickr_images[0]}
                                alt={rocket.name}
                                className="rounded-lg w-full h-64 object-cover mb-4 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                            />

                            {/* Rocket Name */}
                            <h2 className="font-bold text-center text-2xl text-cyan-600 dark:text-cyan-300">{rocket.name}</h2>

                            {/* Hover Overlay Details */}
                            <div className="absolute inset-0 opacity-0 bg-gray-500/60 dark:bg-gray-900/80 text-white rounded-xl flex flex-col justify-center items-center group-hover:opacity-100 transition-opacity duration-300">
                                <p><b>First Flight:</b> {rocket.first_flight}</p>
                                <p><b>Height:</b> {rocket.height.meters} m</p>
                                <p><b>Success Rate:</b> {rocket.success_rate_pct}%</p>
                                <p><b>Country:</b> {rocket.country}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer CTA */}
            <div className="text-center mt-16">
                <p className="text-lg opacity-80">
                    Want to learn more about SpaceX's journey?
                </p>
                <Link
                    to="/missions"
                    className="mt-4 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold shadow-lg transition transform hover:scale-105"
                >
                    Explore Missions 🚀
                </Link>
            </div>
        </div>

    );
}
