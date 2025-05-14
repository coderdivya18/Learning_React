import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import "../index.css";
import Body from "./components/Body"; // Custom styling

const root = ReactDOM.createRoot(document.getElementById("root"));

//Footer Component

//App Component
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

root.render(<App />);
