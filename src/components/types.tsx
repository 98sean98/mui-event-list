export type MonthEvents = DayEvents[];

export type DayEvents = Event[];

export interface Event {
  dateTime: Date;
}

export interface RawEvent {
  dateTime: string;
}
