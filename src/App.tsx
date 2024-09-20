import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from '@mui/material';
import theme from './components/model/theme';
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router';

const App: React.FC = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

export default App;
