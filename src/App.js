import React from "react";
import Todo from "./components/Todo";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import STYLE from "./components/Style";
import "./App.css";
const todoList = [
  {
    title: "Item 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.",
    status: "DONE",
  },
  {
    title: "Item 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.",
    status: "PENDING",
  },
  {
    title: "Item 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.",
    status: "IN PROGRESS",
  },
  {
    title: "Item 4",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.",
    status: "IN PROGRESS",
  },
  {
    title: "Item 5",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.",
    status: "IN PROGRESS",
  },
  {
    title: "Item 6",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio eum ullam quae officia repellendus autem reprehenderit perferendis vero error.",
    status: "CANCEL",
  },
];
function App() {
  return (
    <div className="App">
      <Header title="TO DO APP UI" />
      <div style={STYLE.wrapper}>
        {todoList.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </div>
      <Footer text="2024" />
    </div>
  );
}

export default App;
