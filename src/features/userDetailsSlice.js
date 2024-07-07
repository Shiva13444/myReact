import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
      username: "",
      city: "",
    },
  };

export const showSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.formData = action.payload;
     
    },
   
  },
});

console.log(showSlice,"showSlice");
export const { createPost } = showSlice.actions; 
export default showSlice.reducer;
