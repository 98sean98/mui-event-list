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

  return (
    <Paper className={classes.root}>
      <Typography className={classes.text} variant={"body1"}>
        {moment(event.dateTime).format()}
      </Typography>
    </Paper>
  );
};
