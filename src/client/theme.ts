import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a138c',
      contrastText: '#ffffff',
      light: '#7c42bd',
      dark: '#12005e',
    },
    secondary: {
      main: '#ff6f00',
      contrastText: '#000000',
      light: '#ffa040',
      dark: '#c43e00',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
  },
});
