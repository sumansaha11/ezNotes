import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center text-center p-4">

            <nav className="w-full flex justify-between items-center p-2 text-blue-900 font-bold">
                <h1 className="text-2xl md:text-3xl">ezNotes</h1>
                <div className="space-x-2 md:space-x-4">
                    <button onClick={() => navigate("/signup")} className="border border-blue-900 px-3 md:px-4 py-1 rounded-full text-sm md:text-base cursor-pointer">Sign Up</button>
                    <button onClick={() => navigate("/login")} className="bg-blue-900 text-white px-3 md:px-4 py-1 rounded-full text-sm md:text-base cursor-pointer">Sign In</button>
                </div>
            </nav>

            <div className="relative flex flex-col items-center space-y-4 mt-40 md:mt-30 lg:mt-10 px-4 max-w-2xl">
                <img src="/images/stars.svg" alt="" className="absolute left-[-10px] top-[-20px] w-10 md:w-14" />
                <h2 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
                    Write your thoughts down as they come to you.
                </h2>
                <img src="/images/stars.svg" alt="" className="absolute right-[-10px] top-[140px] w-10 md:w-14" />
                <p className="text-blue-900 text-sm md:text-lg max-w-lg">
                    ezNotes is a simple-to-use free note-taking app.
                </p>
                <button  onClick={() => navigate("/dashboard")} className="bg-blue-900 text-white px-5 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-bold cursor-pointer">
                    Try ezNotes, it's FREE!
                </button>
            </div>

            <img className="absolute left-0 bottom-0 w-40 md:w-64" src="/images/human-1.svg" alt="" />
            <img className="absolute right-0 bottom-0 w-32 md:w-56" src="/images/human-2.svg" alt="" />

            <footer className="text-blue-900 mt-auto pb-4 text-sm md:text-base z-10">
                <p>&copy; 2025 ezNotes, Suman Saha</p>
            </footer>
        </div>
    )
};

export default LandingPage;