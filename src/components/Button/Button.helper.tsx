import { type ButtonVariants } from "./Button.types";
import ArrowWhite from "@assets/icons/utils/arrow-white.svg";
import ArrowBlack from "@assets/icons/utils/arrow-black.svg";

export const renderIcon = (variant: ButtonVariants) => {
  switch (variant) {
    case "white":
    case "secondary":
      return <ArrowBlack />;

    case "dark":
    case "light":
      return <ArrowWhite />;
  }
};
