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
    primary: {fontFamily: 'Fira Sans'}, 
    secondary: {fontFamily: 'Tangerine'},
    third: {fontFamily: 'Gowun Dodum'},
    fourth: {fontFamily: 'Ephesis'},
    fifth: {fontFamily: 'Whisper'},
    sixth: {fontFamily: 'Great Vibes'},
    seventh: {fontFamily: 'Forum'},
    eighth: {fontFamily: 'Quicksand'},
    nineth: {fontFamily: 'Crimson Text'},
    tenth: {fontFamily: 'Lato'}
  }
});

export default theme;
