import React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions'
import { getToDos } from './apis/api';

class ToDoList extends React.Component {
    state = { content: "" }
    async componentDidMount(){
        this.props.getToDoCollection();
        let response = await getToDos();
        console.log(response);
    }
    render() {
        let {toggleToDo, selectToDo, removeToDo, updateToDo, addToDo, selectedToDoId, todos} = this.props;
       
        return (<React.Fragment>
            <ul>
                {todos.map((todo) => {
                    return (

                        <li
                         key={todo.id}> 
                           <input type="checkbox" checked={todo.checked} 
                           onChange={() => toggleToDo(todo.id)}/>
                            <span onClick={() => { selectToDo(todo.id) }}>{todo.content}</span>
                            <button onClick={() => removeToDo(todo.id)}>X</button>
                        </li>
                    )

                })}
            </ul>
            <input type="text" onChange={(e) => { this.setState({ content: e.target.value }) }} />

            <button onClick={() => { addToDo(this.state.content) }}>Press me</button>
            <div>
                <button onClick={() => {
                    updateToDo({id: selectedToDoId, content: this.state.content})
                }}>Update Selected</button>
            </div>
            {selectedToDoId === -1 && <div>'no item selected'</div>}
        </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        selectedToDoId: state.selectedToDoId
    }
}

const mapDispatchToProps = {
    addToDo: actions.addToDo,
    removeToDo: actions.removeToDo,
    selectToDo: actions.selectToDo,
    updateToDo: actions.updateToDo,
    toggleToDo: actions.toggleToDo,
    getToDoCollection:actions.getToDoCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)