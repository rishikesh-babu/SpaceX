import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function LaunchpadDetails() {
    const { id } = useParams()
    const [pad, setPad] = useState(null)

    useEffect(() => {
        fetchDetails()
        window.scroll(0, 0)
    }, [])

    function fetchDetails() {
        axios({
            method: 'GET',
            url: `https://api.spacexdata.com/v4/launchpads/${id}`
        })
            .then((res) => {
                setPad(res?.data)
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
                        className="mt-3 inline-block"
                    >
                        <button className='btn btn-outline btn-info hover:text-white'>
                            🌍 View on Google Maps
                        </button>
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
                        <ul className="flex gap-3">
                            {pad?.rockets.map((r, i) => (
                                <li key={i}>
                                    <Link to={`/rockets/${r}`} className="btn btn-outline btn-info hover:text-white">
                                        View Rocket
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No rockets data available.</p>
                    )}
                </div>
            )
        }
    ]

    if (!pad) {
        return (
            <div className='h-[85vh] flex justify-center items-center '>
                <span className='loading loading-spinner loading-xl text-primary' />
            </div>
        )
    }

    return (
        <div className="py-6 px-1 sm:p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
                {pad?.name}
            </h1>

            {/* Image */}
            <div className="mb-6 w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                    src={pad?.images?.large?.[0] || "https://via.placeholder.com/400x250"}
                    alt={pad?.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {content?.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Heading */}
                        <div className="mb-3 text-2xl font-semibold text-nowrap text-gray-800 dark:text-white flex items-center gap-2">
                            {item?.heading}
                        </div>

                        <hr  className='mb-4' />

                        {/* Content */}
                        <div className="font-medium text-gray-600 dark:text-gray-300">
                            {item?.content}
                        </div>
                    </div>
                ))}
            </div>


            {/* Description */}
            <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-2">📖 Description</h2>
                <p className="text-justify text-gray-600 dark:text-gray-300">
                    {pad?.details || "No additional details available."}
                </p>
            </div>
        </div>
    )
}
