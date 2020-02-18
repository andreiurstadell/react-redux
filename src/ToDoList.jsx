import React from "react";
import { connect } from "react-redux";
import * as actions from "./features";
import TodoItem from "./features/todoItem/TodoItem";

class ToDoList extends React.Component {
  state = { content: "" };
  async componentDidMount() {
    this.props.getToDoCollection();
  }
  render() {
    let { updateToDo, addToDo, selectedToDoId, todos } = this.props;

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
        </div>
        {selectedToDoId === -1 && <div>'no item selected'</div>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  addToDo: actions.addToDo,
  updateToDo: actions.update,
  getToDoCollection: actions.getInitialState
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
