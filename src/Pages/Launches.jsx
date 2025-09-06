import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Launches() {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetchlaunches()
        window.scroll(0, 0)
    }, [])

    function fetchlaunches() {
        axios({
            method: 'GET',
            url: 'https://api.spacexdata.com/v4/launches'
        })
            .then((res) => {
                console.log('res :>> ', res);
                setLaunches(res.data)
            })
            .catch((err) => {
                console.log('err :>> ', err);
                alert('Error in fetching launches')
            })
    }

    return (
        <div className="py-10 px-2 min-h-screen">
            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="mb-6 font-extrabold text-4xl text-cyan-500 dark:text-accent">🚀 SpaceX Launches</h1>
                <p className="max-w-2xl mx-auto text-lg text-justify sm:text-center text-accent dark:text-cyan-300">
                    Browse through historic, recent, and upcoming launches from SpaceX.
                    Click on a launch to view full details, failures, and media.
                </p>
            </div>

            {/* Launches Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {launches.map((launch) => (
                    <Link to={`/launches/${launch?.id}`}
                        key={launch?.id}
                        className="p-6 text-center bg-base-300 dark:bg-gray-800 hover:bg-gray-900/90 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        {/* Mission Patch */}
                        <img
                            src={launch?.links?.patch?.small || launch?.links?.patch?.large}
                            alt={launch?.name}
                            className="mb-4 mx-auto size-32 object-contain transition-transform cursor-pointer"
                        />

                        {/* Launch Name */}
                        <h2 className="text-xl font-bold mb-2">{launch?.name}</h2>

                        {/* Status */}
                        <p className={`font-semibold ${launch?.success === null ? "text-yellow-500" : launch?.success ? "text-green-500" : "text-red-500"}`}>
                            {launch?.success === null ? "Upcoming" : launch?.success ? "Success" : "Failed"}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
