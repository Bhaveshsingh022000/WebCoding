import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const appStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        columnGap: 40,
      },
    },
    orientationIcon: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      marginLeft: "auto",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    mobileMenu: {
      display: "block",
      "& .MuiMenu-list": {
        background: "#337899",
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);
