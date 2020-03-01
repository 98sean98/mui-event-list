import * as React from "react";
import { List } from "./list/List";
import { MonthEvents } from "./types";
import { FunctionComponent } from "react";

interface MainProps {
  data: MonthEvents[];
}

const Main: FunctionComponent<MainProps> = props => {
  const { data } = props;
  return <List data={data} />;
};

export default Main;
