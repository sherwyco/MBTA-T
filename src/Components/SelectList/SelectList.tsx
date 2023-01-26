import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ListInterface } from "../../Common";

interface SelectInterface {
  value: string;
  handleChange: Function;
  label: string;
  list: ListInterface[];
}

export default function SelectList(props: SelectInterface) {
  const handleChange = (event: SelectChangeEvent) => {
    props.handleChange(event.target.value as string);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.value}
            label={props.label}
            onChange={handleChange}
          >
            {props.list.map((elem) => {
              return (
                <MenuItem key={elem.value} value={elem.value}>
                  {elem.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
