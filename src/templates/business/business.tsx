import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraBusinessCertificate, Address, isLocalAddress, isPartner, isWithdrawnPartner } from "../sample";
import { css } from "@emotion/core";
import signature from "../images/signature.png";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { Header } from "../core/headers";

// What's the date at the top right (marked as TODO)
// Should we also hide the section title if there is no data
// what about the style
// activities, at most 2 ?
// need cardinality of data ...
// need some explanation on address invalid and alt address, for instance should we hide or should we add the warning ?
// TODO handle invalid address in table, not done because not sure how to do it

const displayAddress = (address: Address) => {
  if (isLocalAddress(address)) {
    return (
      <>
        {address.houseNumber} {address.streetName}
        {address.floor && address.unit ? (
          <>
            <br />#{address.floor}-{address.unit}
          </>
        ) : null}
        {address.buildingName ? (
          <>
            <br />#{address.buildingName}
          </>
        ) : null}
        <br />
        SINGAPORE ({address.postalCode})
      </>
    );
  }
};

const rowHeight = "30px";
const style = css`
  padding: 1rem;
  & * {
    box-sizing: border-box;
  }
  & > div, & > p {
    margin-left: 5px;
    margin-right: 5px;
  }
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: separate;
    border-spacing: 5px 5px;
    word-break: break-all;
  }
  table th {
    background-color: #c0c0c0;
  }
  table tr {
    height: ${rowHeight};
    margin-bottom 10em;
  }
  table.representatives td, table.partners td, table.withdrawn-partners td {
    border: 1px solid #c0c0c0;
    padding-left: 0.4rem;
  }
  table.representatives th:nth-of-type(4), table.partners th:nth-of-type(4) {
    width: 30%;
  }
  table.partners th:nth-of-type(3) {
    width: 20%;
  }
  table.withdrawn-partners th:nth-of-type(4) {
    width: 25%;
  }
  table.withdrawn-partners th:nth-of-type(3) {
    width: 20%;
  }
  div.representatives, div.partners, div.withdrawn-partners {
    margin-top: 2rem;
  }
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

const nlToBr = (str: string) =>
  str.split("\n").map((element, index) =>
    index === 0 ? (
      element
    ) : (
      <React.Fragment key={index}>
        <br />
        {element}
      </React.Fragment>
    )
  );

export const Business: FunctionComponent<TemplateProps<AcraBusinessCertificate>> = ({ document }) => {
  const partners = document.partners.filter(isPartner);
  const withdrawnPartners = document.partners.filter(isWithdrawnPartner);
  return (
    <div css={style}>
      <Header
        type="Business"
        businessName={document.businessName}
        registrationNumber={document.registrationNumber}
        receiptDate={document.receiptDate}
      />
      <Section>The Following Are The Brief Particulars of :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>Name of business</td>
            <td className="ttu">{document.businessName}</td>
          </tr>
          <tr>
            <td>Former name(s) if any</td>
            <td className="ttu">{document.formerNames.join(", ")}</td>
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
            <td>Status of Business</td>
            <td>{document.businessStatus}</td>
          </tr>
          <tr>
            <td>Status Date</td>
            <td>{document.businessStatusDate}</td>
          </tr>
          <tr>
            <td>Renewal Date</td>
            <td>{document.businessRenewalDate}</td>
          </tr>
          <tr>
            <td>Expiry Date</td>
            <td>{document.businessExpiryDate}</td>
          </tr>
          <tr>
            <td>Renewal via GIRO</td>
            <td>{document.renewalByGiro}</td>
          </tr>
          <tr>
            <td>Constitution of Business</td>
            <td>{document.businessConstitution}</td>
          </tr>
          <tr>
            <td rowSpan={document.placeOfBusiness.invalid ? 2 : 1}>Principal Place of Business</td>
            <td>{displayAddress(document.placeOfBusiness)}</td>
          </tr>
          {document.placeOfBusiness.invalid ? (
            <tr>
              <td className="border">{document.placeOfBusiness.invalid}</td>
            </tr>
          ) : null}
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
      {document.representatives.length > 0 ? (
        <>
          <Section className="representatives">Particulars of Authorised Representative(s) :</Section>
          <table className="representatives">
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
              {document.representatives.map((representative, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{representative.name}</td>
                    <td className="ttu">{representative.id}</td>
                    <td className="ttu">{nlToBr(representative.nationality)}</td>
                    <td className="ttu">{displayAddress(representative.address)}</td>
                    <td className="ttu">{representative.addressSource}</td>
                    <td className="ttu">{representative.dateOfAppointment}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {partners.length > 0 ? (
        <>
          <Section className="partners">Existing Sole-Proprietor(s) / Partner(s) :</Section>
          <table className="partners">
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
                    <td className="ttu" rowSpan={2}>
                      {partner.name}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {partner.id}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {nlToBr(partner.nationality)}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {displayAddress(partner.address)}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {partner.addressSource}
                    </td>
                    <td className="ttu">{partner.dateOfEntry}</td>
                  </tr>
                  <tr>
                    <td className="ttu">{partner.position}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {withdrawnPartners.length > 0 ? (
        <>
          <Section className="withdrawn-partners">Withdrawn Partner(s) :</Section>
          <table className="withdrawn-partners">
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
                    <td className="ttu" rowSpan={2}>
                      {partner.name}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {partner.id}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {nlToBr(partner.nationality)}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {displayAddress(partner.address)}
                    </td>
                    <td className="ttu" rowSpan={2}>
                      {partner.addressSource}
                    </td>
                    <td className="ttu">{partner.dateOfEntry}</td>
                    <td className="ttu" rowSpan={2}>
                      {partner.dateOfWithdrawal}
                    </td>
                  </tr>
                  <tr>
                    <td className="ttu">{partner.position}</td>
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
      <p>
        <img src={signature} className="signature" />
      </p>
      <p>FOR REGISTRAR OF COMPANIES AND BUSINESS NAMES SINGAPORE</p>
      <div className="receipt">
        <div className="flex">
          <div>RECEIPT NO.</div>
          <div>: {document.receiptNumber}</div>
        </div>
        <div className="flex">
          <div>DATE</div>
          <div>: {document.receiptDate}</div>
        </div>
      </div>
    </div>
  );
};
