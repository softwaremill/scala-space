export type EventData = {
  id: number;
  coordinates: number[];
  title: string;
  date: string;
  description: string;
  link: string;
};

export type MapProps = {
  markers: EventData[];
};
