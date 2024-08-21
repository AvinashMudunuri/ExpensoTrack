import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#264653', // Dark Blue
    },
    secondary: {
      main: '#2A9D8F', // Teal
    },
    warning: {
      main: '#E9C46A', // Golden Yellow
    },
    error: {
      main: '#F4A261', // Coral
    },
    info: {
      main: '#E76F51', // Salmon
    },
    background: {
      default: '#264653',
      white: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
