import React from "react";
import { connect } from "react-redux";
import { select } from "../../features/todoItem/todoItemSlice";
import { removeToDo } from "../../features/toDoList/toDoListSlice";

const TodoItem = props => {
  let { toggleToDo, selectToDo, removeToDo } = props;
  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => toggleToDo(props.id)}
      />
      <span
        onClick={() => {
          selectToDo(props.id);
        }}
      >
        {props.content}
      </span>
      <button onClick={() => removeToDo(props.id)}>X</button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    selectedToDoId: state.selectedToDoId
  };
};

const mapDispatchToProps = {
  // removeToDo: actions.remove,
  removeToDo: removeToDo,
  selectToDo: select,
  // toggleToDo: actions.toggle
  toggleToDo: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
