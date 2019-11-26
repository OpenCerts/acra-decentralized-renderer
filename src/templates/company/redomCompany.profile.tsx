import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraRedomCompanyProfile } from "../samples";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { SharedCompanyProfile } from "./sharedCompany.profile";

export const RedomCompanyProfile: FunctionComponent<TemplateProps<AcraRedomCompanyProfile>> = ({
  document,
  rawDocument,
  handleObfuscation
}) => {
  return (
    <SharedCompanyProfile document={document} rawDocument={rawDocument} handleObfuscation={handleObfuscation}>
      <Section>The Following Are The Brief Particulars of :</Section>
      <SimpleTable>
        <tbody>
          <tr>
            <td>UEN</td>
            <td>{document.registrationNumber}</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td className="ttu">{document.companyName}</td>
          </tr>
          <tr>
            <td>Former Name if any</td>
            <td className="ttu">{document.formerName}</td>
          </tr>
          <tr>
            <td>Company Type</td>
            <td className="ttu">{document.companyType}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{document.status}</td>
          </tr>
          <tr>
            <td>Status Date</td>
            <td>{document.statusDate}</td>
          </tr>
          <tr>
            <td>Date of Transfer of Registration</td>
            <td>{document.registrationTransferDate}</td>
          </tr>
          <tr>
            <td>Country of Original Incorporation</td>
            <td className="ttu">{document.originalIncorporationCountry}</td>
          </tr>
          <tr>
            <td>Date of Original Incorporation</td>
            <td>{document.originalIncorporationDate}</td>
          </tr>
          <tr>
            <td>Name on Deregistration of Country of Original Incorporation</td>
            <td className="ttu">{document.deregistrationName}</td>
          </tr>
        </tbody>
      </SimpleTable>
      {document.registrationHistory && document.registrationHistory.length > 0 ? (
        <>
          <Section className="mt1">
            Registration History Prior to Registration in Singapore (Only 3 Most Recent Shown) :
          </Section>
          <table className="complex-table">
            <thead>
              <tr>
                <th>Country of Registration</th>
                <th>Date of Registration</th>
                <th>Registered Name on Deregistration</th>
              </tr>
            </thead>
            <tbody>
              {document.registrationHistory.map((registration, index) => (
                <tr key={index}>
                  <td className="ttu">{registration.country}</td>
                  <td>{registration.date}</td>
                  <td className="ttu">{registration.nameOnDeregistration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      {document.registrationCondition ? (
        <>
          <Section className="mt1">Condition(s) of Registration Imposed Under Section 359(2)</Section>
          {document.registrationCondition.conditions && document.registrationCondition.conditions.length > 0 ? (
            <table className="complex-table">
              <tbody>
                {document.registrationCondition?.conditions.map((condition, index) => (
                  <tr key={index}>
                    <td>{condition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
          <SimpleTable>
            <tbody>
              <tr>
                <td>Amalgamated From</td>
                <td className="ttu">{document.registrationCondition.amalgamatedFrom}</td>
              </tr>
              <tr>
                <td>Amalgamated With</td>
                <td className="ttu">{document.registrationCondition.amalgamatedWith}</td>
              </tr>
              <tr>
                <td>Amalgamated To Form</td>
                <td className="ttu">{document.registrationCondition.amalgamatedToForm}</td>
              </tr>
            </tbody>
          </SimpleTable>
        </>
      ) : null}
    </SharedCompanyProfile>
  );
};
