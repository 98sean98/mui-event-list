import React, { FunctionComponent } from "react";
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

  return <List data={parsedData} components={components} />;
};

export default Main;
