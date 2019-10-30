// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

import { templates } from "./business";
import { templates as companyTemplates } from "./company";
import { templates as llpTemplates } from "./llp";
import { templates as pafTemplates } from "./paf";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";

export const registry: TemplateRegistry<any> = {
  default: templates,
  Business: templates,
  Company: companyTemplates,
  LLP: llpTemplates,
  PAF: pafTemplates
};
