import React from "react";
import ToDoList from "./features/toDoList/ToDoList";

export class App extends React.Component {
  render() {
    return (
      <div>
        <ToDoList />
      </div>
    );
  }
}
