import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	profileData: {
		id: 1,
		first_name: "John",
		last_name: "Doe",
		email: "john@email.com",
		image: require("./../assets/images/person.jpg"),
	},
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		updateProfile: (state, action) => {
			// state.profileData = action.payload;
			state.profileData = {
				...state.profileData,
				...action.payload,
			};
		},
	},
});

export const updateProfile = profileSlice.actions.updateProfile;

export default profileSlice.reducer;
