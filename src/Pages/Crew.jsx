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
        <div className="py-6 px-1">
            <h1 className="mt-6 mb-12 font-bold text-2xl md:text-3xl text-center text-cyan-500 dark:text-accent">
                🚀 SpaceX Crew Members
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {crewData.map((crew) => (
                    <div
                        key={crew.id}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden "
                    >
                        {/* Header with Image */}
                        <div className="relative">
                            <img
                                src={crew.image}
                                alt={crew.name}
                                className="aspect-[5/4] object-cover object-top"
                            />
                            <span className={`absolute top-3 right-3 px-3 py-1 font-medium rounded-full ${crew.status === "active" ? "bg-green-300 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"}`}>
                                {crew.status}
                            </span>
                        </div>

                        {/* Body */}
                        <div className="p-5">
                            {/* Name & Agency */}
                            <h2 className="text-xl font-bold text-cyan-500 dark:text-accent">{crew.name}</h2>
                            <p className="font-semibold text-sm text-secondary">{crew.agency}</p>

                            {/* Wikipedia Link */}
                            <a
                                href={crew.wikipedia}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                            >
                                📚 Learn more
                            </a>

                            {/* Launch IDs */}
                            {crew.launches?.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                        🚀 Launches
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {crew?.launches?.map((launchId, index) => (
                                            <Link
                                                to={`/launches/${launchId}`}
                                                key={index}
                                                className="btn btn-sm btn-info"
                                            >
                                                Launch {crew?.launches?.length === 1 ? '' : index + 1}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
