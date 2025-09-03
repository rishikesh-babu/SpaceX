import React from 'react'
import { Link } from 'react-router-dom'
import Theme from './Theme'

export default function Navbar() {
    const screenWidth = window.innerWidth;
    console.log('screenWidth :>> ', screenWidth);
    return (
        <nav className="p-4">
            <div className='flex justify-end'>
                {screenWidth < 768 ? menuButton : null}
            </div>

            <div className={`text-right  flex justify-around ${screenWidth < 768 ? 'flex-col' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/rockets">Rockets</Link>
                <Link to="/launches">Launches</Link>
                <Link to="/crew">Crew</Link>
                <Link to="/launchpads">Launchpads</Link>
                <Link to="/ships">Ships</Link>
                <Theme />
            </div>
        </nav>
    )
}

const menuButton = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill={``}><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>