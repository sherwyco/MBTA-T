import { getRouteNames } from "./getRouteNames";
import { getStopNames } from "./getStopNames";
import { getRouteDirection } from "./getRouteDirection";

import { ListInterface } from "./interface";

const dummyRouteData = [
  {
    id: "orange",
    attributes: {
      long_name: "marmalade"
    }
  },
  {
    id: "yellow",
    attributes: {
      long_name: "lemonade"
    }
  }
];

const validRouteList: ListInterface[] = [
  {
    value: "orange",
    label: "marmalade"
  },
  {
    value: "yellow",
    label: "lemonade"
  }
];

const dummyStopData = [
  {
    id: "red",
    attributes: {
      name: "ranger"
    }
  },
  {
    id: "blue",
    attributes: {
      name: "sky"
    }
  }
];

const validStopList: ListInterface[] = [
  {
    value: "red",
    label: "ranger"
  },
  {
    value: "blue",
    label: "sky"
  }
];

const dummyDirectionData = [
  { attributes: { direction_names: ["west", "east"] } }
];

const validDirectionList: ListInterface[] = [
  {
    value: "0",
    label: "west"
  },
  {
    value: "1",
    label: "east"
  }
];

describe("test functions for returning valid list", () => {
  it("should output a valid route list with names", () => {
    expect(getRouteNames(dummyRouteData)).toStrictEqual(validRouteList);
  });

  it("should output a valid stop list with names", () => {
    expect(getStopNames(dummyStopData)).toStrictEqual(validStopList);
  });
  it("should output a valid direction list with names", () => {
    expect(getRouteDirection(dummyDirectionData)).toStrictEqual(
      validDirectionList
    );
  });
});
