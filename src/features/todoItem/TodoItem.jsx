import React from "react";
import { connect } from "react-redux";
import { select } from "../../features/todoItem/todoItemSlice";
import { removeToDo, updateToDo } from "../../features/toDoList/toDoListSlice";

const TodoItem = props => {
  let { updateToDo, selectToDo, removeToDo } = props;
  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => updateToDo({ id: props.id, checked: !props.checked })}
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
  removeToDo: removeToDo,
  selectToDo: select,
  updateToDo: updateToDo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
