import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import {
  AcraPublicAccountingFirmCertificate,
  isPublicAccountingFirmPartner,
  isWithdrawnPublicAccountingFirmPartner
} from "../sample";
import { css } from "@emotion/core";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { Header } from "../core/headers";
import { globalStyle } from "../core/style";
import { Address } from "../core/address";
import { Signature } from "../core/signature";

const style = css`
  ${globalStyle}
  table.partners th:nth-of-type(5), table.partners th:nth-of-type(7) {
    width: 10%;
  }

  table.partners th:nth-of-type(6) {
    width: 7%;
  }
  table.partners th:nth-of-type(1),
  table.partners th:nth-of-type(3),
  table.partners th:nth-of-type(8) {
    width: 15%;
  }
  table.partners th:nth-of-type(4) {
    width: 20%;
  }
`;

// https://2gfl7hjefk.execute-api.ap-southeast-1.amazonaws.com/dev/status/A_RANDOM_HASH_HERE
// {"status":  2}
export const PublicAccountingFirm: FunctionComponent<TemplateProps<AcraPublicAccountingFirmCertificate>> = ({
  document,
  rawDocument
}) => {
  const partners = (document.partners || []).filter(isPublicAccountingFirmPartner);
  const withdrawnPartners = (document.partners || []).filter(isWithdrawnPublicAccountingFirmPartner);
  return (
    <div css={style}>
      <Header
        type="Public Accounting Firm"
        businessName={document.firmName}
        registrationNumber={document.registrationNumber}
        receiptDate={document.receiptDate}
        targetHash={rawDocument ? rawDocument.signature.targetHash : undefined}
      />
      <Section>The Following Are The Brief Particulars of :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>Name of Public Accounting Firm</td>
            <td className="ttu">{document.firmName}</td>
          </tr>
          <tr>
            <td>Former Name(s) if any</td>
            <td className="ttu">{(document.formerNames || []).join(", ")}</td>
          </tr>
          <tr>
            <td>Registration Number</td>
            <td>{document.registrationNumber}</td>
          </tr>
          <tr>
            <td>Registration Date</td>
            <td>{document.registrationDate}</td>
          </tr>
          <tr>
            <td>Commencement Date</td>
            <td>{document.commencementDate}</td>
          </tr>
          <tr>
            <td>Status of PAF</td>
            <td>{document.pafStatus}</td>
          </tr>
          <tr>
            <td>Status Date</td>
            <td>{document.pafStatusDate}</td>
          </tr>
          <tr>
            <td>Constitution of Public Accounting Firm</td>
            <td className="ttu">{document.constitution}</td>
          </tr>
          <tr>
            <td>Registered Principal Place of Business</td>
            <td className="ttu">
              <Address address={document.businessPlace} />
            </td>
          </tr>
          <tr>
            <td>Date of Change of Registered Principal Place of Business</td>
            <td>{document.changeOfNameDate}</td>
          </tr>
          <tr>
            <td>Date of Change of Name</td>
            <td>{document.changeOfAddressDate}</td>
          </tr>
        </tbody>
      </SimpleTable>
      <Section>Principal Activities :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>Activities (I)</td>
            <td className="ttu">{document.activities[0].name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td className="ttu">{document.activities[0].description}</td>
          </tr>
          <tr>
            <td>Activities (II)</td>
            <td className="ttu">{document.activities[1].name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td className="ttu">{document.activities[1].description}</td>
          </tr>
        </tbody>
      </SimpleTable>
      {partners.length > 0 ? (
        <>
          <Section className="mt4">PARTICULARS OF EXISTING SOLE-PROPRIETOR/PARTNER(S) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Address Source</th>
                <th>PA REGN NO</th>
                <th>ENTRY DATE (PARTNER)</th>
                <th>ENTRY DATE (Partner under section 18(3)(c)) of the Accountants Act</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{partner.name}</td>
                    <td className="ttu">{partner.id}</td>
                    <td className="ttu">{partner.nationality}</td>
                    <td className="ttu">
                      <Address address={partner.address} />
                    </td>
                    <td className="ttu">{partner.addressSource}</td>
                    <td className="ttu">{partner.regn}</td>
                    <td className="ttu">{partner.entryDate}</td>
                    <td className="ttu">{partner.entryDate2}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {withdrawnPartners.length > 0 ? (
        <>
          <Section className="mt4">PARTICULARS OF SOLE-PROPRIETOR/PARTNER(S) WITHDRAWN FROM PAF :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Address Source</th>
                <th>PA REGN NO</th>
                <th>ENTRY DATE (PARTNER)</th>
                <th>ENTRY DATE (Partner under section 18(3)(c)) of the Accountants Act</th>
              </tr>
              <tr>
                <td className="no-border" />
                <td className="no-border" />
                <td className="no-border" />
                <td className="no-border" />
                <td className="no-border" />
                <td className="no-border" />
                <th>RESIGN DATE</th>
                <th>RESIGN DATE</th>
              </tr>
            </thead>
            <tbody>
              {withdrawnPartners.map((partner, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{partner.name}</td>
                    <td className="ttu">{partner.id}</td>
                    <td className="ttu">{partner.nationality}</td>
                    <td className="ttu">
                      <Address address={partner.address} />
                    </td>
                    <td className="ttu">{partner.addressSource}</td>
                    <td className="ttu">{partner.regn}</td>
                    <td className="ttu">{partner.entryDate}</td>
                    <td className="ttu">{partner.entryDate2}</td>
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td>{partner.resignDate}</td>
                    <td>{partner.resignDate2}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      <Section>Abbreviation :</Section>
      <p>OSCARS - One Stop change of Address Reporting Service by Immigration & Checkpoint Authority.</p>
      <Section>Note :</Section>
      <div>
        <ul>
          <li>
            The information contained in this Business Profile is extracted from lodgements filed by this entity with
            ACRA.
          </li>
          <li>
            The list of officers for this entity is available for online authentication within 30 days from the date of
            purchase of this Business Profile. For more information, please visit{" "}
            <a href="https://www.acra.gov.sg">www.acra.gov.sg</a>.
          </li>
        </ul>
      </div>
      <Signature receiptNumber={document.receiptNumber} />
    </div>
  );
};
