import React from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

function JsonViewer({ results }: any) {
  return <>{results !== null ? <JsonView src={results} editable={true} /> : ""}</>;
}

export default JsonViewer;
