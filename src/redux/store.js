import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from "./testimonialsSlice";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: {
    testimonials: testimonialsReducer,
    form: formReducer,
  },
});

export default store;
