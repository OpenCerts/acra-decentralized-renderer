import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { AddressType, ForeignAddress, LocalAddress } from "../sample";
import { Activity } from "./types";

interface LocalBusinessAddress extends LocalAddress {
  Invalidaddresstag?: string;
}

export type BusinessAddress = LocalBusinessAddress | ForeignAddress;

export interface BusinessPartner {
  name: string;
  id: string;
  nationality: string;
  address?: AddressType;
  addressSource: string;
  entryDate: string;
  position: string;
}
export interface WithdrawnBusinessPartner extends BusinessPartner {
  withdrawalDate: string;
}
export const isWithdrawnBusinessPartner = (partner: any): partner is WithdrawnBusinessPartner => {
  return !!partner.withdrawalDate;
};
export const isBusinessPartner = (partner: any): partner is BusinessPartner => {
  return !partner.withdrawalDate;
};
export interface AcraBusinessCertificate extends Document {
  businessName: string;
  formerNames?: string[];
  changeOfNameDate?: string;
  registrationNumber: string;
  registrationDate: string;
  commencementDate: string;
  businessStatus: string;
  businessStatusDate: string;
  businessRenewalDate?: string;
  businessExpiryDate: string;
  renewalByGiro: string;
  businessConstitution: string;
  businessPlace: BusinessAddress;
  changeOfAddressDate: string;

  activities: [Activity?, Activity?];

  representatives?: {
    name: string;
    id: string;
    nationality: string;
    address?: AddressType;
    addressSource: string;
    appointmentDate: string;
  }[];

  partners?: (BusinessPartner | WithdrawnBusinessPartner)[];

  receiptNumber: string;
  receiptDate: string;
}

export const businessCertificate: AcraBusinessCertificate = {
  businessName: "168 Enterprise",
  formerNames: ["9413 Enterprise"],
  changeOfNameDate: "10/10/2016",
  registrationNumber: "16888888A",
  registrationDate: "08/08/2016",
  commencementDate: "08/08/2016",
  businessStatus: "Live",
  businessStatusDate: "08/08/2016",
  businessRenewalDate: "",
  businessExpiryDate: "08/08/2017",
  renewalByGiro: "NO",
  businessConstitution: "Sole-Proprietor",
  businessPlace: {
    type: "local",
    streetName: "ABC ROAD",
    floor: "08",
    unit: "08",
    postalCode: "888888",
    houseNumber: "888",
    buildingName: "ABC BUILDING"
  },
  changeOfAddressDate: "10/10/2016",

  activities: [
    {
      name: "MONEY-CHANGING SERVICES (64993)",
      description: "FUND TRANSFER SERVICE"
    },
    {
      name: "",
      description: ""
    }
  ],

  representatives: [
    {
      name: "NG AH MEI",
      id: "S7788778H",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "ANSON ROAD",
        floor: "78",
        unit: "78",
        postalCode: "787878",
        houseNumber: "78",
        buildingName: "INTERNATIONAL PLAZA"
      },
      addressSource: "OSCARS",
      appointmentDate: "08/08/2016"
    }
  ],

  partners: [
    {
      name: "LIM AH HUAT",
      id: "S8888888H",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "AMK AVENUE",
        floor: "08",
        unit: "08",
        postalCode: "888888",
        houseNumber: "888",
        buildingName: "DEF BUILDING"
      },
      addressSource: "OSCARS",
      entryDate: "08/08/2016",
      position: "OWNER"
    },
    {
      name: "LIM AAAA HUAT",
      id: "S7777777H",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "AMK AVENUE",
        floor: "77",
        unit: "77",
        postalCode: "777777",
        houseNumber: "777",
        buildingName: "jjj BUILDING"
      },
      addressSource: "OSCARS",
      entryDate: "08/08/2016",
      position: "OWNER",
      withdrawalDate: "08/08/2016"
    }
  ],

  receiptNumber: "ACRAXXXXXXXXXX06",
  receiptDate: "22/10/2019"
};
