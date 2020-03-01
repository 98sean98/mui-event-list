import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { MonthBlockDefaultProps, MonthBlockProps } from "./month-block.types";

export const MonthBlock: FunctionComponent<MonthBlockProps> = props => {
  const { dateTime } = { ...MonthBlockDefaultProps, ...props };
  return (
    <div>
      <Typography variant={"h4"}>
        {moment(dateTime).format("MMMM YYYY")}
      </Typography>
    </div>
  );
};
