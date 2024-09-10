import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

interface AuthState {
	token?: string;
}

const initialState: AuthState = {};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		clearToken(state) {
			state.token = undefined;
		},
	},
});

export const tokenSelector = (state: RootState) => state.auth.token;
export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
