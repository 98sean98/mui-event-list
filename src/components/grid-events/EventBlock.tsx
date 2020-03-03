import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import { EventBlockProps } from "./grid-events.types";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "4px",
    padding: theme.spacing(0.5),
    background: theme.palette.secondary.main
  },
  text: {
    color: theme.palette.secondary.contrastText,
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  }
}));

export const EventBlock: FunctionComponent<EventBlockProps> = props => {
  const { event } = props;
  const classes = useStyles();

  const { dateTime, description, location } = event;
  const firstLine = `${description}${location ? " at " + location : ""}`;
  const secondLine = moment(dateTime).format("h:mm a");

  return (
    <Paper className={classes.root}>
      <div className={classes.text}>
        <Typography variant={"body1"}>{firstLine}</Typography>
        <Typography variant={"body1"}>{secondLine}</Typography>
      </div>
    </Paper>
  );
};
