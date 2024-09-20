import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginResponse {
    token: string;
    role: string;
}

interface LoginPayload {
    username: string;
    password: string;
}

export const login = createAsyncThunk<LoginResponse, LoginPayload>(
    'auth/login',
    async (payload: LoginPayload) => {
        const response = await axios.get('http://localhost:3000/usersAdmin', {
            params: { username: payload.username }
        });

        const user = response.data.find((user: any) => user.username === payload.username && user.password === payload.password);

        if (user) {
            return { token: 'fake-jwt-token', role: user.role }; // aca se le daria menejo al token del api
        } else {
            throw new Error('Nombre de usuario o contraseña incorrectos');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        role: '',
        status: '',
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.token = action.payload.token;
            state.role = action.payload.role;
        })
        .addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || null;
        });
    },
});

export default authSlice.reducer;
