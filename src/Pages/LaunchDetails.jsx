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

    const sections = [
        {
            title: 'Mission Patch',
            content: (
                <>
                    <img src={launchDetails?.links?.patch?.large} alt={launchDetails?.name || "Launch Patch"} />
                </>
            )
        }, 
        {
            title: 'Basic Info', 
            content: (
                <>
                <p><span>Flight #: </span> {launchDetails?.flight_number}</p>
                <p>
                    <span>Date: {" "}</span>
                    {launchDetails?.date_utc? new Date(launchDetails?.date_utc).toLocaleString(): "N/A"}
                </p>
                </>
            )
        }
    ]

    return (
        <div className="py-10 px-2 sm:px-3 md:px-4 lg:px-6">
            <h1 className="mb-8 font-extrabold text-4xl md:text-5xl text-center text-cyan-500 dark:text-accent">
                🚀 {launchDetails?.name}
            </h1>

            {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections?.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 bg-gray-200 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow- transition"
                    >
                        <h2 className="pb-2 mb-3 font-bold text-xl text-center text-cyan-500 dark:text-accent border-b">
                            {item.title} 
                        </h2>
                        <div className="font-semibold sm:text-lg text-info space-y-2">{item.content}</div>
                    </div>
                ))}
            </div> */}
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Patch Card */}
                <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md ">
                    <div className="font-bold text-xl text-center text-cyan-500 dark:text-accent border-b">Mission Patch</div>
                    <img
                        src={launchDetails?.links?.patch?.large}
                        alt={launchDetails?.name || "Launch Patch"}
                        className="mx-auto size-40 object-contain text-center border"
                    />
                </div>

                {/* Basic Info Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-3">Basic Info</h2>
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

                {/* Mission Details Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-3">Mission Details</h2>
                    <p>{launchDetails?.details || "No details available"}</p>
                </div>

                {/* Failures Card */}
                {launchDetails?.failures?.length > 0 && (
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 md:col-span-2">
                        <h2 className="text-lg font-semibold mb-3">Failures</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {launchDetails?.failures?.map((failure, index) => (
                                <li key={index}>
                                    ⏱ Time: {failure?.time}s | 🛑 Reason: {failure?.reason} | ⬆️ Altitude:{" "}
                                    {failure?.altitude ?? "N/A"}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technical Info Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-3">Technical Data</h2>
                    <p><span className="font-semibold">Rocket ID:</span> {launchDetails?.rocket}</p>
                    <p><span className="font-semibold">Payloads:</span> {launchDetails?.payloads?.join(", ") || "N/A"}</p>
                    <p><span className="font-semibold">Launchpad:</span> {launchDetails?.launchpad}</p>
                </div>

                {/* External Links Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-3">External Links</h2>
                    <div className="flex flex-wrap gap-4">
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
        </div>
    )
}
