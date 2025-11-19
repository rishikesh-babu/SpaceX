import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function LaunchDetails() {
    const { id } = useParams()
    const [launchDetails, setLaunchDetails] = useState()

    useEffect(() => {
        fetchData()
        window.scroll(0, 0)
    }, [])

    function fetchData() {
        axios(`https://api.spacexdata.com/v4/launches/${id}`)
            .then((res) => {
                setLaunchDetails(res.data)
            })
            .catch((err) => {
                console.log('err :>> ', err);
                alert('Error in fetching launchDetails')
            })
    }

    const sections = [
        {
            title: "Mission Patch",
            content: (
                <div className="flex justify-center">
                    <img
                        src={
                            launchDetails?.links?.patch?.large ||
                            "https://via.placeholder.com/300x300?text=No+Patch"
                        }
                        alt={launchDetails?.name || "Launch Patch"}
                        className="size-40 object-contain border rounded-lg"
                    />
                </div>
            ),
        },
        {
            title: "Basic Info",
            content: (
                <>
                    <p>
                        <span className="font-semibold">Flight #:</span>{" "}
                        {launchDetails?.flight_number}
                    </p>
                    <p>
                        <span className="font-semibold">Date:</span>{" "}
                        {launchDetails?.date_utc
                            ? new Date(launchDetails?.date_utc).toLocaleString()
                            : "N/A"}
                    </p>
                    <p>
                        <span className="font-semibold">Status:</span>{" "}
                        {launchDetails?.success === null
                            ? "Upcoming"
                            : launchDetails?.success
                                ? "✅ Success"
                                : "❌ Failed"}
                    </p>
                </>
            ),
        },
        {
            title: "Mission Details",
            content: <p className='text-justify'>{launchDetails?.details || "No details available"}</p>,
        },
        {
            title: "Failures",
            content:
                launchDetails?.failures?.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2">
                        {launchDetails?.failures?.map((failure, index) => (
                            <li key={index}>
                                ⏱ Time: {failure?.time}s | 🛑 Reason: {failure?.reason} | ⬆️
                                Altitude: {failure?.altitude ?? 'N/A'}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No failures recorded</p>
                ),
        },
        {
            title: "Technical Data",
            content: (
                <div className='flex justify-evenly'>
                    <Link to={`/rockets/${launchDetails?.rocket}`} className='text-black btn btn-info' >
                        Rocket Details
                    </Link>
                    {/* <span>Payloads:</span>{" "}
                        {launchDetails?.payloads?.join(", ") || "N/A"} */}

                    <Link to={`/launchpads/${launchDetails?.launchpad}`} className='text-black btn btn-accent' >
                        Launchpad Details
                    </Link>
                </div>
            ),
        },
        {
            title: "External Links",
            content: (
                <div className="flex flex-wrap justify-evenly gap-4">
                    {launchDetails?.links?.webcast && (
                        <a
                            href={launchDetails?.links?.webcast}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            🎥 Webcast
                        </a>
                    )}
                    {launchDetails?.links?.article && (
                        <a
                            href={launchDetails?.links?.article}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            📄 Article
                        </a>
                    )}
                    {launchDetails?.links?.wikipedia && (
                        <a
                            href={launchDetails?.links?.wikipedia}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            📚 Wikipedia
                        </a>
                    )}
                </div>
            ),
        },
    ];

    if (!launchDetails) {
        return (
            <div className='h-[85vh] flex justify-center items-center '>
                <span className='loading loading-spinner loading-xl text-primary' />
            </div>
        )
    }

    return (
        <div className="py-10 px-2 sm:px-3 md:px-4 lg:px-6">
            <h1 className="mb-8 font-extrabold text-4xl md:text-5xl text-center text-cyan-500 dark:text-accent">
                🚀 {launchDetails?.name}
            </h1>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections?.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 bg-gray-200 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow transition"
                    >
                        <h2 className="pb-2 mb-3 font-bold text-xl text-center text-cyan-500 dark:text-accent border-b">
                            {item.title}
                        </h2>
                        <div className="font-semibold sm:text-lg text-info text-center space-y-2">{item.content}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}