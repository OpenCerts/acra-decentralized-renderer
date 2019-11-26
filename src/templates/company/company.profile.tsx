import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { AcraCompanyProfile } from "../samples";
import { Section } from "../core/section";
import { SimpleTable } from "../core/table";
import { SharedCompanyProfile } from "./sharedCompany.profile";

export const CompanyProfile: FunctionComponent<TemplateProps<AcraCompanyProfile>> = ({
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
            <td>Registration No.</td>
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
            <td>Status Date</td>
            <td>{document.statusDate}</td>
          </tr>
        </tbody>
      </SimpleTable>
    </SharedCompanyProfile>
  );
};
