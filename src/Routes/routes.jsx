import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Rockets from "../Pages/Rockets";
import Launches from "../Pages/Launches";
import Crew from "../Pages/Crew";
import Launchpads from "../Pages/Launchpads";
import Ships from "../Pages/Ships";

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