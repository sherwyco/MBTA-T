import axios from "axios";

const FetchRoutes = (serviceType: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api-v3.mbta.com/routes", {
        params: {
          "page[limit]": 50,
          "filter[type]": serviceType
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

export default FetchRoutes;
