import React from "react";
import "./CodeOutput.scss";

type CodeOutputProps = {
  snippet: string;
};

const CodeOutput: React.FC<CodeOutputProps> = (props) => {
  return (
    <iframe
      className={"outputContainer"}
      srcDoc={props.snippet}
      title={"code snippet result"}
    ></iframe>
  );
};

export default CodeOutput;
