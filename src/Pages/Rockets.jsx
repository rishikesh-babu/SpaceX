import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="py-6 px-1 sm:px-3 md:px-4 lg:px-6 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">🚀 SpaceX Rockets</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rockets.map((rocket) => (
                    <div
                        key={rocket.id}
                        className="p-6 bg-gray-200 dark:bg-gray-900 rounded-xl shadow-md"
                    >
                        {/* Rocket Image (clickable) */}
                        <Link to={`/rockets/${rocket.id}`}>
                            <img
                                src={rocket.flickr_images[0]}
                                alt={rocket.name}
                                className="rounded-lg w-full h-56 object-cover mb-4 hover:scale-105 transition-transform cursor-pointer"
                            />
                        </Link>

                        {/* Rocket Name */}
                        <h2 className="font-bold text-2xl text-center">{rocket.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
