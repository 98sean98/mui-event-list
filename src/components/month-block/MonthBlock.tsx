import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import { MonthBlockDefaultProps, MonthBlockProps } from "./month-block.types";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1.2)
  }
}));

export const MonthBlock: FunctionComponent<MonthBlockProps> = props => {
  const { dateTime } = { ...MonthBlockDefaultProps, ...props };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={"h4"}>
        {moment(dateTime).format("MMMM YYYY")}
      </Typography>
    </div>
  );
};
