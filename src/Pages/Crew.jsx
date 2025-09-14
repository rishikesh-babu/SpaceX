import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Crew() {
    const [crewData, setCrewData] = useState([])

    useEffect(() => {
        fetchData()
        window.scroll(0, 0)
    }, [])
    function fetchData() {
        axios.get('https://api.spacexdata.com/v4/crew')
            .then((res) => {
                setCrewData(res.data)
            })
            .catch((err) => {
                console.log('err :>> ', err);
                alert('Error in fetching Crew details')
            })
    }
    return (
         <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-cyan-500 dark:text-accent">
                🚀 SpaceX Crew Members
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {crewData.map((crew) => (
                    <div
                        key={crew.id}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
                    >
                        {/* Crew Image */}
                        <img
                            src={crew.image || "https://via.placeholder.com/150"}
                            alt={crew.name}
                            className="w-32 h-32 mx-auto rounded-full object-cover border"
                        />

                        {/* Name & Agency */}
                        <h2 className="mt-4 text-xl font-semibold">{crew.name}</h2>
                        <p className="text-gray-500 dark:text-gray-400">{crew.agency}</p>

                        {/* Status */}
                        <p
                            className={`mt-2 font-medium ${
                                crew.status === "active" ? "text-green-500" : "text-red-500"
                            }`}
                        >
                            {crew.status}
                        </p>

                        {/* Wikipedia */}
                        <div className="mt-3">
                            <a
                                href={crew.wikipedia}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                📚 Wikipedia
                            </a>
                        </div>

                        {/* Launch IDs */}
                        {crew.launches?.length > 0 && (
                            <div className="mt-4 text-left">
                                <h3 className="font-semibold mb-2">Launches:</h3>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    {crew.launches.map((launchId, index) => (
                                        <li key={index} className="text-gray-600 dark:text-gray-300">
                                            {launchId}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
