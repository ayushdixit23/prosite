import { configureStore } from "@reduxjs/toolkit";
import prosite_data from "./reducer/prosite_data";

export const store = configureStore({
  reducer: {
    prosite_data: prosite_data,
  },
});
