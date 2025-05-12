// const heading = React.createElement("h1", { id: "heading" }, "Hi from React");
// console.log(heading);

//Nested elements creation using React

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", null, "Hello from React"),
      React.createElement("p", null, "I am paragraph"),
    ]),
  ],
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "Hello from React"),
    React.createElement("p", null, "I am paragraph"),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
