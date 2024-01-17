import { configureStore } from "@reduxjs/toolkit";
import FormDataSlice from "../Reducer/FormSlice";

export const store = configureStore({
  reducer: {
    FormData: FormDataSlice,
  },
});
