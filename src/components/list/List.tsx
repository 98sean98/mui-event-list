import React, { FunctionComponent } from "react";
import MuiList from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Components, ListProps } from "./list.types";
import { MonthBlock as DefaultMonthBlock } from "../month-block/MonthBlock";
import { ListIcon as DefaultListIcon } from "../list-icon/ListIcon";
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

export const List: FunctionComponent<ListProps> = props => {
  const { data, components } = props;
  const classes = useStyles();

  const { listIcon: ListIcon, monthBlock: MonthBlock, eventBlock } = (components
    ? components
    : {}) as Components;

  return (
    <MuiList className={classes.root} dense={true}>
      {data.map((monthEvents, monthIndex) => (
        <div key={monthIndex}>
          {MonthBlock ? (
            <MonthBlock dateTime={monthEvents[0][0].dateTime} />
          ) : (
            <DefaultMonthBlock dateTime={monthEvents[0][0].dateTime} />
          )}
          <div className={classes.groupedEvents}>
            {monthEvents.map((dayEvents, dayIndex) => (
              <ListItem
                alignItems={dayEvents.length > 1 ? "flex-start" : "center"}
                key={dayIndex}
              >
                {ListIcon ? (
                  <ListIcon dateTime={dayEvents[0].dateTime} />
                ) : (
                  <DefaultListIcon dateTime={dayEvents[0].dateTime} />
                )}
                <GridEvents events={dayEvents} eventBlock={eventBlock} />
              </ListItem>
            ))}
          </div>
        </div>
      ))}
    </MuiList>
  );
};
