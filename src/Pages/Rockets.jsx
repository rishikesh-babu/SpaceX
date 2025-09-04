import axios from "axios";
import { useEffect, useState } from "react";

export default function Rockets() {
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        fetchRockets();
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
        <div className="p-6 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">🚀 SpaceX Rockets</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rockets.map((rocket) => (
                    <div
                        key={rocket.id}
                        className="p-6 bg-gray-900 rounded-xl shadow-md"
                    >
                        {/* Rocket Image */}
                        <img
                            src={rocket.flickr_images[0]}
                            alt={rocket.name}
                            className="rounded-lg w-full h-56 object-cover mb-4"
                        />

                        {/* Rocket Name + Description */}
                        <h2 className="text-2xl font-bold mb-2">{rocket.name}</h2>
                        <p className="mb-4">{rocket.description}</p>

                        {/* Specs */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <p><b>Height:</b> {rocket.height.meters} m</p>
                            <p><b>Diameter:</b> {rocket.diameter.meters} m</p>
                            <p><b>Mass:</b> {rocket.mass.kg} kg</p>
                            <p><b>Engines:</b> {rocket.engines.number} ({rocket.engines.type})</p>
                            <p><b>Cost/Launch:</b> ${rocket.cost_per_launch.toLocaleString()}</p>
                            <p><b>Success Rate:</b> {rocket.success_rate_pct}%</p>
                            <p><b>First Flight:</b> {rocket.first_flight}</p>
                            <p><b>Country:</b> {rocket.country}</p>
                            <p><b>Company:</b> {rocket.company}</p>
                        </div>

                        {/* Wikipedia Link */}
                        <a
                            href={rocket.wikipedia}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-blue-600 hover:underline"
                        >
                            🔗 Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
