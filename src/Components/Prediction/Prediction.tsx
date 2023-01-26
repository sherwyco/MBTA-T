import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";
import { FetchPredictions } from "../../Api";

interface PredictionInterface {
  route: string;
  stop: string;
  direction: string;
  routeType: string;
  handleError: Function;
}

export default function Route(props: PredictionInterface) {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    let cancel = false;

    FetchPredictions(props)
      .then((res: any) => {
        console.log("data", res.data);
        if (cancel) return; //prevent memory leak
        setPredictions(res.data);
      })
      .catch((err) => {
        props.handleError(true);
        console.log("error", err);
      });

    return () => {
      cancel = true;
    };
  }, [props, setPredictions]);
  return (
    <>
      {predictions?.length === 0 ? (
        <h1>No Data</h1>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Predictions </TableCell>
                <TableCell align="right">Arrival</TableCell>
                <TableCell align="right">Departure</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {predictions?.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">
                    {row.attributes.arrival_time
                      ? new Date(row.attributes.arrival_time).toLocaleString()
                      : "No data"}
                  </TableCell>
                  <TableCell align="right">
                    {row.attributes.departure_time
                      ? new Date(row.attributes.departure_time).toLocaleString()
                      : "No data"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
