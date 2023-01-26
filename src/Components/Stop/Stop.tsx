import { useEffect } from "react";
import { FetchStops } from "../../Api";
import SelectList from "../SelectList/SelectList";
import { ListInterface } from "../../Common";
import { getStopNames } from "../../Common";

interface StopsInterface {
  handleError: Function;
  route: string;
  stopList: ListInterface[];
  stop: string;
  setStop: Function;
  setStopList: Function;
  setDirection: Function;
  setDirectionList: Function;
}

export default function Stop(props: StopsInterface) {
  const {
    handleError,
    route,
    stopList,
    stop,
    setStop,
    setStopList,
    setDirection,
    setDirectionList
  } = props;
  useEffect(() => {
    FetchStops(route)
      .then((res: any) => {
        setStop("");
        setDirection("");
        setDirectionList(res.included);
        setStopList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        handleError(true);
        console.log("error", err.response);
      });
  }, [
    handleError,
    route,
    setStopList,
    setDirectionList,
    setDirection,
    setStop
  ]);

  return (
    <>
      <SelectList
        value={stop}
        handleChange={setStop}
        list={getStopNames(stopList)}
        label="Stop"
      />
    </>
  );
}
