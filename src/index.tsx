import React from "react";
import ReactDOM from "react-dom";
import { LegacyFramedDocumentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";

ReactDOM.render(<LegacyFramedDocumentRenderer templateRegistry={registry} />, document.getElementById("root"));
