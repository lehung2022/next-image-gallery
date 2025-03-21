// @/types/city.ts
export type CityData = {
  name: string;
  bio: string;
  history: string;
  events: { title: string; slug: string; summary: string }[];
  politics: string;
};

export type EventData = {
  title: string;
  detail: string;
};
