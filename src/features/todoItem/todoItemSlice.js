import { createSlice } from "@reduxjs/toolkit";

const initialSelectedToDoId = -1;

const selectedToDoIdSlice = createSlice({
  name: "selectedToDoId",
  initialState: initialSelectedToDoId,
  reducers: {
    select: (state, action) => {
      return action.payload;
    }
  }
});

export const { select } = selectedToDoIdSlice.actions;
export default selectedToDoIdSlice.reducer;
