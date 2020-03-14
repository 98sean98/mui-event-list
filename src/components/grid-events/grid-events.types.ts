import { ComponentClass, FunctionComponent } from "react";
import { DayEvents, Event } from "../internal.types";

export type GridEventsProps = {
  events: DayEvents;
  eventBlock?:
    | ComponentClass<EventBlockProps>
    | FunctionComponent<EventBlockProps>;
};

export type EventBlockProps = {
  event: Event;
};
