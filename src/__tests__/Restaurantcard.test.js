import {render, screen} from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"


describe('Should render RestaurantCard with props', () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)")
    expect(name).toBeInTheDocument();
})