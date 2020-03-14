export type MonthEvents = DayEvents[];

export type DayEvents = Event[];

export type Event = {
  dateTime: Date;
  description?: string;
  location?: string;
};
