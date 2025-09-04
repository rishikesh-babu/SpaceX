import React, { useState } from "react";
import { Link } from "react-router-dom";
import Theme from "./Theme";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menu = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Rockets',
            path: '/rockets'
        },
        {
            name: 'Launches',
            path: '/launches'
        },
        {
            name: 'Crew',
            path: '/crew'
        },
        {
            name: 'Launchpads',
            path: '/launchpads'
        },
        {
            name: 'Ships',
            path: '/ships'
        }
    ]

    return (
        <div className="fixed w-full z-50">
            <nav className="relative p-4 md:p-6 bg-neutral-content dark:bg-gray-900 shadow-md transition-colors duration-300 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link
                        to="/"
                        className="text-accent hover:text-primary transition duration-300"
                    >
                        🚀 SpaceX
                    </Link>
                </div>


                <div className="flex justify-center">
                    {/* Menu */}
                    <div onClick={() => setIsOpen(false)} className={`absolute top-full left-0 w-full bg-gray-300 dark:bg-gray-900 font-medium text-lg border-t rounded flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        {menu.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}

                                className="py-4 pl-5 w-full text-left text-info hover:text-secondary hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="py-4 pl-5 w-full text-left text-info hover:text-secondary hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors duration-200">
                            <Theme />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="relative focus:outline-none z-10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="32"
                            viewBox="0 -960 960 960"
                            width="32"
                            className={`absolute inset-0 w-8 h-8 m-auto fill-gray-900 dark:fill-white ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-all duration-300`}
                        >
                            <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="40px"
                            viewBox="0 -960 960 960"
                            width="40px"
                            className={`fill-gray-900 dark:fill-white ${!isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} transition-all duration-300`}
                        >
                            <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}
