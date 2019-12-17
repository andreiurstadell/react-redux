import React from 'react';
import { connect } from 'react-redux'
import * as actions from './actions'

class ToDoList extends React.Component {
    state = { content: "" }
    render() {
        return (<React.Fragment>
            <ul>
                {this.props.todos.map((todo) => {
                    return <li onClick={() => { this.props.selectToDo(todo) }} key={todo.id}> {todo.content} <button onClick={() => this.props.removeToDo(todo.id)}>X</button> </li>
                })}
            </ul>
            <input type="text" onChange={(e) => { this.setState({ content: e.target.value }) }} />

            <button onClick={() => { this.props.addToDo(this.state.content) }}>Press me</button>
            <div>
                <button onClick={() => { 
                    this.props.updateToDo({...this.props.selectedToDo, content: this.state.content})
                     }}>Update Selected</button>
            </div>
            {!this.props.selectedToDo.content && <div>'no item selected'</div>}
        </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        selectedToDo: state.selectedToDo
    }
}

const mapDispatchToProps = {
    addToDo: actions.addToDo,
    removeToDo: actions.removeToDo,
    selectToDo: actions.selectToDo,
    updateToDo: actions.updateToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)