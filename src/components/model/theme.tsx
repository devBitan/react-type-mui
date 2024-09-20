import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        morado: Palette['primary'];
    }
    interface PaletteOptions {
        morado?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        morado: true;
    }
}

const theme = createTheme({
    breakpoints: {
        values:{
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    palette: {
        primary: {
        main: '#171E4A',
        },
        secondary: {
        main: '#dc004e',
        },
        error: {
        main: '#f44336',
        },
        background: {
        default: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Ubuntu, Arial, sans-serif',
      },
});

theme.typography.h1 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.2rem',
    },
}

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
}

theme.typography.h4 = {
    fontSize: '1.1rem',
    '@media (min-width:600px)': {
        fontSize: '1.3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.2rem',
    },
}


export default theme;
