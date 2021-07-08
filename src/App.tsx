import React, { useState } from "react";
import CodeEditor from "./Components/CodeEditor/CodeEditor";
import CodeOutput from "./Components/CodeOutput/CodeOutput";
import { Grid, Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import "./App.scss";
import DropDownComponent from "./Components/CommonComponents/DropDownComponent";
import { DropdownOptions } from "./Constants/DropDownOptions";
import SaveIcon from "@material-ui/icons/Save";
import CodeIcon from "@material-ui/icons/Code";
import ScreenRotationIcon from "@material-ui/icons/ScreenRotation";
import MoreIcon from "@material-ui/icons/MoreVert";
import { appStyles } from "./AppStyles";
import { downloadTxtFile } from "./Utils/utilMethods";

const App = () => {
  const classes = appStyles();
  const [content, setContent] = useState("/* Write your code here */");
  const [compiledCode, setCompiledCode] = useState("");
  const onCompileCode = () => {
    setCompiledCode(content);
  };
  const [editorTheme, setEditorTheme] = useState("solarized_light");
  const [editorFontSize, setEditorFontSize] = useState(14);
  const [isLandscape, setIsLandscape] = useState(true);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const fontSizeDropdown = (
    <DropDownComponent
      options={DropdownOptions.fontSizeOptions}
      value={editorFontSize}
      label={"Font size"}
      onChange={(value) => setEditorFontSize(value)}
    />
  );

  const editorThemeDropDown = (
    <DropDownComponent
      options={DropdownOptions.themeOptions}
      value={editorTheme}
      label={"Editor Theme"}
      onChange={(value) => setEditorTheme(value)}
    />
  );

  const renderMobileMenu = (
    <Menu
      className={classes.mobileMenu}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      keepMounted
      open={isMobileMenuOpen}
      onClose={() => setMobileMoreAnchorEl(null)}
    >
      <MenuItem>{editorThemeDropDown}</MenuItem>
      <MenuItem>{fontSizeDropdown}</MenuItem>
    </Menu>
  );

  return (
    <Grid className={"mainContainer"} container>
      <Grid xs={12} item className={"actionContainer"}>
        <Button
          className={"runButton"}
          startIcon={<CodeIcon />}
          onClick={onCompileCode}
        >
          Run
        </Button>
        <Button
          className={"saveButton"}
          startIcon={<SaveIcon />}
          onClick={() => downloadTxtFile(content)}
        >
          Save
        </Button>
        <IconButton
          className={`${classes.orientationIcon} landscapeIcon`}
          onClick={() => setIsLandscape((prevState) => !prevState)}
          title={"Orientation"}
        >
          <ScreenRotationIcon />
        </IconButton>

        <div className={classes.sectionDesktop}>
          {editorThemeDropDown}
          {fontSizeDropdown}
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            onClick={(event) => setMobileMoreAnchorEl(event.currentTarget)}
            style={{ color: "#fff" }}
          >
            <MoreIcon />
          </IconButton>
        </div>

        {renderMobileMenu}
      </Grid>

      <Grid className={"marginTop-20"} item xs={12} lg={isLandscape ? 6 : 12}>
        <CodeEditor
          theme={editorTheme}
          snippet={content}
          setSnippet={(value) => setContent(value)}
          fontSize={editorFontSize}
        />
      </Grid>
      <Grid className={"marginTop-20"} item xs={12} lg={isLandscape ? 6 : 12}>
        <CodeOutput snippet={compiledCode} />
      </Grid>
    </Grid>
  );
};

export default App;
