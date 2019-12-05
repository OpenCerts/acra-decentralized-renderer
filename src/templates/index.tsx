// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

import { businessCertificateTemplates, businessProfileTemplates } from "./business";
import {
  companyBusinessProfileTemplates,
  companyCertificateTemplates,
  foreignCompanyCertificateTemplates,
  redomCompanyBusinessProfileTemplates
} from "./company";
import { llpProfileTemplates, llpCertificateTemplates } from "./llp";
import { templates as pafTemplates } from "./paf";
import { lpCertificateTemplates, lpProfileTemplates } from "./lp";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: businessProfileTemplates,
  BusinessProfile: businessProfileTemplates,
  BusinessCertificate: businessCertificateTemplates,
  CompanyProfile: companyBusinessProfileTemplates,
  RedomCompanyProfile: redomCompanyBusinessProfileTemplates,
  CompanyCertificate: companyCertificateTemplates,
  ForeignCompanyCertificate: foreignCompanyCertificateTemplates,
  LLPProfile: llpProfileTemplates,
  LLPCertificate: llpCertificateTemplates,
  PAFProfile: pafTemplates,
  LPProfile: lpProfileTemplates,
  LPCertificate: lpCertificateTemplates
};
