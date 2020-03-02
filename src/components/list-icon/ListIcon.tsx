import React, { FunctionComponent } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import moment from "moment";
import { ListIconProps } from "./list-icon.types";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    width: "35px",
    display: "grid",
    gridTemplateRows: "1fr 1.5fr"
  },
  date: {
    padding: "2px",
    borderRadius: "50%"
  },
  highlightedDate: {
    color: theme.palette.secondary.contrastText,
    background: theme.palette.secondary.light
  }
}));

export const ListIcon: FunctionComponent<ListIconProps> = props => {
  const { dateTime } = props;
  const classes = useStyles();

  const isHighlighted = moment(dateTime).isSame(moment(), "day");
  const dateClass = `${classes.date} ${
    isHighlighted ? classes.highlightedDate : null
  }`;

  return (
    <ListItemIcon>
      <div className={classes.root}>
        <Typography variant={"button"} display="block">
          {moment(dateTime).format("ddd")}
        </Typography>
        <Typography variant={"h6"} display="block" className={dateClass}>
          {moment(dateTime).format("D")}
        </Typography>
      </div>
    </ListItemIcon>
  );
};
