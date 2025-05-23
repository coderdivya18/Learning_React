import ReactDOM from "react-dom/client";
import React, {lazy, Suspense} from "react";
import Header from "./components/Header";
import "../index.css";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerRestaurantCard from "./components/ShimmerRestaurantCard";
// import Grocery from "./components/Grocery";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"))

//App Component
const App = () => {


    return (
        <div className="app-container">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<ShimmerRestaurantCard/>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <ErrorPage/>
    },

]);
root.render(<RouterProvider router={appRouter}><App/></RouterProvider>);
