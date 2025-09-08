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
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🚀 Launch Details</h1>

            {/* Defensive check with optional chaining */}
            <p>ID: {launchDetails?.id}</p>
            <p>Name: {launchDetails?.name}</p>
            <p>Flight #: {launchDetails?.flight_number}</p>
            <p>
                Date:{" "}
                {launchDetails?.date_utc
                    ? new Date(launchDetails?.date_utc).toLocaleString()
                    : "N/A"}
            </p>
            <p>
                Status:{" "}
                {launchDetails?.success === null
                    ? "Upcoming"
                    : launchDetails?.success
                    ? "✅ Success"
                    : "❌ Failed"}
            </p>

            <div className="mt-4">
                <img
                    src={
                        launchDetails?.links?.patch?.large ||
                        "https://via.placeholder.com/300x300?text=No+Patch"
                    }
                    alt={launchDetails?.name || "Launch Patch"}
                    className="w-48 h-48 object-contain"
                />
            </div>
        </div>
    )
}
