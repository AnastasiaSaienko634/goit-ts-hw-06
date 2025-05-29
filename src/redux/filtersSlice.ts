import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  name: string;
};

const initialState: InitialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload.toLowerCase(); // ставимо нові значення з екшена для фільтра
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
