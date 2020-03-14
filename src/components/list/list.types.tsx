import { ReactNode } from "react";
import { MonthEvents } from "../internal.types";

export type ListProps = {
  data: MonthEvents[];
  components?: Components;
};

export type Components = {
  listIcon?: (props: any) => ReactNode;
  monthBlock?: (props: any) => ReactNode;
  eventBlock?: (props: any) => ReactNode;
};
