import React from 'react';
import {Link, useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="error-container">
            <h1>{error.status}</h1>
            <h2>Oops! Page {error.statusText}</h2>
            <p>{error?.error?.message}</p>
            <Link to="/" className="home-link">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;
