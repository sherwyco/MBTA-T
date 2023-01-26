import { ListInterface } from "./interface";

export const getRouteDirection = (data: any): ListInterface[] => {
  const list: ListInterface[] = [];

  if (data) {
    data.forEach((route: any) => {
      route.attributes.direction_names.forEach(
        (direction: string, idx: number) => {
          list.push({ label: direction, value: `${idx}` });
        }
      );
    });
  }
  return list;
};
