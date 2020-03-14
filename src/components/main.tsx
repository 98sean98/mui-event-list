import React, { FunctionComponent } from "react";
import { ThemeProvider } from "@material-ui/core";
import { defaultTheme } from "./config/default-theme";
import { List } from "./list/List";
import { MonthEvents } from "./internal.types";
import { event } from "./external.types";
import { Components } from "./list/list.types";
import { parseData } from "./data-wrapper";

type MainProps = {
  data: event[];
  components?: Components;
};

const Main: FunctionComponent<MainProps> = props => {
  const { data: rawData, components } = props;

  const parsedData: MonthEvents[] = parseData(rawData);

  return (
    <ThemeProvider theme={defaultTheme}>
      <List data={parsedData} components={components} />
    </ThemeProvider>
  );
};

export default Main;
