import { makeStyles } from "@material-ui/core";

export const dropDownComponentStyles = makeStyles(() => ({
    formControl: {
      minWidth: 120,
      "& .MuiSelect-root": {
        color: "#fff",
      },
      "& .Mui-focused":{
        color: "#fff"
      }
    },
    inputLable: {
      color: "#fff",
      "& .Mui-focused":{
        color: "#fff"
      }
    },
    options: {
      color: "#fff",
      "& .MuiSelect-icon": {
        color: "#fff",
      },
    },
  }));