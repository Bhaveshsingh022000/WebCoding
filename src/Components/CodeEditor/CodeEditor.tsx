import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";

import "./CodeEditor.scss";

type CodeEditorProps = {
  snippet: string;
  setSnippet: (value: string) => void;
  theme: string;
  fontSize: number;
};

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  return (
    <div className={"editorContainer"}>
      <AceEditor
        mode="html"
        theme={props.theme}
        name="content"
        onChange={props.setSnippet}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={props.snippet}
        fontSize={props.fontSize}
        editorProps={{ $blockScrolling: Infinity }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
};

export default CodeEditor;
