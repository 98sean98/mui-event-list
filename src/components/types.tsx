export type MonthEvents = DayEvents[];

export type DayEvents = Event[];

export interface Event {
  dateTime: Date;
  description?: string;
  location?: string;
}

export interface RawEvent {
  dateTime: string;
}
