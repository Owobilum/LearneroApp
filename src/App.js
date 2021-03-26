import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import SearchModal from "./pages/SearchModal";
import Home from "./pages/Home";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffffff"
    },
    primary: {
      main: "#9932CC"
    }
  },
});

const useStyles = makeStyles((theme) => ({
  main:{
    // backgroundImage: 'linear-gradient(to right, #e78946, #d64a2b)',
  },
  root: {
    paddingRight: 1,
    paddingLeft: 1,
  }

}));

function App() {
  const classes = useStyles();
  return (
    // <>
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      {/* <div className={classes.main}> */}
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <SearchModal />
            </Route>
          </Switch>
        </ThemeProvider>
      {/* </div> */}
    </div>
    //  </> 
  );
}
export default App;
