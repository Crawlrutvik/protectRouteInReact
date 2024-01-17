import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    name: "",
    email: "",
    msg: "",
  },
  register: [{}],
};

export const FormSlice = createSlice({
  name: "Form",
  initialState,
  reducers: {
    setForm: (state, action) => {
      console.log("action.payload: ", action.payload);
      state.data = action.payload;
    },
    setRegister: (state, action) => {
      state.register = action.payload;
    },
  },
});
export const { setForm, setRegister } = FormSlice.actions;
export default FormSlice.reducer;
