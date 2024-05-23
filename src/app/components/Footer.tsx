import React from 'react';

const Footer: React.FC = () => (
        <>
            <footer className="bg-darkblue shadow border-t-2 border-wvsuwhite w-screen">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
                    <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/WVSU_Main_Campus_Logo.svg/1200px-WVSU_Main_Campus_Logo.svg.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-wvsuwhite">West Visayas State University</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-wvsuwhite sm:mb-0 dark:text-gray-400">
                        <li><a href="#" className="hover:underline me-4 md:me-6">About</a></li>
                        <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline me-4 md:me-6">Licensing</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                    </div>
                    <hr className="my-6 border-wvsuwhite sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-wvsuwhite">
                    © 2024 <a href="#" className="hover:underline">WVSU</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </>
    )

export default Footer;