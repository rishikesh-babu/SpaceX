import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Launches() {
    const [launches, setLaunches] = useState([])
    const [selectedLaunches, setSelectedLaunches] = useState('all')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchlaunches()
        window.scroll(0, 0)
    }, [])

    const filteredData = selectedLaunches === 'all' ? launches : launches.filter(item => {
        let value
        if (selectedLaunches === 'true') {
            value = true
        } else if (selectedLaunches === 'false') {
            value = false
        } else {
            value = null
        }

        if (item.success === value) {
            return item
        }
    })

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
            .finally(() => {
                // setLoading(false)
            })
    }

    const options = [
        {
            name: 'All',
            value: 'all'
        },
        {
            name: 'Success',
            value: true
        },
        {
            name: 'Failed',
            value: false
        },
        {
            name: 'Upcoming',
            value: null
        }
    ]

    return (
        <div className="py-10 px-2">
            {/* Title */}
            <div className="text-center">
                <h1 className="mb-6 font-extrabold text-4xl text-cyan-500 dark:text-accent">🚀 SpaceX Launches</h1>
                <p className="max-w-2xl mx-auto text-lg text-justify sm:text-center text-accent dark:text-cyan-300">
                    Browse through historic, recent, and upcoming launches from SpaceX.
                    Click on a launch to view full details, failures, and media.
                </p>
            </div>

            {/* Filter - all, success, failed, upcomming */}
            <select
                name="launches"
                className='block mx-auto my-4 p-2.5 w-full max-w-4xl text-lg sm:text-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm dark:focus:outline-2 dark:focus:outline-gray-800 focus:ring-2 focus:ring-blue-500'
                value={selectedLaunches}
                onChange={(e) => setSelectedLaunches(e.target.value)}
            >
                {options.map((item, index) => (
                    <option key={index} value={item.value}>{item.name}</option>
                ))}
            </select>

            {loading ? (
                <div className="h-[40vh] flex justify-center items-center">
                    <span className="loading loading-spinner loading-xl scale-150 text-primary"></span>
                </div>
            ) : (
                <div div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                    {filteredData.map((launch) => (
                        <Link to={`/launches/${launch?.id}`}
                            key={launch?.id}
                            className="p-6 text-center bg-base-300 dark:bg-gray-800 hover:bg-gray-600/50 dark:hover:bg-gray-900/90 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
            )
            }

        </div >
    )
}
