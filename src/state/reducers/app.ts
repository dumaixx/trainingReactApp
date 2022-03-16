import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type NullableType<T> = T | null;

interface IAppState {
  isAboutPageAvaliable: boolean;
}


const initialState: IAppState = {
  isAboutPageAvaliable: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAboutPageAccess: (state, action: PayloadAction<boolean>) => {
      state.isAboutPageAvaliable = action.payload;
    },
  },
});

export const { actions, reducer: appReducer } = appSlice;
