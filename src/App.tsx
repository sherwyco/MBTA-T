import "./styles.css";
import { ErrorAlert, SelectList } from "./Components";
import { useState, lazy, Suspense } from "react";
import { serviceList } from "./Common";
const StopComponent = lazy(() => import("./Components/Stop/Stop"));
const RouteComponent = lazy(() => import("./Components/Route/Route"));
const DirectionComponent = lazy(() =>
  import("./Components/Direction/Direction")
);
const PredictionComponent = lazy(() =>
  import("./Components/Prediction/Prediction")
);

export default function App() {
  const [service, updateService] = useState("");
  const [route, setRoute] = useState("");
  const [routeList, setRouteList] = useState([]);
  const [stopList, setStopList] = useState([]);
  const [stop, setStop] = useState("");
  const [directionList, setDirectionList] = useState([]);
  const [direction, setDirection] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleServiceChange = (event: any) => {
    updateService(event);
    setStop("");
    setDirection("");
  };

  return (
    <div className="app">
      <h2>
        Find the next departing train for a particular stop on the MBTA T
        network.
      </h2>
      {hasError && (
        <ErrorAlert
          message={
            "The service is currently experiencing issues. Refresh the page or try again later."
          }
        />
      )}

      {!hasError && (
        <div className="content">
          <SelectList
            label="Service Type"
            value={service}
            handleChange={handleServiceChange}
            list={serviceList}
          />
          <br />
          {service && (
            <Suspense fallback={<div>Loading...</div>}>
              <RouteComponent
                service={service}
                route={route}
                setRoute={setRoute}
                routeList={routeList}
                setRouteList={setRouteList}
                handleError={setHasError}
              />
            </Suspense>
          )}
          <br />

          {route && (
            <Suspense fallback={<div>Loading...</div>}>
              <StopComponent
                handleError={setHasError}
                route={route}
                stop={stop}
                setStop={setStop}
                stopList={stopList}
                setStopList={setStopList}
                setDirection={setDirection}
                setDirectionList={setDirectionList}
              />
            </Suspense>
          )}
          <br />
          {stop && (
            <Suspense fallback={<div>Loading...</div>}>
              <DirectionComponent
                direction={direction}
                directionList={directionList}
                setDirection={setDirection}
              />
            </Suspense>
          )}
          <br />
          {route && stop && direction && service && (
            <Suspense fallback={<div>Loading...</div>}>
              <PredictionComponent
                route={route}
                stop={stop}
                direction={direction}
                routeType={service}
                handleError={setHasError}
              />
            </Suspense>
          )}
        </div>
      )}
    </div>
  );
}
