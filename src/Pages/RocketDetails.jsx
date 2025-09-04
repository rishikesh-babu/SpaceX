import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function RocketDetails() {
    const { id } = useParams()
    const [rocket, setRocket] = useState(null)

    useEffect(() => {
        fetchRocketDetails()
        window.scroll(0, 0)
    }, [])

    function fetchRocketDetails() {
        axios({
            method: 'GET',
            url: `https://api.spacexdata.com/v4/rockets/${id}`
        })
            .then((res) => {
                console.log('res :>> ', res);
                setRocket(res.data)
            })
            .catch((err) => {
                console.log('err :>> ', err);
                alert('Failed to fetch rocket details. Please try again later.')
            })
    }

    const sections = [
        {
            title: "Basic Info",
            content: (
                <>
                    <p>Type: {rocket?.type}</p>
                    <p>Active: {rocket?.active ? "Yes" : "No"}</p>
                    <p>Stages: {rocket?.stages}</p>
                    <p>Boosters: {rocket?.boosters}</p>
                    <p>First Flight: {rocket?.first_flight}</p>
                    <p>Country: {rocket?.country}</p>
                    <p>Company: {rocket?.company}</p>
                    <p>
                        Wikipedia:{" "}
                        <a href={rocket?.wikipedia} className="text-blue-600 underline">
                            Link
                        </a>
                    </p>
                </>
            ),
            extraClasses: "p-3 border rounded-xl bg-neutral-content",
        },
        {
            title: "Dimensions",
            content: (
                <>
                    <p>Height: {rocket?.height?.meters} m ({rocket?.height?.feet} ft)</p>
                    <p>Diameter: {rocket?.diameter?.meters} m ({rocket?.diameter?.feet} ft)</p>
                    <p>Mass: {rocket?.mass?.kg} kg ({rocket?.mass?.lb} lb)</p>
                </>
            ),
        },
        {
            title: "First Stage",
            content: (
                <>
                    <p>Engines: {rocket?.first_stage?.engines}</p>
                    <p>Thrust (Sea Level): {rocket?.first_stage?.thrust_sea_level?.kN} kN</p>
                    <p>Thrust (Vacuum): {rocket?.first_stage?.thrust_vacuum?.kN} kN</p>
                    <p>Fuel: {rocket?.first_stage?.fuel_amount_tons} tons</p>
                    <p>Burn Time: {rocket?.first_stage?.burn_time_sec} sec</p>
                    <p>Reusable: {rocket?.first_stage?.reusable ? "Yes" : "No"}</p>
                </>
            ),
        },
        {
            title: "Second Stage",
            content: (
                <>
                    <p>Engines: {rocket?.second_stage?.engines}</p>
                    <p>Thrust: {rocket?.second_stage?.thrust?.kN} kN</p>
                    <p>Fuel: {rocket?.second_stage?.fuel_amount_tons} tons</p>
                    <p>Burn Time: {rocket?.second_stage?.burn_time_sec} sec</p>
                    <p>Payload Option: {rocket?.second_stage?.payloads?.option_1}</p>
                    <p>
                        Fairing: {rocket?.second_stage?.payloads?.composite_fairing?.height?.meters} m ×{" "}
                        {rocket?.second_stage?.payloads?.composite_fairing?.diameter?.meters} m
                    </p>
                </>
            ),
        },
        {
            title: "Engines",
            content: (
                <>
                    <p>Type: {rocket?.engines?.type}</p>
                    <p>Version: {rocket?.engines?.version}</p>
                    <p>Layout: {rocket?.engines?.layout}</p>
                    <p>
                        ISP: {rocket?.engines?.isp?.sea_level} (Sea) /{" "}
                        {rocket?.engines?.isp?.vacuum} (Vacuum)
                    </p>
                    <p>Thrust-to-Weight: {rocket?.engines?.thrust_to_weight}</p>
                    <p>
                        Propellants: {rocket?.engines?.propellant_1} +{" "}
                        {rocket?.engines?.propellant_2}
                    </p>
                </>
            ),
        },
        {
            title: "Payload Capacities",
            content: (
                <ul>
                    {rocket?.payload_weights?.map((payload) => (
                        <li key={payload?.id}>
                            {payload?.name}: {payload?.kg} kg ({payload?.lb} lb)
                        </li>
                    ))}
                </ul>
            ),
        },
    ];

    return (
        <div className="py-6 px-1 sm:px-3 md:px-4 lg:px-6 ">
            <h1 className="mb-4 font-bold text-4xl text-center text-accent">{rocket?.name}</h1>
            <p className="mb-6 font-semibold text-lg text-cyan-600 dark:text-cyan-300 text-justify">{rocket?.description}</p>

            {/* Images */}
            <div className="flex justify-center items-center flex-wrap gap-4">
                {rocket?.flickr_images?.map((img, i) => (
                    <img key={i} src={img} alt={rocket?.name} className="w-full rounded-lg" />
                ))}
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections?.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 bg-gray-200 border rounded-2xl shadow-md hover:shadow- transition"
                    >
                        <h2 className="pb-2 mb-3 text-xl font-bold text-center border-b">
                            {item.title}
                        </h2>
                        <div className="text-gray-900 space-y-2">{item.content}</div>
                    </div>
                ))}
            </div>

        </div>

    )
}



{/* <div className="mb-6 p-3 border rounded-xl bg-neutral-content">
                    <h2 className="text-2xl font-semibold mb-2">Basic Info</h2>
                    <ul className="list-disc pl-6">
                        <li>Type: {rocket?.type}</li>
                        <li>Active: {rocket?.active ? "Yes" : "No"}</li>
                        <li>Stages: {rocket?.stages}</li>
                        <li>Boosters: {rocket?.boosters}</li>
                        <li>First Flight: {rocket?.first_flight}</li>
                        <li>Country: {rocket?.country}</li>
                        <li>Company: {rocket?.company}</li>
                        <li>
                            Wikipedia: <a href={rocket?.wikipedia} className="text-blue-600 underline">Link</a>
                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Dimensions</h2>
                    <p>Height: {rocket?.height?.meters} m ({rocket?.height?.feet} ft)</p>
                    <p>Diameter: {rocket?.diameter?.meters} m ({rocket?.diameter?.feet} ft)</p>
                    <p>Mass: {rocket?.mass?.kg} kg ({rocket?.mass?.lb} lb)</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">First Stage</h2>
                    <p>Engines: {rocket?.first_stage?.engines}</p>
                    <p>Thrust (Sea Level): {rocket?.first_stage?.thrust_sea_level?.kN} kN</p>
                    <p>Thrust (Vacuum): {rocket?.first_stage?.thrust_vacuum.kN} kN</p>
                    <p>Fuel: {rocket?.first_stage?.fuel_amount_tons} tons</p>
                    <p>Burn Time: {rocket?.first_stage?.burn_time_sec} sec</p>
                    <p>Reusable: {rocket?.first_stage?.reusable ? "Yes" : "No"}</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Second Stage</h2>
                    <p>Engines: {rocket?.second_stage?.engines}</p>
                    <p>Thrust: {rocket?.second_stage?.thrust?.kN} kN</p>
                    <p>Fuel: {rocket?.second_stage?.fuel_amount_tons} tons</p>
                    <p>Burn Time: {rocket?.second_stage?.burn_time_sec} sec</p>
                    <p>Payload Option: {rocket?.second_stage?.payloads?.option_1}</p>
                    <p>
                        Fairing: {rocket?.second_stage?.payloads?.composite_fairing?.height?.meters} m ×{" "}
                        {rocket?.second_stage?.payloads?.composite_fairing?.diameter?.meters} m
                    </p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Engines</h2>
                    <p>Type: {rocket?.engines?.type}</p>
                    <p>Version: {rocket?.engines?.version}</p>
                    <p>Layout: {rocket?.engines?.layout}</p>
                    <p>ISP: {rocket?.engines?.isp?.sea_level} (Sea) / {rocket?.engines?.isp?.vacuum} (Vacuum)</p>
                    <p>Thrust-to-Weight: {rocket?.engines?.thrust_to_weight}</p>
                    <p>Propellants: {rocket?.engines?.propellant_1} + {rocket?.engines?.propellant_2}</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Payload Capacities</h2>
                    <ul>
                        {rocket?.payload_weights?.map((payload) => (
                            <li key={payload?.id}>{payload?.name}: {payload?.kg} kg ({payload?.lb} lb)</li>
                        ))}
                    </ul>
                </div> */}