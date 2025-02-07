import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd7db', // Color principal
    },
    secondary: {
      main: '#f44336', // Color secundario  
    },
    third: {
      main: '#0064b4', 
    },
    fourth: {
      main: '#ffd5c0'  
    }, 
    fifth: {
      main: '#fff3f5', 
    },
  },
  typography: {
    primary: {fontFamily: 'Fira Sans'}, 
    h2: {fontFamily: 'Tangerine'},
    secondary: {fontFamily: 'Tangerine'},
    third: {fontFamily: 'Gowun Dodum'}
  }
});

export default theme;
