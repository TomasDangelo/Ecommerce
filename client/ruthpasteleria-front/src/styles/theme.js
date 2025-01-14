import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800', // Color principal
    },
    secondary: {
      main: '#f44336', // Color secundario
    },
  },
});

export default theme;
