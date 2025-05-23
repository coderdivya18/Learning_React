import React from 'react';
import {Link, useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4 font-manrope">
            <h1 className="text-6xl font-bold text-red-600 mb-2">
                {error.status || 404}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Oops! {error.statusText || "Something went wrong"}
            </h2>
            <p className="text-gray-600 mb-6">
                {error?.error?.message || "We can't seem to find the page you're looking for."}
            </p>
            <Link
                to="/"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
