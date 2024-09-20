import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'; // Importta el slice del reducer de autenticacion


//configuramos la tienda redux con el reducer de autenticacion
const store = configureStore({
    reducer: {
        auth: authReducer, // define 'auth' como la clave y 'authReducer como el reducer correspondiente'
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; // exportamos
