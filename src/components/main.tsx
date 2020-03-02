import * as React from "react";
import { ThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./config/default-theme";
import { List } from "./list/List";
import { MonthEvents } from "./types";
import { FunctionComponent } from "react";

interface MainProps {
  data: MonthEvents[];
}

const Main: FunctionComponent<MainProps> = props => {
  const { data } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <List data={data} />
    </ThemeProvider>
  );
};

export default Main;
