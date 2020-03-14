import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Main from "./components/main";
import { data } from "./test-data.json";
import { ThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./components/config/default-theme";

const Index: FunctionComponent = () => (
  <ThemeProvider theme={defaultTheme}>
    <Main data={data} />
  </ThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
