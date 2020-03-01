import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { EventBlockProps } from "./grid-events.types";

export const EventBlock: FunctionComponent<EventBlockProps> = props => {
  const { event } = props;

  return (
    <Typography variant={"body1"}>{moment(event.dateTime).format()}</Typography>
  );
};
