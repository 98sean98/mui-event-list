import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import {
  EventBlockProps,
  GridEventsProps,
  ListIconProps,
  ListProps,
  MonthBlockDefaultProps,
  MonthBlockProps
} from "./prop-types";

export const List: FunctionComponent<ListProps> = (props: ListProps) => {
  const { data } = props;

  return (
    <MuiList dense={true}>
      {data.map((monthEvents, monthIndex) => (
        <div key={monthIndex}>
          <MonthBlock dateTime={monthEvents[0][0].dateTime} />
          <div>
            {monthEvents.map((dayEvents, dayIndex) => (
              <ListItem
                alignItems={dayEvents.length > 2 ? "flex-start" : "center"}
                key={dayIndex}
              >
                <ListIcon dateTime={dayEvents[0].dateTime} />
                <GridEvents events={dayEvents} />
              </ListItem>
            ))}
          </div>
        </div>
      ))}
    </MuiList>
  );
};

const MonthBlock: FunctionComponent<MonthBlockProps> = props => {
  const { dateTime } = { ...MonthBlockDefaultProps, ...props };
  return (
    <div>
      <Typography variant={"h4"}>
        {moment(dateTime).format("MMMM YYYY")}
      </Typography>
    </div>
  );
};

const ListIcon: FunctionComponent<ListIconProps> = props => {
  const { dateTime } = props;
  return (
    <ListItemIcon>
      <div>
        <Typography variant={"button"} display="block">
          {moment(dateTime).format("ddd")}
        </Typography>
        <Typography variant={"h6"} display="block">
          {moment(dateTime).format("DD")}
        </Typography>
      </div>
    </ListItemIcon>
  );
};

const GridEvents: FunctionComponent<GridEventsProps> = props => {
  const { events } = props;
  return (
    <Grid container spacing={1}>
      {events.map((event, eventIndex) => (
        <Grid item xs={12} key={eventIndex}>
          <Paper>
            <EventBlock event={event} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

const EventBlock: FunctionComponent<EventBlockProps> = props => {
  const { event } = props;

  return (
    <Typography variant={"body1"}>{moment(event.dateTime).format()}</Typography>
  );
};
