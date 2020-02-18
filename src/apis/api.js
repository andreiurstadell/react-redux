import axios from 'axios';

export const getToDos = async ()  => {
    let response = await axios.get('http://localhost:3004/todos');
    return response;
}

export const postToDo = async (todo) => {
    let response = await axios.post('http://localhost:3004/todos', todo);
    return response;
}

export const deleteToDo = async (id) => {
    let response = await axios.delete(`http://localhost:3004/todos/${id}`);
    return response;
}

export const patchToDo = async (todo) => {
    let response = await axios.patch(`http://localhost:3004/todos/${todo.id}`, todo);
    return response;
}