import React, { FunctionComponent } from "react";
import { MainProps } from "./main.types";
import { MonthEvents } from "./internal.types";
import { List } from "./list/List";
import { parseData } from "./data-wrapper";

const Main: FunctionComponent<MainProps> = props => {
  const { data: rawData, components } = props;

  const parsedData: MonthEvents[] = parseData(rawData);

  return <List data={parsedData} components={components} />;
};

export default Main;
