import React, { FunctionComponent, useState } from "react";
import { ObfuscatableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraBusinessCertificate, BusinessAddress, isBusinessPartner, isWithdrawnBusinessPartner } from "../samples";
import { css } from "@emotion/core";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { Header } from "../core/headers";
import { Signature } from "../core/signature";
import { globalStyle } from "../core/style";
import { Address, ObfuscatableAddress } from "../core/address";
import { PrivacyBanner } from "../core/privacyBanner";

const isPrincipalPlaceOfBusinessInvalid = (address: BusinessAddress): boolean => {
  return address.type === "local" && !!address.Invalidaddresstag;
};
const style = css`
  ${globalStyle}
  table.representatives th:nth-of-type(4),
  table.partners th:nth-of-type(4) {
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
`;
export const Business: FunctionComponent<TemplateProps<AcraBusinessCertificate>> = ({
  document,
  rawDocument,
  handleObfuscation
}) => {
  const [editable, setEditable] = useState(false);
  const partners = document?.partners?.filter(isBusinessPartner) ?? [];
  const withdrawnPartners = document?.partners?.filter(isWithdrawnBusinessPartner) ?? [];
  return (
    <div css={style}>
      <PrivacyBanner onToggleEditable={() => setEditable(!editable)} />
      <Header
        type="Business"
        businessName={document.businessName}
        registrationNumber={document.registrationNumber}
        receiptDate={document.receiptDate}
        targetHash={rawDocument ? rawDocument.signature.targetHash : undefined}
      />
      <Section>The Following Are The Brief Particulars of :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>Name of Business</td>
            <td className="ttu">{document.businessName}</td>
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
            <td rowSpan={isPrincipalPlaceOfBusinessInvalid(document.businessPlace) ? 2 : 1}>
              Principal Place of Business
            </td>
            <td>
              <Address address={document.businessPlace} />
            </td>
          </tr>
          {isPrincipalPlaceOfBusinessInvalid(document.businessPlace) ? (
            <tr>
              <td className="border">ACRA MAIL TO THIS ADDRESS WAS RETURNED UNDELIVERED ON 16/02/2017.</td>
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
      {document.representatives && document.representatives.length > 0 ? (
        <>
          <Section className="mt4">Particulars of Authorised Representative(s) :</Section>
          <table className="dunno representatives">
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
                    <td className="ttu" data-testid="representative-address">
                      <ObfuscatableAddress
                        editable={editable}
                        address={representative.address}
                        onObfuscationRequested={() => handleObfuscation(`representatives[${index}].address`)}
                      />
                    </td>
                    <td className="ttu">{representative.addressSource}</td>
                    <td className="ttu">{representative.appointmentDate}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {partners.length > 0 ? (
        <>
          <Section className="mt4">Existing Sole-Proprietor(s) / Partner(s) :</Section>
          <table className="partners dunno">
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
                    {isBusinessPartner(partner) ? (
                      <>
                        <tr>
                          <td className="ttu" rowSpan={2}>
                            {partner.name}
                          </td>
                          <td className="ttu" rowSpan={2} data-testid="partner-id">
                            <ObfuscatableValue
                              editable={editable}
                              value={partner.id}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].id`)}
                            />
                          </td>
                          <td className="ttu" rowSpan={2} data-testid="partner-nationality">
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
                          <td className="ttu" rowSpan={2}>
                            {partner.addressSource}
                          </td>
                          <td className="ttu">{partner.entryDate}</td>
                        </tr>
                        <tr>
                          <td className="ttu">{partner.position}</td>
                        </tr>
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
          <table className="withdrawn-partners dunno">
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
                    {isWithdrawnBusinessPartner(partner) ? (
                      <>
                        <tr>
                          <td className="ttu" rowSpan={2}>
                            {partner.name}
                          </td>
                          <td className="ttu" rowSpan={2} data-testid="withdrawn-partner-id">
                            <ObfuscatableValue
                              editable={editable}
                              value={partner.id}
                              onObfuscationRequested={() => handleObfuscation(`partners[${index}].id`)}
                            />
                          </td>
                          <td className="ttu" rowSpan={2} data-testid="withdrawn-partner-nationality">
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
                          <td className="ttu" rowSpan={2}>
                            {partner.addressSource}
                          </td>
                          <td className="ttu">{partner.entryDate}</td>
                          <td className="ttu" rowSpan={2}>
                            {partner.withdrawalDate}
                          </td>
                        </tr>
                        <tr>
                          <td className="ttu">{partner.position}</td>
                        </tr>
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
        </ul>
      </div>
      <Signature receiptNumber={document.receiptNumber} />
    </div>
  );
};
