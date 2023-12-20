import { Direction } from "@interfaces/scroll";

type Visibility = "visible" | "hidden";

export type Classes = {
  [key in Direction]: Visibility;
};
