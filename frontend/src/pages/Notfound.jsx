import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-yellow-400 text-blue-900 text-center">
            <h1 className="text-5xl font-bold">404 - Page Not Found</h1>
            <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 px-6 py-3 bg-blue-900 text-white text-lg font-semibold rounded-md hover:bg-blue-800 transition-all">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;