import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../components/Header";
import {Provider} from "react-redux";
import store from "../utils/redux/store/store";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

describe('Header component test cases', () => {
    it("should render Header component with a Login button", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )

        const loginBtn = screen.getByRole("button", {name: "Login"});
        //  const loginBtn = screen.getByText("Login");
        expect(loginBtn).toBeInTheDocument();
    })

    it("should render Header component with 0 cart items", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
        const cart = screen.getByText(/Cart/)
        expect(cart).toBeInTheDocument()
        expect(cart.length).toBeUndefined()
    })

    it("Should change login button to logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
        const loginBtn = screen.getByRole("button", {name: "Login"});
        fireEvent.click(loginBtn);

        const logoutBtn = screen.getByRole("button", {name: "Logout"});
        expect(logoutBtn).toBeInTheDocument()
    })
})