import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraLpCertificate, isLpPartner, isWithdrawnLpPartner } from "../sample";
import { css } from "@emotion/core";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { Header } from "../core/headers";
import { globalStyle } from "../core/style";
import { Address } from "../core/address";
import { Signature } from "../core/signature";

const style = css`
  ${globalStyle}
  input[type=checkbox] {
    transform: scale(2);
  }
  table.managers th:nth-of-type(4) {
    width: 25%;
  }
  table.managers th:nth-of-type(2) {
    width: 9%;
  }
  table.managers th:nth-of-type(5) {
    width: 12%;
  }

  table.partners th:nth-of-type(4) {
    width: 25%;
  }
  table.partners th:nth-of-type(5) {
    width: 12%;
  }
  table.partners th:nth-of-type(2) {
    width: 9%;
  }
`;

// https://2gfl7hjefk.execute-api.ap-southeast-1.amazonaws.com/dev/status/A_RANDOM_HASH_HERE
// {"status":  2}
export const Lp: FunctionComponent<TemplateProps<AcraLpCertificate>> = ({ document, rawDocument }) => {
  const partners = (document.partners || []).filter(isLpPartner);
  const withdrawnPartners = (document.partners || []).filter(isWithdrawnLpPartner);
  return (
    <div css={style}>
      <Header
        type="LP"
        businessName={document.lpName}
        registrationNumber={document.registrationNumber}
        receiptDate={document.receiptDate}
        targetHash={rawDocument ? rawDocument.signature.targetHash : undefined}
      />
      <Section>The Following Are The Brief Particulars of :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>Name of Limited Partnership</td>
            <td className="ttu">{document.lpName}</td>
          </tr>
          <tr>
            <td>Former Name(s) if any</td>
            <td className="ttu">{(document.formerNames || []).join(", ")}</td>
          </tr>
          <tr>
            <td>Date of Change of Name</td>
            <td>{document.changeOfNameDate}</td>
          </tr>
          <tr>
            <td>Registration No.</td>
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
            <td>Status of LP</td>
            <td>{document.lpStatus}</td>
          </tr>
          <tr>
            <td>Status Date</td>
            <td>{document.lpStatusDate}</td>
          </tr>
          <tr>
            <td>Renewal Date</td>
            <td>{document.renewalDate}</td>
          </tr>
          <tr>
            <td>Expiry Date</td>
            <td>{document.expiryDate}</td>
          </tr>
          <tr>
            <td>Renewal via GIRO</td>
            <td>{document.giroRenewal ? "YES" : "NO"}</td>
          </tr>
          <tr>
            <td>Compliance to Regulation 12 LP</td>
            <td className="no-border">
              <input type="checkbox" disabled checked={document.regulation12Lp} />
            </td>
          </tr>
          <tr>
            <td>Principal Place of LP</td>
            <td className="ttu">
              <Address address={document.lpOfficeAddress} />
            </td>
          </tr>
          <tr>
            <td>Date of Change of Address</td>
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
      {document.managers && document.managers.length > 0 ? (
        <>
          <Section className="mt4">Particulars of Manager(s) :</Section>
          <table className="dunno managers">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Address Source</th>
                <th>Date of Appointment</th>
              </tr>
            </thead>
            <tbody>
              {document.managers.map((manager, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{manager.name}</td>
                    <td className="ttu">{manager.id}</td>
                    <td className="ttu">{manager.nationality}</td>
                    <td className="ttu">
                      <Address address={manager.address} />
                    </td>
                    <td className="ttu">{manager.addressSource}</td>
                    <td className="ttu">{manager.appointmentDate}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {partners.length > 0 ? (
        <>
          <Section className="mt4">Existing Partner(s) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>ID</th>
                <th rowSpan={2}>Nationality/Place of incorporation/Origin</th>
                <th rowSpan={2}>Address</th>
                <th rowSpan={2}>Address Source</th>
                <th>Date of Entry</th>
              </tr>
              <tr>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{partner.name}</td>
                    <td className="ttu">{partner.id}</td>
                    <td className="ttu">{partner.nationality}</td>
                    <td className="ttu" rowSpan={2}>
                      <Address address={partner.address} />
                    </td>
                    <td className="ttu">{partner.addressSource}</td>
                    <td className="ttu">{partner.entryDate}</td>
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td>{partner.position}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {withdrawnPartners.length > 0 ? (
        <>
          <Section className="mt4">Withdrawn Partner(s) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>ID</th>
                <th rowSpan={2}>Nationality/Place of incorporation/Origin</th>
                <th rowSpan={2}>Address</th>
                <th rowSpan={2}>Address Source</th>
                <th>Date of Entry</th>
                <th rowSpan={2}>Date of Withdrawal</th>
              </tr>
              <tr>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {withdrawnPartners.map((partner, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{partner.name}</td>
                    <td className="ttu">{partner.id}</td>
                    <td className="ttu">{partner.nationality}</td>
                    <td className="ttu" rowSpan={2}>
                      <Address address={partner.address} />
                    </td>
                    <td className="ttu">{partner.addressSource}</td>
                    <td className="ttu">{partner.entryDate}</td>
                    <td className="ttu">{partner.withdrawalDate}</td>
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td>{partner.position}</td>
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
