import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

const style = css`
  font-weight: bold;
  background-color: #c0c0c0;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 0.4rem;
`;

export const Section: FunctionComponent<{ className?: string }> = ({ children, className = "" }) => (
  <div css={style} className={className}>
    {children}
  </div>
);
