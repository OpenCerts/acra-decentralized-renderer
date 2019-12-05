import { CompanyProfile } from "./company.profile";
import { RedomCompanyProfile } from "./redomCompany.profile";
import { ForeignCompanyCertificate } from "./foreignCompany.certificate";
import { CompanyCertificate } from "./company.certificate";

export const companyBusinessProfileTemplates = [
  {
    id: "company_business_profile",
    label: "Company",
    template: CompanyProfile
  }
];
export const redomCompanyBusinessProfileTemplates = [
  {
    id: "redom_company_business_profile",
    label: "Redom Company",
    template: RedomCompanyProfile
  }
];

export const companyCertificateTemplates = [
  {
    id: "company_certificate",
    label: "Company",
    template: CompanyCertificate
  }
];
export const foreignCompanyCertificateTemplates = [
  {
    id: "foreign_company_certificate",
    label: "Foreign Company",
    template: ForeignCompanyCertificate
  }
];
