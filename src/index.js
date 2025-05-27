import ReactDOM from "react-dom/client";
import React, {lazy, Suspense, useEffect, useState} from "react";
import Header from "./components/Header";
import "../index.css";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerRestaurantCard from "./components/ShimmerRestaurantCard";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/redux/store/store";
import CartSummary from "./components/CartSummary";
// import Grocery from "./components/Grocery";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"))

//App Component
const App = () => {
    const [username, setUsername] = useState("");
    useEffect(() => {
        const data = {
            name: "Anjela"
        }
        setUsername(data.name)
    }, [])

    return (
        <Provider store={store}>
            <UserContext.Provider value={{loggedInUser: username, setUsername}}>
                <div className="app-container">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>


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
            },
            {
                path: "/cart",
                element: <CartSummary/>
            }
        ],
        errorElement: <ErrorPage/>
    },

]);
root.render(<RouterProvider router={appRouter}><App/></RouterProvider>);
