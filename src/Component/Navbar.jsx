import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="text-red-500 dark:text-white p-4 flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/rockets">Rockets</Link>
            <Link to="/launches">Launches</Link>
            <Link to="/company">Company</Link>
            <Link to="/launchpads">Launchpads</Link>
        </nav>
    )
}

export default Navbar
