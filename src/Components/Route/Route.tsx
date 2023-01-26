import { useEffect } from "react";
import { FetchRoutes } from "../../Api";
import SelectList from "../SelectList/SelectList";
import { ListInterface } from "../../Common";
import { getRouteNames } from "../../Common";

interface RouteInterface {
  handleError: Function;
  service: string;
  routeList: ListInterface[];
  setRouteList: Function;
  route: string;
  setRoute: Function;
}

export default function Route(props: RouteInterface) {
  const {
    service,
    route,
    setRoute,
    routeList,
    setRouteList,
    handleError
  } = props;

  useEffect(() => {
    FetchRoutes(service)
      .then((res: any) => {
        setRoute("");
        setRouteList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        handleError(true);
        console.log("error", err.response);
      });
  }, [service, setRoute, setRouteList, handleError]);
  return (
    <>
      <SelectList
        value={route}
        handleChange={setRoute}
        list={getRouteNames(routeList)}
        label="Route"
      />
    </>
  );
}
