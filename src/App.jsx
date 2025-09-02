// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function App() {
//     const [rockets, setRockets] = useState([])

//     useEffect(() => {
//         fetchRockets()
//     }, [])

//     function fetchRockets() {
//         axios({
//             method: 'GET',
//             url: 'https://api.spacexdata.com/v4/company',
//         })
//             .then((res) => {
//                 console.log('res.data :>> ', res.data);
//                 setRockets(res.data)
//             })
//             .catch((err) => {
//                 console.log('err :>> ', err);
//             })
//     }

//     return (
//         <div>
//             <h1 className="font-bold text-center text-3xl ">🚀 SpaceX Rockets</h1>
//             <div className="">
//                 {rockets.map((rocket) => (
//                     <div
//                         key={rocket.rocket_id}
//                         className=""
//                     >
//                         <h2 className="">{rocket.rocket_name}</h2>
//                         <img
//                             src={rocket.flickr_images[0]}
//                             alt={rocket.rocket_name}
//                             className=""
//                         />
//                         <p className="">{rocket.description}</p>
//                         <ul className="">
//                             <li>
//                                 <strong>Company:</strong> {rocket.company}
//                             </li>
//                             <li>
//                                 <strong>Country:</strong> {rocket.country}
//                             </li>
//                             <li>
//                                 <strong>Height:</strong> {rocket.height.meters} m
//                             </li>
//                             <li>
//                                 <strong>Mass:</strong> {rocket.mass.kg} kg
//                             </li>
//                             <li>
//                                 <strong>Cost per Launch:</strong> ${rocket.cost_per_launch}
//                             </li>
//                             <li>
//                                 <strong>Success Rate:</strong> {rocket.success_rate_pct}%
//                             </li>
//                         </ul>
//                         <a
//                             href={rocket.wikipedia}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className=""
//                         >
//                             Read More
//                         </a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default App



import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes'

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
