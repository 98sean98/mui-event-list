import { ComponentClass, FunctionComponent } from "react";
import { MonthEvents } from "../internal.types";
import { ListIconProps } from "../list-icon/list-icon.types";
import { MonthBlockProps } from "../month-block/month-block.types";
import { EventBlockProps } from "../grid-events/grid-events.types";

export type ListProps = {
  data: MonthEvents[];
  components?: Components;
};

export type Components = {
  listIcon?: ComponentClass<ListIconProps> | FunctionComponent<ListIconProps>;
  monthBlock?:
    | ComponentClass<MonthBlockProps>
    | FunctionComponent<MonthBlockProps>;
  eventBlock?:
    | ComponentClass<EventBlockProps>
    | FunctionComponent<EventBlockProps>;
};
