import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import certificateBackground from "../images/certificate-background.jpg";
import certificateLogo from "../images/certificate-logo.jpg";
import { AcraBusinessCertificate } from "../samples";
import { CertificateSignature } from "../core/signature";

const style = css`
  width: 100%;
  line-height: 30px;
  .certificate {
    margin: auto;
    width: 827px;
    height: 1169px;
    background-image: url('${certificateBackground}');
    padding: 40px 80px 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo {
    width: 300px;
  }
  .logo-container {
    text-align: center;
  }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .concerning {
    font-weight: bold;
    margin-top: 10px;
  }
  .concerning > div > div:first-of-type {
    width: 200px;
  }
  table {
    width: 100%;
    text-align: left;
  }
  table th:nth-of-type(1) {
    width: 30px;
  }
  table th:nth-of-type(3) {
    width: 110px;
  }
  table th:nth-of-type(2),
  table td:nth-of-type(2) {
    padding-left: 10px;
  }
  .note {
    line-height: 20px;
    font-size: 13px;
  }
  .signature {
    margin-bottom: 20px;
  }
`;
export const BusinessCertificate: FunctionComponent<TemplateProps<AcraBusinessCertificate>> = ({ document }) => {
  return (
    <div css={style}>
      <div className="certificate">
        <div>
          <div className="logo-container">
            <img src={certificateLogo} alt="certificate logo" className="logo" />
          </div>
          <div className="title ttu">Certificate confirming registration of business name</div>
          <div className="concerning">
            <div className="flex">
              <div>Business Name</div>
              <div>
                : <span className="ttu">{document.businessName}</span> (name change effective from{" "}
                {document.changeOfNameDate})
              </div>
            </div>
            <div className="flex">
              <div>UEN</div>
              <div>: {document.uen}</div>
            </div>
          </div>
          <p>
            This is to confirm that the business name was registered under the Business Names Registration Act, on and
            from <span className="b">{document.registrationDate}</span> and that the business name is registered until{" "}
            <span className="b">{document.businessExpiryDate}</span>.
          </p>
          {document.formerNames && document.formerNames.length > 0 && (
            <div>
              <p>The business name was formerly known as:</p>
              <table>
                <tbody>
                  <tr>
                    <th>S/N</th>
                    <th>Business Name</th>
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
                (Note: Only the five (5) most recent former names are listed. Any change in business name effected
                before 13 Jan 2003 will not be listed)
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
