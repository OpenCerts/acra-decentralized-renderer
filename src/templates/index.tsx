// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

import { templates } from "./business";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { AcraBusinessCertificate } from "./sample";

export const registry: TemplateRegistry<AcraBusinessCertificate> = {
  default: templates
};
