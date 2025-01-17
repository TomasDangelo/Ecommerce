import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd7db', // Color principal
    },
    secondary: {
      main: '#f44336', // Color secundario
    },
  },
});

export default theme;
