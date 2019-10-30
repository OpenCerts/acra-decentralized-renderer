import React, { FunctionComponent } from "react";
import signature from "../images/signature.png";
import { css } from "@emotion/core";

const style = css`
  .signature-pre-text {
    display: flex;
    align-items: center;
  }

  .signature {
    margin-left: 50px;
    height: 120px;
  }
  .receipt > div:first-of-type {
    width: 200px;
  }
`;
interface SignatureProps {
  receiptNumber: string;
}
export const Signature: FunctionComponent<SignatureProps> = ({ receiptNumber }) => (
  <div css={style}>
    <div className="flex">
      <div className="signature-pre-text">
        [ELECTRONIC
        <br /> SIGNATURE]
      </div>
      <img src={signature} className="signature" />
    </div>
    <div>[NAME]</div>
    <p>ASST REGISTRAR OF COMPANIES AND BUSINESS NAMES</p>
    <p>ACCOUNTING AND CORPORATE REGULATORY AUTHORITY (ACRA)</p>
    <p>SINGAPORE</p>
    <div className="receipt flex">
      <div>RECEIPT NO.</div>
      <div>: {receiptNumber}</div>
    </div>
  </div>
);
