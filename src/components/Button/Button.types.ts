import { ReactNode } from "react";

export type ButtonTypes = "internal" | "external";
export type ButtonVariants = "dark" | "light" | "white" | "secondary";

export type ButtonProps = {
  children: ReactNode;
  type: ButtonTypes;
  variant: ButtonVariants;
  to: string;
  withIcon?: boolean;
  fullWidth?: boolean;
  classes?: string;
};
