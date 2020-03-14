import { Component, ReactNode } from "react";
import { DayEvents, Event } from "../internal.types";

export type GridEventsProps = {
  events: DayEvents;
  eventBlock?: (props: any) => ReactNode;
};

export type EventBlockProps = {
  event: Event;
};
