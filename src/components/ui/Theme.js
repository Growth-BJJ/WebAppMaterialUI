import { createMuiTheme } from '@material-ui/core/styles';

// const arcBlue = "#5C0923";
const arcBlue = "#4e6876";
const arcOrange = "#e0d0a5";
// const arcOrange = "#FFFFFF";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
     estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
     }
  }
});