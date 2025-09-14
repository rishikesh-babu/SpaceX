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
      <h1 className="text-2xl font-bold text-center mb-6">SpaceX Crew Members</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {crewData.map((crew) => (
          <div
            key={crew.id}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 text-center"
          >
            <img
              src={crew.image || "https://via.placeholder.com/150"}
              alt={crew.name}
              className="w-40 h-40 mx-auto rounded-full object-cover"
            />
            <h2 className="mt-4 text-xl font-semibold">{crew.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">{crew.agency}</p>
            <p
              className={`mt-2 font-medium ${
                crew.status === "active"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {crew.status}
            </p>

            <div className="mt-3">
              <a
                href={crew.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Wikipedia
              </a>
            </div>

            {/* Link to crew details */}
            <Link
              to={`/crew/${crew.id}`}
              className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    )
}
