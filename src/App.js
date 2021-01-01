import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import SearchModal from "./pages/SearchModal";
import Home from "./pages/Home";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ffffff"
    },
    primary: {
      main: "#9932CC"
    }
  }
});

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
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
      </div>
    </>
  );
}
export default App;
