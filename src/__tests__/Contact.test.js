import Contact from "../components/Contact";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"

describe("Contact us page Test Cases", () => {
    test("Contact us component should render without crashing", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument()
    })

    test("Submit button inside contact component", () => {
        render(<Contact/>);
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })

    test("Send Message text inside contact component", () => {
        render(<Contact/>);
        const message = screen.getByText("Message");
        expect(message).toBeInTheDocument()
    })

    test("Should load two input boxes", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole('textbox');
        console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(3)
    })
})
