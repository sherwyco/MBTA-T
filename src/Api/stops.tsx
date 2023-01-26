import axios from "axios";

const FetchStops = (route: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api-v3.mbta.com/stops", {
        params: {
          "page[limit]": 50,
          "filter[route]": route,
          include: "route"
        },
        headers: { "x-api-key": `${process.env.REACT_APP_API_KEY}` }
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default FetchStops;
