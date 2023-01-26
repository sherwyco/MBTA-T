import { cleanup, render, fireEvent, within } from "@testing-library/react";
import { ListInterface } from "../../Common";
import SelectList from "./SelectList";

afterEach(cleanup);

const validRouteList: ListInterface[] = [
  {
    value: "orange",
    label: "marmalade"
  },
  {
    value: "yellow",
    label: "lemonade"
  },
  {
    value: "red",
    label: "ranger"
  }
];

it("has all 3 options and correct labels in the list", () => {
  const { getByRole } = render(
    <SelectList
      value={""}
      list={validRouteList}
      label="test"
      handleChange={(event: any) => {}}
    />
  );

  fireEvent.mouseDown(getByRole("button"));
  const listbox = within(getByRole("listbox"));
  expect(listbox.getByText("marmalade")).toBeTruthy();
  expect(listbox.getByText("lemonade")).toBeTruthy();
  expect(listbox.getByText("ranger")).toBeTruthy();
  expect(getByRole("listbox").childNodes.length).toBe(validRouteList.length);
});
