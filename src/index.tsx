import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
    fontSize: 16,
    h3: {
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      light: "#FAF3F6",
      main: "#7D1538",
      dark: "#3E0A1C",
    },
    secondary: {
      light: "#FDF3EB",
      main: "#F18E3C",
      dark: "#1C0D02",
    },
    error: {
      light: "#FEEAEC",
      main: "#FF3644",
      dark: "#9A000A",
    },
    success: {
      light: "#DEFFF6",
      main: "#00BA88",
      dark: "#005D44",
    },
    text: {
      primary: "#0E0E2C",
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
