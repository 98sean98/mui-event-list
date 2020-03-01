import moment from "moment";
import { data as rawData } from "./test-data.json";
import { MonthEvents, Event, DayEvents, RawEvent } from "./components/types";

const separateEventsByDay = (events: Event[]): DayEvents[] => {
  const eventsByDay: DayEvents[] = [];
  events.forEach(event => {
    if (
      eventsByDay.length === 0 ||
      moment(event.dateTime)
        .startOf("date")
        .format() !==
        moment(eventsByDay[eventsByDay.length - 1][0].dateTime)
          .startOf("date")
          .format()
    )
      eventsByDay.push([event]);
    else eventsByDay[eventsByDay.length - 1].push(event);
  });
  return eventsByDay;
};

const separateEventsByMonthAndDay = (
  eventsByDay: DayEvents[]
): MonthEvents[] => {
  const eventsByMonthAndDate: MonthEvents[] = [];
  eventsByDay.forEach(events => {
    if (
      eventsByMonthAndDate.length === 0 ||
      moment(events[0].dateTime)
        .startOf("month")
        .format() !==
        moment(
          eventsByMonthAndDate[eventsByMonthAndDate.length - 1][0][0].dateTime
        )
          .startOf("month")
          .format()
    )
      eventsByMonthAndDate.push([events]);
    else {
      const groupedEvents =
        eventsByMonthAndDate[eventsByMonthAndDate.length - 1];
      groupedEvents.push(events);
    }
  });
  return eventsByMonthAndDate;
};

const pruneData = (rawData: RawEvent[]): MonthEvents[] => {
  const events: Event[] = rawData.map(event => ({
    ...event,
    dateTime: new Date(event.dateTime)
  }));
  const eventsByDay: DayEvents[] = separateEventsByDay(events);
  return separateEventsByMonthAndDay(eventsByDay);
};

export const data: MonthEvents[] = pruneData(rawData);
