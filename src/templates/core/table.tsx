import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";
const style = css`
  td:nth-of-type(1),
  td:nth-of-type(1) {
    width: 30%;
  }
  td:nth-of-type(2),
  td:nth-of-type(2),
  td.border {
    width: 70%;
    border: 1px solid #c0c0c0;
    padding-left: 0.4rem;
  }
`;
export const SimpleTable: FunctionComponent = ({ children }) => <table css={style}>{children}</table>;
