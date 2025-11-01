import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Rockets from "../Pages/Rockets";
import Launches from "../Pages/Launches";
import Crew from "../Pages/Crew";
import Launchpads from "../Pages/Launchpads";
import Ships from "../Pages/Ships";
import RocketDetails from "../Pages/RocketDetails";
import LaunchDetails from "../Pages/LaunchDetails";
import ErrorPage from "../Pages/ErrorPage";
import LaunchpadDetails from "../Pages/LaunchpadDetails";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout />,
        errorElement: <ErrorPage />,
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
                path: '/launches/:id',
                element: <LaunchDetails />
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
                path: '/launchpads/:id',
                element: <LaunchpadDetails />
            }, 
            {
                path: '/ships',
                element: <Ships />
            }
        ]
    }
])

export default router