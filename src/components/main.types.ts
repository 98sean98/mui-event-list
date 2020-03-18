import { event } from "./external.types";
import { Components } from "./list/list.types";

export type MainProps = {
  data: event[];
  components?: Components;
};
