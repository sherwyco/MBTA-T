import { ListInterface } from "./interface";

export const getStopNames = (data: any): ListInterface[] => {
  const list: ListInterface[] = [];

  if (data) {
    data.forEach((stop: any) => {
      list.push({ label: stop.attributes.name, value: stop.id });
    });
  }
  return list;
};
