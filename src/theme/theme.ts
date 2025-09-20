import { createTheme } from "@mui/material/styles";
import { brand, gray, error, success, warning } from "./colorTokens";

const theme = createTheme({
  palette: {
    primary: {
      main: brand[500],
      light: brand[100],
      dark: brand[700],
    },
    secondary: {
      main: gray[500],
      light: gray[100],
      dark: gray[700],
    },
    error: {
      main: error[500],
      light: error[100],
      dark: error[700],
    },
    success: {
      main: success[500],
      light: success[100],
      dark: success[700],
    },
    warning: {
      main: warning[500],
      light: warning[100],
      dark: warning[700],
    },
    background: {
      default: gray[50],
      paper: gray[100],
    },
    text: {
      primary: gray[900],
      secondary: gray[600],
    },
    brand,
    gray,
    error,
    success,
    warning,
  },
});

export default theme;
