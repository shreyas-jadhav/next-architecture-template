import { createTheme } from '@mui/material/styles';
import colors from './colors';


const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    }
  },
  
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat', sans-serif;
        }
      `,
    },
    
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        sx: {
          borderRadius: 8
        }
      },
      styleOverrides: {
        
        contained: {
          boxShadow: 'none'
        },
        outlined: {
          '&hover': {
            color: 'primary'
          }
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        sx: {
          marginTop: 0.5,
          marginBottom: 0.5,
          
        }
      },
    },
    
    MuiPaper: {
      styleOverrides: {
        
      }
    }
    
  },
})

export default theme;
