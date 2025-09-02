import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout />,
        children: [
            {
                path: '/', 
                element: <Home />
            },
        ]
    }
])

export default router