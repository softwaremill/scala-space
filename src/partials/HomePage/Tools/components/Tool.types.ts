type ToolLinks = {
  to: string;
  label: string;
};

export type ToolProps = {
  title: string;
  description: string;
  background: string;
  links: ToolLinks[];
};
