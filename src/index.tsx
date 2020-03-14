import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Main from "./components/main";
import { data } from "./test-data.json";
import { Components } from "./components/list/list.types";

const MonthBlock = () => <>nothing</>;

const components: Components = { monthBlock: MonthBlock };

ReactDOM.render(
  <Main data={data} components={{ monthBlock: MonthBlock }} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
