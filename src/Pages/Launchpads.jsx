import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Launchpads() {
    const [launchpadDetails, setLaunchpadDetails] = useState(null)

    useEffect(() => {
        fetchLaunchpadDetails()
        window.scroll(0, 0)
    }, [])

    function fetchLaunchpadDetails() {
        axios({
            method: 'GET',
            url: 'https://api.spacexdata.com/v4/launchpads'
        })
            .then((res) => {
                console.log('res :>> ', res);
                setLaunchpadDetails(res?.data)
            })
            .catch((err) => {
                console.log('err :>> ', err);
            })
    }

    if (!launchpadDetails) {
        return (
            <div className='h-[85vh] flex justify-center items-center '>
                <span className='loading loading-spinner loading-xl text-primary' />
            </div>
        )
    }

    return (
        <div className='py-6 px-1'>
            <h1 className="mb-7 font-extrabold text-2xl md:text-5xl text-center text-cyan-500 dark:text-accent">
                🚀 SpaceX Launchpads
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {launchpadDetails?.map((pad) => (
                    <div
                        key={pad.id}
                        className=" dark:bg-gray-800 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={pad.images?.large?.[0] || "https://via.placeholder.com/400x250"}
                                alt={pad.name}
                                className="w-full h-48 object-cover"
                            />
                            <span
                                className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${pad.status === "active"
                                        ? "bg-green-600 text-white"
                                        : pad.status === "retired"
                                            ? "bg-red-600 text-white"
                                            : "bg-yellow-500 text-white"
                                    }`}
                            >
                                {pad.status.toUpperCase()}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h2 className="text-2xl font-bold mb-1">{pad.name}</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                {pad.locality}, {pad.region}
                            </p>

                            <div className="mb-3 text-sm flex justify-between">
                                <p>🚀 Attempts: <strong>{pad.launch_attempts}</strong></p>
                                <p>✅ Success: <strong>{pad.launch_successes}</strong></p>
                            </div>

                            <Link
                                to={`/launchpads/${pad.id}`}
                                className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow text-sm transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}