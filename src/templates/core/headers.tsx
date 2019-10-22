import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

const style = css`
  .disclaimer {
    margin-bottom: 1rem;
  }
  .profile {
    font-size: 1.1rem;
  }
`;
interface HeaderProps {
  type: string;
  businessName: string;
  registrationNumber: string;
  receiptDate: string;
}
export const Header: FunctionComponent<HeaderProps> = ({ type, businessName, registrationNumber, receiptDate }) => (
  <div css={style}>
    <div className="ttu b disclaimer">
      Whilst every endeavor is made to ensure that information provided is updated and correct. the authority disclaims
      any liability for any damage or loss that may be caused as a result of any error or omission
    </div>
    <div
      className="b flex justify-between"
      css={css`
        margin-bottom: 1rem;
      `}
    >
      <div className="profile">
        Business Profile ({type}) of {businessName} ({registrationNumber})
      </div>
      <div>Date: {receiptDate}</div>
    </div>
  </div>
);
