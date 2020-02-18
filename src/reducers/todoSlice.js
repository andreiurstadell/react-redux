import { createSlice } from "@reduxjs/toolkit";

const initialToDos = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialToDos,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      state = state.filter(item => {
        return item.id !== action.payload.id;
      });
    },
    update: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item !== undefined) {
        item = action.payload;
      }
    },
    toggle: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item !== undefined) {
        item.checked = !item.checked;
      }
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
