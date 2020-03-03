import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./config/default-theme";
import { List } from "./list/List";
import { MonthEvents } from "./internal.types";
import { event } from "./external.types";
import { parseData } from "./data-wrapper";

interface MainProps {
  data: event[];
}

const Main: FunctionComponent<MainProps> = props => {
  const { data: rawData } = props;

  const parsedData: MonthEvents[] = parseData(rawData);

  return (
    <ThemeProvider theme={defaultTheme}>
      <List data={parsedData} />
    </ThemeProvider>
  );
};

export default Main;
