import { createMuiTheme } from '@material-ui/core/styles';

// const arcBlue = "#5C0923";
const arcBlue = "#4e6876";
const arcOrange = "#e2d1a6";
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
     login: {
      fontFamily: "Goblin One",
      fontSize: "1rem",
      textTransform: "none",
      color: "black",
     },
     header1: {
      fontFamily: "Goblin One",
      fontWeight: "700",
      fontSize: "3.5em"
     },
     h2: {
       fontFamily: "Raleway",
       fontWeight: "700",
       fontSize: "2.5em"
     },
     h3: {
       fontFamily: "Raleway",
       fontSize: "2.5em",
     },
     h4: {
       fontFamily: "Raleway",
       fontSize: "1.75em"
     }
  }
});