import React, { FunctionComponent, useState } from "react";
import { ObfuscatableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraCompanyCertificate } from "../sample";
import { css } from "@emotion/core";
import { Header } from "../core/headers";
import { globalStyle } from "../core/style";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { ObfuscatableAddress } from "../core/address";
import { Signature } from "../core/signature";
import { PrivacyBanner } from "../core/simplePrivacyFilter";

const style = css`
  ${globalStyle}
  table.representatives th:nth-of-type(1),
  table.shareholders th:nth-of-type(1) {
    width: 30%;
  }
  table.representatives th:nth-of-type(3) {
    width: 20%;
  }
  table.shareholders td.index {
    width: 10%;
  }
  table.shareholders td.bigger {
    width: 90%;
  }
  table.shareholders td {
    width: 20%;
  }
`;
export const Company: FunctionComponent<TemplateProps<AcraCompanyCertificate>> = ({
  document,
  rawDocument,
  handleObfuscation
}) => {
  const [editable, setEditable] = useState(false);
  const issuedCapitals = (document.capitals || []).filter(c => c.type === "issued");
  const paidUpCapitals = (document.capitals || []).filter(c => c.type === "paid-up");
  return (
    <div css={style}>
      <PrivacyBanner onToggleEditable={() => setEditable(!editable)} />
      <Header
        type="Company"
        businessName={document.companyName}
        registrationNumber={document.registrationNumber}
        receiptDate={document.receiptDate}
        targetHash={rawDocument ? rawDocument.signature.targetHash : undefined}
      />
      <Section>The Following Are The Brief Particulars of :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>Registration No.</td>
            <td>{document.registrationNumber}</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td className="ttu">{document.companyName} TBDDDD</td>
          </tr>
          <tr>
            <td>Former Name if any</td>
            <td className="ttu">{document.formerName}</td>
          </tr>
          <tr>
            <td>Incorporation Date</td>
            <td>{document.incorporationDate}</td>
          </tr>
          <tr>
            <td>Company Type</td>
            <td className="ttu">{document.companyType}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td className="ttu">{document.status}</td>
          </tr>
          <tr>
            <td>Company Type</td>
            <td>{document.statusDate}</td>
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
      {document.capitals && document.capitals.length > 0 ? <Section className="mt4">Capital :</Section> : null}
      {issuedCapitals.length > 0 ? (
        <>
          <table className="dunno">
            <thead>
              <tr>
                <th>
                  Issued Share Capital
                  <br />
                  (AMOUNT)
                </th>
                <th>Number of Shares *</th>
                <th>Currency</th>
                <th>Share Type</th>
              </tr>
            </thead>
            <tbody>
              {issuedCapitals.map((capital, index) => (
                <tr key={index}>
                  <td>{capital.issuerSharedCapital}</td>
                  <td>{capital.sharesNumber}</td>
                  <td className="ttu">{capital.currency}</td>
                  <td className="ttu">{capital.shareType}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb3">* Number of Shares includes number of Treasury Shares</div>
        </>
      ) : null}
      {paidUpCapitals.length > 0 ? (
        <>
          <table className="dunno">
            <thead>
              <tr>
                <th>
                  Paid-up Capital
                  <br />
                  (AMOUNT)
                </th>
                <th>Number of Shares *</th>
                <th>Currency</th>
                <th>Share Type</th>
              </tr>
            </thead>
            <tbody>
              {paidUpCapitals.map((capital, index) => (
                <tr key={index}>
                  <td>{capital.issuerSharedCapital}</td>
                  <td>{capital.sharesNumber}</td>
                  <td className="ttu">{capital.currency}</td>
                  <td className="ttu">{capital.shareType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.audits && document.audits.length > 0 ? (
        <>
          <Section className="mt4">Audit firms :</Section>
          <table className="dunno">
            <thead>
              <tr>
                <th>NAME</th>
              </tr>
            </thead>
            <tbody>
              {document.audits.map((audit, index) => (
                <tr key={index}>
                  <td className="ttu">{audit.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.charges && document.charges.length > 0 ? (
        <>
          <Section className="mt4">Charges :</Section>
          <table className="dunno">
            <thead>
              <tr>
                <th>Charge No.</th>
                <th>Date Registered</th>
                <th>Currency</th>
                <th>Amount Secured</th>
                <th>Chargee(s)</th>
              </tr>
            </thead>
            <tbody>
              {document.charges.map((charge, index) => (
                <tr key={index}>
                  <td>{charge.chargeNumber}</td>
                  <td>{charge.dateRegistered}</td>
                  <td className="ttu">{charge.currency}</td>
                  <td>{charge.amountSecured}</td>
                  <td>{charge.chargees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.representatives && document.representatives.length > 0 ? (
        <>
          <Section className="mt4">Officers/Authorised Representative(s) :</Section>
          <table className="dunno representatives">
            <thead>
              <tr>
                <th>Name</th>
                <th rowSpan={2}>ID</th>
                <th>Nationality</th>
                <th rowSpan={2}>Address Source</th>
                <th rowSpan={2}>Date of Appointment</th>
              </tr>
              <tr>
                <th>Address</th>
                <th>Position held</th>
              </tr>
            </thead>
            <tbody>
              {document.representatives.map((representative, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{representative.name}</td>
                    <td className="ttu" data-testid="representative-id">
                      <ObfuscatableValue
                        editable={editable}
                        value={representative.id}
                        onObfuscationRequested={() => handleObfuscation(`representatives[${index}].id`)}
                      />
                    </td>
                    <td className="ttu" data-testid="representative-nationality">
                      <ObfuscatableValue
                        editable={editable}
                        value={representative.nationality}
                        onObfuscationRequested={() => handleObfuscation(`representatives[${index}].nationality`)}
                      />
                    </td>
                    <td className="ttu">{representative.addressSource}</td>
                    <td className="ttu">{representative.appointmentDate}</td>
                  </tr>
                  <tr>
                    <td className="ttu" data-testid="representative-address">
                      <ObfuscatableAddress
                        editable={editable}
                        address={representative.address}
                        onObfuscationRequested={() => handleObfuscation(`representatives[${index}].address`)}
                      />
                    </td>
                    <td className="no-border" />
                    <td>{representative.positionHeld}</td>
                    <td className="no-border" />
                    <td className="no-border" />
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.shareholders && document.shareholders.length > 0 ? (
        <>
          <Section className="mt4">Shareholder(s) :</Section>
          <table className="dunno shareholders">
            <colgroup>
              <col style={{ width: "20px" }} />
              <col style={{ width: "30%" }} />
              <col style={{ width: "16%" }} />
              <col style={{ width: "22%" }} />
              <col style={{ width: "16%" }} />
              <col style={{ width: "16%" }} />
            </colgroup>
            <thead>
              <tr>
                <th colSpan={2}>Name</th>
                <th rowSpan={2}>ID</th>
                <th rowSpan={2}>Nationality/Place of incorporation/Origin</th>
                <th rowSpan={2}>Source of Address</th>
                <th rowSpan={2}>Address Changed</th>
              </tr>
              <tr>
                <th colSpan={2}>Address</th>
              </tr>
            </thead>
            <tbody>
              {document.shareholders.map((shareholder, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td className="ttu">{shareholder.name}</td>
                    <td className="ttu" data-testid="shareholder-id">
                      <ObfuscatableValue
                        editable={editable}
                        value={shareholder.id}
                        onObfuscationRequested={() => handleObfuscation(`shareholders[${index}].id`)}
                      />
                    </td>
                    <td className="ttu" data-testid="shareholder-nationality">
                      <ObfuscatableValue
                        editable={editable}
                        value={shareholder.nationality}
                        onObfuscationRequested={() => handleObfuscation(`shareholders[${index}].nationality`)}
                      />
                    </td>
                    <td className="ttu">{shareholder.addressSource}</td>
                    <td className="ttu">{shareholder.addressChanged}</td>
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <td className="ttu" data-testid="shareholder-address">
                      <ObfuscatableAddress
                        editable={editable}
                        address={shareholder.address}
                        onObfuscationRequested={() => handleObfuscation(`shareholders[${index}].address`)}
                      />
                    </td>
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                    <td className="no-border" />
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <th>ORDINARY(Number) </th>
                    <th colSpan={2}>Currency </th>
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <td className="ttu">{shareholder.ordinary}</td>
                    <td className="ttu" colSpan={2}>
                      {shareholder.currency}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      <Section>Abbreviation :</Section>
      <p>UL - Local Entity not registered with ACRA</p>
      <p>UF - Foreign Entity not registered with ACRA</p>
      <p>AR - Annual Return</p>
      <p>AGM - Annual General Meeting</p>
      <p>FS - Financial Statements</p>
      <p>FYE - Financial Year End</p>
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
