import React, { FunctionComponent } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import { ListIconProps } from "./list-icon.types";

export const ListIcon: FunctionComponent<ListIconProps> = props => {
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
