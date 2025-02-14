import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd7db', 
    },
    secondary: {
      main: '#f44336',   
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
    sixth: {
      main: '#F7EBED'
    }, 
    seventh: {
      main: '#8b96ff'
    }
  },
  typography: {
    fourth: {fontFamily: 'Ephesis'},
    seventh: {fontFamily: 'Forum'},
    eighth: {fontFamily: 'Quicksand'},

    tenth: {fontFamily: 'Lato'}
  }
});

export default theme;
