import axios from "axios";

const FetchPredictions = (serviceType: {
  route: string;
  stop: string;
  direction: string;
  routeType: string;
}) => {
  const { route, stop, direction, routeType } = serviceType;

  return new Promise((resolve, reject) => {
    axios
      .get("https://api-v3.mbta.com/predictions", {
        params: {
          "page[limit]": 20,
          "filter[direction_id]": direction,
          "filter[route_type]": routeType,
          "filter[stop]": stop,
          "filter[route]": route
        },
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` }
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export default FetchPredictions;
