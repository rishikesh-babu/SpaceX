import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function LaunchpadDetails() {
    const { id } = useParams()
    const [pad, setPad] = useState()

    useEffect(() => {
        fetchDetails()
    }, [])

    function fetchDetails() {
        axios({
            method: 'GET',
            url: `https://api.spacexdata.com/v4/launchpads/${id}`
        })
            .then((res) => {
                setPad(res?.data)
                console.log('res?.data :>> ', res?.data);
            })
            .catch((err) => {
                console.log('err :>> ', err);
            })
    }

    const content = [
        {
            heading: '📍 Location',
            content: (
                <div>
                    <p><strong>Locality:</strong> {pad?.locality}</p>
                    <p><strong>Region:</strong> {pad?.region}</p>
                    <p><strong>Timezone:</strong> {pad?.timezone}</p>
                </div>
            )
        },
        {
            heading: '🧭 Coordinates',
            content: (
                <div>
                    <p><strong>Latitude:</strong> {pad?.latitude}</p>
                    <p><strong>Longitude:</strong> {pad?.longitude}</p>
                    <a
                        href={`https://www.google.com/maps?q=${pad?.latitude},${pad?.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-blue-600 hover:underline"
                    >
                        🌍 View on Google Maps
                    </a>
                </div>
            )
        },
        {
            heading: '🚀 Launch Data',
            content: (
                <div>
                    <p><strong>Attempts:</strong> {pad?.launch_attempts}</p>
                    <p><strong>Successes:</strong> {pad?.launch_successes}</p>
                </div>
            )
        },
        {
            heading: '🛫 Rockets Used',
            content: (
                <div>
                    {pad?.rockets?.length > 0 ? (
                        <ul className="list-disc list-inside text-sm">
                            {pad?.rockets.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No rockets data available.</p>
                    )}
                </div>
            )
        }
    ]

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
                {pad?.name}
            </h1>

            {/* Image */}
            <div className="w-full h-64 mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img
                    src={pad?.images?.large?.[0] || "https://via.placeholder.com/400x250"}
                    alt={pad?.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Info Grid */}
            <div className="p-8 grid md:grid-cols-2 gap-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div>
                    <h2 className="text-xl font-semibold mb-2">📍 Location</h2>
                    <p><strong>Locality:</strong> {pad?.locality}</p>
                    <p><strong>Region:</strong> {pad?.region}</p>
                    <p><strong>Timezone:</strong> {pad?.timezone}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">🧭 Coordinates</h2>
                    <p><strong>Latitude:</strong> {pad?.latitude}</p>
                    <p><strong>Longitude:</strong> {pad?.longitude}</p>
                    <a
                        href={`https://www.google.com/maps?q=${pad?.latitude},${pad?.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-blue-600 hover:underline"
                    >
                        🌍 View on Google Maps
                    </a>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">🚀 Launch Data</h2>
                    <p><strong>Attempts:</strong> {pad?.launch_attempts}</p>
                    <p><strong>Successes:</strong> {pad?.launch_successes}</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">🛫 Rockets Used</h2>
                    {pad?.rockets?.length > 0 ? (
                        <ul className="list-disc list-inside text-sm">
                            {pad?.rockets.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No rockets data available.</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {content?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Heading */}
                        <div className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                            <span className="text-blue-600 dark:text-blue-400">🔹</span>
                            {item?.heading}
                        </div>

                        {/* Content */}
                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            {item?.content}
                        </div>
                    </div>
                ))}
            </div>


            {/* Description */}
            <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-2">📖 Description</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    {pad?.details || "No additional details available."}
                </p>
            </div>
        </div>
    )
}
