import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import certificateLogo from "../images/certificate-logo.jpg";
import { CertificateSignature } from "../core/signature";
import { globalCertificateStyle } from "../core/style";
import { AcraCompanyCertificate } from "../samples";
import { PrintWatermarkCertificate } from "../core/PrintWatermark";

const style = css`
  ${globalCertificateStyle}
`;
export const CompanyCertificate: FunctionComponent<TemplateProps<AcraCompanyCertificate>> = ({ document }) => {
  return (
    <div css={style}>
      <PrintWatermarkCertificate />
      <div className="certificate">
        <div>
          <div className="logo-container">
            <img src={certificateLogo} alt="certificate logo" className="logo" />
          </div>
          <div className="title ttu">Certificate confirming incorporation of company</div>
          <div className="concerning">
            <div className="flex">
              <div>Company Name</div>
              <div>:&nbsp;</div>
              <div>
                <span className="ttu">{document.companyName}</span>{" "}
                {document.changeOfNameDate && <>(name change effective from {document.changeOfNameDate})</>}
              </div>
            </div>
            <div className="flex">
              <div>UEN</div>
              <div>:&nbsp;</div>
              <div>{document.uen}</div>
            </div>
          </div>
          <p>
            This is to confirm that the company was incorporated under the Companies Act, on and from{" "}
            <span className="b">{document.incorporationDate}</span> and that the company is a{" "}
            <span className="b ttu">{document.companyType}</span>.
          </p>
          {document.formerNames && document.formerNames.length > 0 && (
            <div>
              <p>The company was formerly known as:</p>
              <table>
                <tbody>
                  <tr>
                    <th>S/N</th>
                    <th>Company Name</th>
                    <th>Effective From</th>
                  </tr>
                  {document.formerNames.map(({ effectiveFrom, name }, index) => (
                    <tr key={index}>
                      <td className="tr">{index + 1}.</td>
                      <td className="ttu">{name}</td>
                      <td className="tr">{effectiveFrom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="note">
                (Note: Only the five (5) most recent former names are listed. Any change in company name effected before
                13 Jan 2003 will not be listed)
              </p>
            </div>
          )}
        </div>
        <div className="signature">
          <CertificateSignature
            receiptNumber={document.receiptNumber}
            receiptDate={document.receiptDate}
            signature={document.signature}
            signatureName={document.signatureName}
            stamp={document.stamp}
          />
        </div>
      </div>
    </div>
  );
};
