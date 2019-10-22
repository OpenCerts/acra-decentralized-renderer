import React, { FunctionComponent } from "react";
import signature from "../images/signature.png";
import { css } from "@emotion/core";

const style = css`
  .signature {
    margin-top: 2rem;
    margin-left: 50px;
    height: 120px;
  }
  .receipt > div > div:first-of-type {
    width: 200px;
  }
  .receipt > div {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;
interface SignatureProps {
  receiptNumber: string;
  receiptDate: string;
}
export const Signature: FunctionComponent<SignatureProps> = ({receiptDate, receiptNumber}) => (
  <div css={style}>
    <p>
      <img src={signature} className="signature" />
    </p>
    <p>FOR REGISTRAR OF COMPANIES AND BUSINESS NAMES SINGAPORE</p>
    <div className="receipt">
      <div className="flex">
        <div>RECEIPT NO.</div>
        <div>: {receiptNumber}</div>
      </div>
      <div className="flex">
        <div>DATE</div>
        <div>: {receiptDate}</div>
      </div>
    </div>
  </div>
);
