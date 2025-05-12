import ReactDOM from "react-dom/client";
import React from "react";
//Header Component
import "./Header.css"; // Custom styling

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🌟 Logo</div>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-icon">👤</div>
    </header>
  );
};

// const heading = <h1>Namaste react using JSX </h1>;

// const nestedHeader = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "Heading 1"),
//   React.createElement("h2", {}, "Heading 2"),
//   React.createElement("h3", {}, "Heading 3"),
// ]);

// const nestedHeaderJSX = (
//   <div className="title">
//     <h1 id="main-title" style={{ color: "blue" }}>
//       Heading 1
//     </h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );
//
// const TitleComponent = () => (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );

root.render(<Header />);
