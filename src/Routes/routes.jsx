import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Rockets from "../Pages/Rockets";
import Launches from "../Pages/Launches";
import Crew from "../Pages/Crew";
import Launchpads from "../Pages/Launchpads";
import Ships from "../Pages/Ships";
import RocketDetails from "../Pages/RocketDetails";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout />,
        children: [
            {
                path: '/', 
                element: <Home />
            }, 
            {
                path: '/rockets',
                element: <Rockets />
            }, 
            {
                path: '/rockets/:id',
                element: <RocketDetails />
            }, 
            {
                path: '/launches',
                element: <Launches />
            }, 
            {
                path: '/crew',
                element: <Crew />
            },
            {
                path: '/launchpads',
                element: <Launchpads />
            }, 
            {
                path: '/ships',
                element: <Ships />
            }
        ]
    }
])

export default router