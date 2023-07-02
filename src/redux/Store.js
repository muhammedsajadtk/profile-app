import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileSlice";

const store = configureStore({
	reducer: {
		profile: profileReducer,
	},
});

export default store;
