import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

export const PrintWatermarkCertificate: FunctionComponent = () => (
  <div
    css={css`
      width: 0;
      height: 0;
      opacity: 0;
      display: none;
      position: absolute;
      background-image: url("/static/images/watermark-certificate.svg");
      background-repeat: repeat;

      @media print {
        width: 100%;
        height: 100%;
        opacity: 0.6;
        display: block;
      }
    `}
  />
);

export const PrintWatermarkBusinessProfile: FunctionComponent = () => (
  <div
    css={css`
      width: 0;
      height: 0;
      opacity: 0;
      display: none;
      position: absolute;
      background-image: url("/static/images/watermark-business-profile.svg");
      background-repeat: repeat;

      @media print {
        width: 100%;
        height: 100%;
        opacity: 0.6;
        display: block;
      }
    `}
  />
);
