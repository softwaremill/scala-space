export type TooltipProps = {
  id: number;
  openedEventId: number | null;
  setOpenedEventId: (id: number | null) => void;
  date: string;
  description: string;
  link: string;
  title: string;
};
