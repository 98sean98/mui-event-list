import React, { FunctionComponent } from "react";
import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ListProps } from "./list.types";
import { MonthBlock } from "../month-block/MonthBlock";
import { ListIcon } from "../list-icon/ListIcon";
import { GridEvents } from "../grid-events/GridEvents";

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "auto",
    padding: 0
  },
  groupedEvents: {
    marginBottom: theme.spacing(2)
  }
}));

export const List: FunctionComponent<ListProps> = (props: ListProps) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <MuiList className={classes.root} dense={true}>
      {data.map((monthEvents, monthIndex) => (
        <div key={monthIndex}>
          <MonthBlock dateTime={monthEvents[0][0].dateTime} />
          <div className={classes.groupedEvents}>
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
