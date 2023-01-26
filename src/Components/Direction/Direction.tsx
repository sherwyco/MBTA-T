import SelectList from "../SelectList/SelectList";
import { getRouteDirection } from "../../Common";

interface DirectionInterface {
  directionList: any[];
  direction: string;
  setDirection: Function;
}

export default function Stop(props: DirectionInterface) {
  const { direction, setDirection, directionList } = props;

  return (
    <>
      <SelectList
        value={direction}
        handleChange={setDirection}
        list={getRouteDirection(directionList)}
        label="Direction"
      />
    </>
  );
}
