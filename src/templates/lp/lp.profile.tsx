import React, { FunctionComponent, useState } from "react";
import { ObfuscatableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraLpProfile, isLpPartner, isWithdrawnLpPartner } from "../samples";
import { css } from "@emotion/core";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { Header } from "../core/headers";
import { globalStyle } from "../core/style";
import { Address, ObfuscatableAddress } from "../core/address";
import { Signature } from "../core/signature";
import { PrivacyBanner } from "../core/privacyBanner";
import { PrintWatermarkBusinessProfile } from "../core/PrintWatermark";

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

export const LpProfile: FunctionComponent<TemplateProps<AcraLpProfile>> = ({
  document,
  rawDocument,
  handleObfuscation
}) => {
  const [editable, setEditable] = useState(false);
  const partners = (document.partners || []).filter(isLpPartner);
  const withdrawnPartners = (document.partners || []).filter(isWithdrawnLpPartner);
  return (
    <div css={style}>
      <PrintWatermarkBusinessProfile />
      <PrivacyBanner onToggleEditable={() => setEditable(!editable)} />
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
          {document.lpOfficeAddress?.invalidReason && (
            <tr>
              <td />
              <td className="ttu">{document.lpOfficeAddress.invalidReason}</td>
            </tr>
          )}
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
            <td className="ttu">{document.activities[0] && document.activities[0].name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td className="ttu">{document.activities[0] && document.activities[0].description}</td>
          </tr>
          <tr>
            <td>Activities (II)</td>
            <td className="ttu">{document.activities[1] && document.activities[1].name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td className="ttu">{document.activities[1] && document.activities[1].description}</td>
          </tr>
        </tbody>
      </SimpleTable>
      {document.managers && document.managers.length > 0 ? (
        <>
          <Section className="mt4">Particulars of Manager(s) :</Section>
          <table className="complex-table managers">
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
                    <td className="ttu nationality">{manager.nationality}</td>
                    <td className="ttu">
                      <Address address={manager.address} />
                    </td>
                    <td className="ttu">{manager.addressSource}</td>
                    <td className="ttu">{manager.appointmentDate}</td>
                  </tr>
                  {manager.address?.invalidReason && (
                    <tr>
                      <td className="no-border" />
                      <td className="no-border" />
                      <td className="no-border" />
                      <td>{manager.address.invalidReason}</td>
                      <td className="no-border" />
                      <td className="no-border" />
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {partners.length > 0 ? (
        <>
          <Section className="mt4">Existing Partner(s) :</Section>
          <table className="complex-table partners">
            <thead>
              <tr>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>ID</th>
                <th rowSpan={2}>
                  Nationality/Place of <br />
                  Incorporation/Origin
                </th>
                <th rowSpan={2}>Address</th>
                <th rowSpan={2}>Address Source</th>
                <th>Date of Entry</th>
              </tr>
              <tr>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {document.partners &&
                document.partners.map((partner, index) => (
                  <React.Fragment key={index}>
                    {isLpPartner(partner) ? (
                      <>
                        <tr>
                          <td className="ttu">{partner.name}</td>
                          <td className="ttu" data-testid="partner-id">
                            <ObfuscatableValue
                              editable={editable}
                              value={partner.id}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].id`)}
                            />
                          </td>
                          <td className="ttu nationality" data-testid="partner-nationality">
                            <ObfuscatableValue
                              editable={editable}
                              value={partner.nationality}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].nationality`)}
                            />
                          </td>
                          <td className="ttu" rowSpan={2} data-testid="partner-address">
                            <ObfuscatableAddress
                              editable={editable}
                              address={partner.address}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].address`)}
                            />
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
                        {partner.address?.invalidReason && (
                          <tr>
                            <td className="no-border" />
                            <td className="no-border" />
                            <td className="no-border" />
                            <td>{partner.address.invalidReason}</td>
                            <td className="no-border" />
                            <td className="no-border" />
                          </tr>
                        )}
                      </>
                    ) : null}
                  </React.Fragment>
                ))}
            </tbody>
          </table>
        </>
      ) : null}
      {withdrawnPartners.length > 0 ? (
        <>
          <Section className="mt4">Withdrawn Partner(s) :</Section>
          <table className="complex-table partners">
            <thead>
              <tr>
                <th rowSpan={2}>Name</th>
                <th rowSpan={2}>ID</th>
                <th rowSpan={2}>
                  Nationality/Place of <br />
                  Incorporation/Origin
                </th>
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
              {document.partners &&
                document.partners.map((partner, index) => (
                  <React.Fragment key={index}>
                    {isWithdrawnLpPartner(partner) ? (
                      <>
                        <tr>
                          <td className="ttu">{partner.name}</td>
                          <td className="ttu" data-testid="withdrawn-partner-id">
                            <ObfuscatableValue
                              editable={editable}
                              value={partner.id}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].id`)}
                            />
                          </td>
                          <td className="ttu nationality" data-testid="withdrawn-partner-nationality">
                            <ObfuscatableValue
                              editable={editable}
                              value={partner.nationality}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].nationality`)}
                            />
                          </td>
                          <td className="ttu" rowSpan={2} data-testid="withdrawn-partner-address">
                            <ObfuscatableAddress
                              editable={editable}
                              address={partner.address}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].address`)}
                            />
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
                        {partner.address?.invalidReason && (
                          <tr>
                            <td className="no-border" />
                            <td className="no-border" />
                            <td className="no-border" />
                            <td>{partner.address.invalidReason}</td>
                            <td className="no-border" />
                            <td className="no-border" />
                            <td className="no-border" />
                          </tr>
                        )}
                      </>
                    ) : null}
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
            purchase of this Business Profile. Please scan the QR code available on the last page of this profile to
            access the authentication page. For more information, please visit{" "}
            <a href="https://www.acra.gov.sg" target="_blank" rel="noopener noreferrer">
              www.acra.gov.sg
            </a>
            .
          </li>
        </ul>
      </div>
      <Signature
        receiptNumber={document.receiptNumber}
        signature={document.signature}
        stamp={document.stamp}
        signatureName={document.signatureName}
        authenticationNumber={document.authenticationNumber}
        qrCode={document.qrCode}
      />
    </div>
  );
};
