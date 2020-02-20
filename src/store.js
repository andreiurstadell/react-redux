import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";
import { combineReducers } from "redux";

import todoReducer from "./features/toDoList/toDoListSlice";
import selectReducer from "./features/todoItem/todoItemSlice";

const rootReducer = storage.reducer(
  combineReducers({
    todos: todoReducer,
    selectedToDoId: selectReducer
  })
);

const engine = createEngine("my-save-key");

const storageMiddleware = storage.createMiddleware(engine);

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), storageMiddleware]
});

export const storageLoader = storage.createLoader(engine);
storageLoader(store);

export default store;
