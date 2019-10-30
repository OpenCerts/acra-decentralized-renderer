import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraLlpCertificate, isLlpPerson, isWithdrawnLlpPerson } from "../sample";
import { css } from "@emotion/core";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { Header } from "../core/headers";
import { globalStyle } from "../core/style";
import { Address } from "../core/address";
import { Signature } from "../core/signature";

const style = css`
  ${globalStyle}
  table.partners th:nth-of-type(4) {
    width: 25%;
  }
  table.partners th:nth-of-type(2),
  table.partners th:nth-of-type(5),
  table.partners th:nth-of-type(6) {
    width: 13%;
  }
`;

// https://2gfl7hjefk.execute-api.ap-southeast-1.amazonaws.com/dev/status/A_RANDOM_HASH_HERE
// {"status":  2}
export const Llp: FunctionComponent<TemplateProps<AcraLlpCertificate>> = ({ document, rawDocument }) => {
  const partners = (document.partners || []).filter(isLlpPerson);
  const managers = (document.managers || []).filter(isLlpPerson);
  const employees = (document.employees || []).filter(isLlpPerson);
  const withdrawnPartners = (document.partners || []).filter(isWithdrawnLlpPerson);
  const withdrawnManagers = (document.managers || []).filter(isWithdrawnLlpPerson);
  const withdrawnEmployees = (document.employees || []).filter(isWithdrawnLlpPerson);
  return (
    <div css={style}>
      <Header
        type="LLP"
        businessName={document.llpName}
        registrationNumber={document.registrationNumber}
        receiptDate={document.receiptDate}
        targetHash={rawDocument ? rawDocument.signature.targetHash : undefined}
      />
      <Section>The Following Are The Brief Particulars of :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>Name of LLP</td>
            <td className="ttu">{document.llpName}</td>
          </tr>
          <tr>
            <td>Former Name(s) if any</td>
            <td className="ttu">{(document.formerNames || []).join(", ")}</td>
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
            <td>Status</td>
            <td>{document.llpStatus}</td>
          </tr>
          <tr>
            <td>Status Date</td>
            <td>{document.llpStatusDate}</td>
          </tr>
          <tr>
            <td>Registered Office Address</td>
            <td className="ttu">
              <Address address={document.llpOfficeAddress} />
            </td>
          </tr>
          <tr>
            <td>Date of Change of Name</td>
            <td>{document.changeOfNameDate}</td>
          </tr>
          <tr>
            <td>Date of Change of Address</td>
            <td>{document.changeOfAddressDate}</td>
          </tr>
          <tr>
            <td>Date of Annual Declaration</td>
            <td>{document.annualDeclarationDate}</td>
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
          <Section className="mt4">Particulars of Partner(s) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Date of Appointment</th>
                <th>Address Source</th>
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
                    <td className="ttu">{partner.appointmentDate}</td>
                    <td className="ttu">{partner.addressSource}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {managers.length > 0 ? (
        <>
          <Section className="mt4">Particulars of Manager(s) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Date of Appointment</th>
                <th>Address Source</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{manager.name}</td>
                    <td className="ttu">{manager.id}</td>
                    <td className="ttu">{manager.nationality}</td>
                    <td className="ttu">
                      <Address address={manager.address} />
                    </td>
                    <td className="ttu">{manager.appointmentDate}</td>
                    <td className="ttu">{manager.addressSource}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {employees.length > 0 ? (
        <>
          <Section className="mt4">Particulars of Public Accounting Employee(s) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Date of Appointment</th>
                <th>Address Source</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{employee.name}</td>
                    <td className="ttu">{employee.id}</td>
                    <td className="ttu">{employee.nationality}</td>
                    <td className="ttu">
                      <Address address={employee.address} />
                    </td>
                    <td className="ttu">{employee.appointmentDate}</td>
                    <td className="ttu">{employee.addressSource}</td>
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
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Date of Appointment</th>
                <th>Date of Withdrawal</th>
                <th>Address Source</th>
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
                    <td className="ttu">{partner.appointmentDate}</td>
                    <td className="ttu">{partner.withdrawalDate}</td>
                    <td className="ttu">{partner.addressSource}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {withdrawnManagers.length > 0 ? (
        <>
          <Section className="mt4">Withdrawn Manager(s) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Date of Appointment</th>
                <th>Date of Withdrawal</th>
                <th>Address Source</th>
              </tr>
            </thead>
            <tbody>
              {withdrawnManagers.map((partner, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{partner.name}</td>
                    <td className="ttu">{partner.id}</td>
                    <td className="ttu">{partner.nationality}</td>
                    <td className="ttu">
                      <Address address={partner.address} />
                    </td>
                    <td className="ttu">{partner.appointmentDate}</td>
                    <td className="ttu">{partner.withdrawalDate}</td>
                    <td className="ttu">{partner.addressSource}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {withdrawnEmployees.length > 0 ? (
        <>
          <Section className="mt4">Withdrawn Public Accounting Employee(s) :</Section>
          <table className="dunno partners">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Nationality</th>
                <th>Address</th>
                <th>Date of Appointment</th>
                <th>Date of Withdrawal</th>
                <th>Address Source</th>
              </tr>
            </thead>
            <tbody>
              {withdrawnEmployees.map((partner, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td className="ttu">{partner.name}</td>
                    <td className="ttu">{partner.id}</td>
                    <td className="ttu">{partner.nationality}</td>
                    <td className="ttu">
                      <Address address={partner.address} />
                    </td>
                    <td className="ttu">{partner.appointmentDate}</td>
                    <td className="ttu">{partner.withdrawalDate}</td>
                    <td className="ttu">{partner.addressSource}</td>
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
      <Signature receiptDate={document.receiptDate} receiptNumber={document.receiptNumber} />
    </div>
  );
};
