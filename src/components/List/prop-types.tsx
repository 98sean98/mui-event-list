import { DayEvents, MonthEvents, Event } from "../types";

export interface ListProps {
  data: MonthEvents[];
}

export interface MonthBlockProps {
  dateTime?: Date;
}

export const MonthBlockDefaultProps = {
  dateTime: new Date()
};

export interface ListIconProps {
  dateTime: Date;
}

export interface GridEventsProps {
  events: DayEvents;
}

export interface EventBlockProps {
  event: Event;
}
