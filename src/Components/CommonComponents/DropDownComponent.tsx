import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React from "react";
import { dropDownComponentStyles } from "./DropDownComponentStyles";

export type DropdownOption = {
  value: string | number;
  text: string | number;
  key: string | number;
};

type DropDownComponentProps = {
  options: DropdownOption[];
  label: string;
  value: string | number;
  onChange: (value: any) => void;
};

const DropDownComponent: React.FC<DropDownComponentProps> = (props) => {
  const classes = dropDownComponentStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.inputLable}>{props.label}</InputLabel>
      <Select
        className={classes.options}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      >
        {props.options.map((item) => (
          <MenuItem value={item.value} key={item.key}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropDownComponent;
