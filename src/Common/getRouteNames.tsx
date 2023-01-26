import { ListInterface } from "./interface";

export const getRouteNames = (data: any): ListInterface[] => {
  const list: ListInterface[] = [];

  if (data) {
    data.forEach((route: any) => {
      list.push({ label: route.attributes.long_name, value: route.id });
    });
  }
  return list;
};
