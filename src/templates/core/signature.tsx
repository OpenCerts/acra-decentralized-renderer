import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

const style = css`
  .signature {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  .signature-name {
    margin-top: 5px;
    text-transform: uppercase;
  }
  .stamp {
    margin-left: 10px;
  }
  .receipt > div:first-of-type {
    width: 200px;
  }
`;
interface SignatureProps {
  receiptNumber: string;
  signature: string;
  signatureName: string;
  stamp: string;
}
export const Signature: FunctionComponent<SignatureProps> = ({ receiptNumber, signature, stamp, signatureName }) => (
  <div css={style}>
    <div className="">
      <span className="signature">
        <img src={signature} />
        <div className="signature-name">{signatureName}</div>
      </span>
      <img src={stamp} className="stamp" />
    </div>
    <p>ASST REGISTRAR OF COMPANIES AND BUSINESS NAMES</p>
    <p>ACCOUNTING AND CORPORATE REGULATORY AUTHORITY (ACRA)</p>
    <p>SINGAPORE</p>
    <div className="receipt flex">
      <div>RECEIPT NO.</div>
      <div>: {receiptNumber}</div>
    </div>
  </div>
);
