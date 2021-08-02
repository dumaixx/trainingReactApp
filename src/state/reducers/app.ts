import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NullableType<T> = T | null;

interface IAppState {
  page: NullableType<string>;
}


const initialState: IAppState = {
  page: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
  },
});

export const { actions, reducer: appReducer } = appSlice;
