import React, { FunctionComponent, useState } from "react";
import { ObfuscatableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraSharedCompanyProfile } from "../samples";
import { css } from "@emotion/core";
import { Header } from "../core/headers";
import { globalStyle } from "../core/style";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { Address, ObfuscatableAddress } from "../core/address";
import { Signature } from "../core/signature";
import { PrivacyBanner } from "../core/privacyBanner";
import { PrintWatermarkBusinessProfile } from "../core/PrintWatermark";

const style = css`
  ${globalStyle}
  table.representatives th:nth-of-type(1),
  table.shareholders th:nth-of-type(1) {
    width: 30%;
  }
  table.representatives th:nth-of-type(3) {
    width: 20%;
  }
  table.representatives table.representative-alt th {
    font-weight: normal;
  }
  table.representatives td.representative-alt-col {
    padding-right: -5px;
    padding-left: 8rem;
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
  table.name-address-table th:nth-of-type(1) {
    width: 30%;
  }
`;
export const SharedCompanyProfile: FunctionComponent<TemplateProps<AcraSharedCompanyProfile>> = ({
  document,
  rawDocument,
  handleObfuscation,
  children
}) => {
  const [editable, setEditable] = useState(false);
  const issuedCapitals = (document.capitals || []).filter(c => c.type === "issued");
  const paidUpCapitals = (document.capitals || []).filter(c => c.type === "paid-up");
  return (
    <div css={style}>
      <PrintWatermarkBusinessProfile />
      <PrivacyBanner onToggleEditable={() => setEditable(!editable)} />
      <Header
        type="Company"
        businessName={document.companyName}
        registrationNumber={document.registrationNumber}
        receiptDate={document.receiptDate}
        targetHash={rawDocument ? rawDocument.signature.targetHash : undefined}
      />
      {children}
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
      {document.capitals && document.capitals.length > 0 ? <Section className="mt4">Capital :</Section> : null}
      {issuedCapitals.length > 0 ? (
        <>
          <table className="complex-table">
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
          <table className="complex-table">
            <thead>
              <tr>
                <th>
                  Paid-up Capital
                  <br />
                  (AMOUNT)
                </th>
                <th>Number of Shares</th>
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
      {document.shares && document.shares.length > 0 ? (
        <>
          <div className="mt4">COMPANY HAS THE FOLLOWING ORDINARY SHARES HELD AS TREASURY SHARES</div>
          <table className="complex-table">
            <thead>
              <tr>
                <th>Number Of Shares</th>
                <th>Currency</th>
              </tr>
            </thead>
            <tbody>
              {document.shares.map((share, index) => (
                <tr key={index}>
                  <td className="ttu">{share.value}</td>
                  <td className="ttu">{share.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      <SimpleTable>
        <tbody>
          <tr>
            <td>Registered Office Address</td>
            <td className="ttu">
              <Address address={document.address} />
            </td>
          </tr>
          {document.address?.invalidReason && (
            <tr>
              <td />
              <td className="ttu">{document.address.invalidReason}</td>
            </tr>
          )}
          <tr>
            <td>Date of Address</td>
            <td className="ttu">{document.dateOfAddress}</td>
          </tr>
          <tr>
            <td>Date of Last AGM</td>
            <td className="ttu">{document.dateOfLastAGM}</td>
          </tr>
          <tr>
            <td>Date of Last AR</td>
            <td className="ttu">{document.dateOfLastAR}</td>
          </tr>
          <tr>
            <td>FYE As At Date of Last AR</td>
            <td className="ttu">{document.fye}</td>
          </tr>
        </tbody>
      </SimpleTable>
      {document.audits && document.audits.length > 0 ? (
        <>
          <Section className="mt4">Audit Firms :</Section>
          <table className="complex-table">
            <thead>
              <tr>
                <th className="tl" style={{ paddingLeft: "0.4rem" }}>
                  NAME
                </th>
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
          <table className="complex-table">
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
                  <td className="ttu">{charge.chargeNumber}</td>
                  <td>{charge.dateRegistered}</td>
                  <td className="ttu">{charge.currency}</td>
                  <td>{charge.amountSecured}</td>
                  <td className="ttu">{charge.chargees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.representatives && document.representatives.length > 0 ? (
        <>
          <Section className="mt4">Officers/Authorised Representative(s) :</Section>
          <table className="complex-table representatives">
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
                    <td className="ttu" data-testid="representative-name">
                      {representative.name}
                      <sup>{representative.dqFrom ? "DQ" : ""}</sup>
                    </td>
                    <td className="ttu" data-testid="representative-id">
                      <ObfuscatableValue
                        editable={editable}
                        value={representative.id}
                        onObfuscationRequested={() => handleObfuscation(`representatives[${index}].id`)}
                      />
                    </td>
                    <td className="ttu nationality" data-testid="representative-nationality">
                      <ObfuscatableValue
                        editable={editable}
                        value={representative.nationality}
                        onObfuscationRequested={() => handleObfuscation(`representatives[${index}].nationality`)}
                      />
                    </td>
                    <td className="ttu">{representative.addressSource}</td>
                    <td className="ttu">{representative.appointmentDate}</td>
                  </tr>
                  {representative.dqFrom ? (
                    <tr>
                      <td colSpan={5} className="no-border">
                        DQ - The above person has been disqualified from acting as a {representative.positionHeld} of
                        this company from {representative.dqFrom}.
                      </td>
                    </tr>
                  ) : null}
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
                  {representative.address?.invalidReason && (
                    <tr>
                      <td>{representative.address.invalidReason}</td>
                      <td className="no-border" />
                      <td className="no-border" />
                      <td className="no-border" />
                      <td className="no-border" />
                    </tr>
                  )}
                  {representative.alt ? (
                    <tr>
                      <td colSpan={5} className="no-border representative-alt-col">
                        <table className="complex-table representative-alt">
                          <thead>
                            <tr>
                              <th>ALT {representative.positionHeld} Name</th>
                              <th rowSpan={2}>ALT {representative.positionHeld} ID</th>
                              <th rowSpan={2}>ALT {representative.positionHeld} Nationality</th>
                              <th rowSpan={2}>Date of Appointment</th>
                            </tr>
                            <tr>
                              <th>ALT {representative.positionHeld} Address</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="ttu">{representative.alt.name}</td>
                              <td>{representative.alt.id}</td>
                              <td className="ttu">{representative.alt.nationality}</td>
                              <td>{representative.alt.appointmentDate}</td>
                            </tr>
                            <tr>
                              <td>
                                <Address address={representative.alt.address} />
                              </td>
                              <td className="no-border" />
                              <td className="no-border" />
                              <td className="no-border" />
                            </tr>
                            {representative.alt.address?.invalidReason && (
                              <tr>
                                <td>{representative.alt.address.invalidReason}</td>
                                <td className="no-border" />
                                <td className="no-border" />
                                <td className="no-border" />
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ) : null}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {(document.shareholders && document.shareholders.length > 0) ||
      (document.shareholderGroups && document.shareholderGroups.length > 0) ? (
        <>
          <Section className="mt4">Shareholder(s) :</Section>
          <table className="complex-table shareholders">
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
                <th rowSpan={2}>
                  Nationality/Place of <br />
                  Incorporation/Origin
                </th>
                <th rowSpan={2}>Source of Address</th>
                <th rowSpan={2}>Address Changed</th>
              </tr>
              <tr>
                <th colSpan={2}>Address</th>
              </tr>
            </thead>
            <tbody>
              {document?.shareholders?.map((shareholder, index) => (
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
                    <td className="ttu nationality" data-testid="shareholder-nationality">
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
                  {shareholder.address?.invalidReason && (
                    <tr>
                      <td className="no-border" />
                      <td>{shareholder.address.invalidReason}</td>
                      <td className="no-border" />
                      <td className="no-border" />
                      <td className="no-border" />
                      <td className="no-border" />
                    </tr>
                  )}
                  <tr>
                    <td className="no-border" />
                    <th>Ordinary(Number)</th>
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
              {document?.shareholderGroups?.map((group, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <th colSpan={6} className="normal">
                      Group Share : {group.group} (Shares co-owned by shareholders listed under this group)
                    </th>
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <th className="normal">Ordinary(Number)</th>
                    <th className="normal" colSpan={2}>
                      Currency
                    </th>
                  </tr>
                  <tr>
                    <td className="no-border" />
                    <td>{group.ordinary}</td>
                    <td colSpan={2}>{group.currency}</td>
                  </tr>
                  {group.shareholders.map((shareholder, index) => (
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
                        <td className="ttu nationality" data-testid="shareholder-nationality">
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
                      {shareholder.address?.invalidReason && (
                        <tr>
                          <td className="no-border" />
                          <td>{shareholder.address.invalidReason}</td>
                          <td className="no-border" />
                          <td className="no-border" />
                          <td className="no-border" />
                          <td className="no-border" />
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.judicialManagers && document.judicialManagers.length > 0 ? (
        <>
          <Section className="mt4">Judicial Manager(s)</Section>
          <table className="complex-table name-address-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {document.judicialManagers.map((judicialManager, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{judicialManager.name}</td>
                    <td className="ttu">
                      <Address address={judicialManager.address} />
                    </td>
                  </tr>
                  {judicialManager.address?.invalidReason && (
                    <tr>
                      <td colSpan={2}>{judicialManager.address.invalidReason}</td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.liquidators && document.liquidators.length > 0 ? (
        <>
          <Section className="mt4">Liquidator(s)</Section>
          <table className="complex-table name-address-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {document.liquidators.map((liquidator, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{liquidator.name}</td>
                    <td className="ttu">
                      <Address address={liquidator.address} />
                    </td>
                  </tr>
                  {liquidator.address?.invalidReason && (
                    <tr>
                      <td colSpan={2}>{liquidator.address.invalidReason}</td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.provisionalLiquidators && document.provisionalLiquidators.length > 0 ? (
        <>
          <Section className="mt4">Provisional Liquidator(s)</Section>
          <table className="complex-table name-address-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {document.provisionalLiquidators.map((liquidator, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{liquidator.name}</td>
                    <td className="ttu">
                      <Address address={liquidator.address} />
                    </td>
                  </tr>
                  {liquidator.address?.invalidReason && (
                    <tr>
                      <td colSpan={2}>{liquidator.address.invalidReason}</td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.receivers && document.receivers.length > 0 ? (
        <>
          <Section className="mt4">Receiver(s)</Section>
          <table className="complex-table name-address-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {document.receivers.map((receiver, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{receiver.name}</td>
                    <td className="ttu">
                      <Address address={receiver.address} />
                    </td>
                  </tr>
                  {receiver.address?.invalidReason && (
                    <tr>
                      <td colSpan={2}>{receiver.address.invalidReason}</td>
                    </tr>
                  )}
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
      <p>OSCARS - One Stop Change of Address Reporting Service by Immigration & Checkpoint Authority.</p>
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
