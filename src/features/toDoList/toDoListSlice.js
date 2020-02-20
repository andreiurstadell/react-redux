import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../apis/api";
import _ from "lodash";

const initialToDos = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialToDos,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      _.remove(state, p => p.id === action.payload.id);
      console.log(action.payload);
    },
    update: (state, action) => {
      let itemIndex = _.findIndex(state, p => p.id === action.payload.id);
      state[itemIndex] = action.payload;
    },
    get: (state, action) => {
      return [...action.payload];
    }
  }
});

export const { add, remove, update, toggle } = todoSlice.actions;
const get = todoSlice.actions.get;
export const getInitialState = () => async (dispatch, getState) => {
  // let newState = await storageLoader(getState);
  // console.log("state : " + newState);
  // dispatch(get(newState));
};

export default todoSlice.reducer;

export const addToDo = content => async dispatch => {
  let newObj = { content, checked: false };
  let addToDo = await api.postToDo(newObj);
  console.log(addToDo);
  dispatch(add(addToDo.data));
};

export const updateToDo = todo => async dispatch => {
  let updatedToDo = await api.patchToDo(todo);
  dispatch(update(updatedToDo.data));
};

export const removeToDo = id => async dispatch => {
  await api.deleteToDo(id);
  dispatch(remove({ id }));
};
