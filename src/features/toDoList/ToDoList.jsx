import React from "react";
import { connect } from "react-redux";
import * as actions from "..";
import TodoItem from "../todoItem/TodoItem";
import { getAllEntries } from "../../features/toDoList/toDoListSlice";

class ToDoList extends React.Component {
  state = { content: "" };
  render() {
    let { updateToDo, addToDo, selectedToDoId, todos, refresh } = this.props;

    return (
      <React.Fragment>
        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <TodoItem
                  id={todo.id}
                  content={todo.content}
                  checked={todo.checked}
                />
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          onChange={e => {
            this.setState({ content: e.target.value });
          }}
        />

        <button
          onClick={() => {
            addToDo(this.state.content);
          }}
        >
          Press me
        </button>
        <div>
          <button
            onClick={() => {
              updateToDo({ id: selectedToDoId, content: this.state.content });
            }}
          >
            Update Selected
          </button>
          <button
            onClick={() => {
              refresh();
            }}
          >
            {" "}
            Refresh{" "}
          </button>
        </div>
        {selectedToDoId === -1 && <div>'no item selected'</div>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    selectedToDoId: state.selectedToDoId
  };
};

const mapDispatchToProps = {
  addToDo: actions.addToDo,
  updateToDo: actions.updateToDo,
  refresh: getAllEntries
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
