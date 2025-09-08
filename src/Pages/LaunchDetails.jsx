import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function LaunchDetails() {
    const { id } = useParams()
    const [launchDetails, setLaunchDetails] = useState()

    useEffect(() => {
        fetchData()
        window.scroll(0, 0)
    }, [])

    function fetchData() {
        axios({
            method: 'GET',
            url: `https://api.spacexdata.com/v4/launches/${id}`
        })
            .then((res) => {
                setLaunchDetails(res.data)
            })
            .catch((err) => {
                console.log('err :>> ', err);
                alert('Error in fetching launchDetails')
            })
    }
    return (
        <div className="p-6py-10 px-2 sm:px-3 md:px-4 lg:px-6 ">
            <h1 className="mb-6 font-bold text-3xlfont-extrabold text-4xl md:text-5xl text-cyan-500 dark:text-accent">🚀 {launchDetails?.name}</h1>

            {/* Patch */}
            <div className="flex justify-center mb-6">
                <img
                    src={
                        launchDetails?.links?.patch?.large ||
                        "https://via.placeholder.com/300x300?text=No+Patch"
                    }
                    alt={launchDetails?.name || "Launch Patch"}
                    className="w-48 h-48 object-contain"
                />
            </div>

            {/* Basic Info */}
            <div className="space-y-2 mb-6">
                <p><span className="font-semibold">ID:</span> {launchDetails?.id}</p>
                <p><span className="font-semibold">Flight #:</span> {launchDetails?.flight_number}</p>
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
            </div>

            {/* Details */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Mission Details</h2>
                <p>{launchDetails?.details || "No details available"}</p>
            </div>

            {/* Failures */}
            {launchDetails?.failures?.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Failures</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {launchDetails?.failures?.map((failure, index) => (
                            <li key={index}>
                                ⏱ Time: {failure?.time}s |
                                🛑 Reason: {failure?.reason} |
                                ⬆️ Altitude: {failure?.altitude ?? "N/A"}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Technical Info */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Technical Data</h2>
                <p><span className="font-semibold">Rocket ID:</span> {launchDetails?.rocket}</p>
                <p><span className="font-semibold">Payloads:</span> {launchDetails?.payloads?.join(", ") || "N/A"}</p>
                <p><span className="font-semibold">Launchpad:</span> {launchDetails?.launchpad}</p>
            </div>

            {/* External Links */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">External Links</h2>
                <div className="flex gap-4 flex-wrap">
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
            </div>
        </div>

    )
}
