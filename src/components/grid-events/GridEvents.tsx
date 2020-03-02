import React, { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { EventBlock } from "./EventBlock";
import { GridEventsProps } from "./grid-events.types";

export const GridEvents: FunctionComponent<GridEventsProps> = props => {
  const { events } = props;
  return (
    <Grid container spacing={1}>
      {events.map((event, eventIndex) => (
        <Grid item xs={12} key={eventIndex}>
          <EventBlock event={event} />
        </Grid>
      ))}
    </Grid>
  );
};
