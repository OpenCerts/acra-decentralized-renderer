import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity, AddressType } from "./types";
import { leeTzeMingSignature, stamp } from "./common";

export interface AcraPublicAccountingFirmCertificate extends Document {
  firmName: string;
  formerNames?: string[];
  registrationNumber: string;
  registrationDate: string;
  commencementDate: string;
  pafStatus: string;
  pafStatusDate: string;
  constitution: string;
  businessPlace: AddressType;
  changeOfAddressDate?: string;
  changeOfNameDate?: string;

  activities: [Activity, Activity];
  partners?: (PublicAccountingFirmPartner | WithdrawnPublicAccountingFirmPartner)[];

  receiptDate: string;
  receiptNumber: string;
  signatureName: string;
  signature: string;
  stamp: string;
}

export interface PublicAccountingFirmPartner {
  name: string;
  id: string;
  nationality: string;
  address?: AddressType;
  addressSource: string;
  regn: string;
  entryDate?: string;
  entryDate2?: string;
}
export interface WithdrawnPublicAccountingFirmPartner extends PublicAccountingFirmPartner {
  resignDate: string;
  resignDate2?: string;
}
export const isWithdrawnPublicAccountingFirmPartner = (
  partner: any
): partner is WithdrawnPublicAccountingFirmPartner => {
  return !!partner.resignDate || !!partner.resignDate2;
};
export const isPublicAccountingFirmPartner = (partner: any): partner is PublicAccountingFirmPartner => {
  return !partner.resignDate || !partner.resignDate2;
};
export const publicAccountingFirmCertificate: AcraPublicAccountingFirmCertificate = {
  firmName: "abcd accounting",
  formerNames: ["dbca accounting"],
  registrationNumber: "S88PF8888",
  registrationDate: "08/08/2008",
  commencementDate: "08/08/2008",
  pafStatus: "Live",
  pafStatusDate: "08/08/2009",
  constitution: "sole-proprietorship",
  businessPlace: {
    type: "local",
    streetName: "abc street",
    floor: "01",
    unit: "01",
    postalCode: "123456",
    houseNumber: "123",
    buildingName: "bcd plaza"
  },
  changeOfAddressDate: "01/11/2008",
  changeOfNameDate: "01/11/2008",

  activities: [
    {
      name: "ACCOUNTING AND AUDITING SERVICES (INCLUDING TAXATION ADVISORY SERVICES) (69201)",
      description: ""
    },
    {
      name: "",
      description: ""
    }
  ],
  partners: [
    {
      name: "Tan Ah Bee",
      id: "S4444444Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "abc street",
        floor: "01",
        unit: "01",
        postalCode: "654321",
        houseNumber: "123",
        buildingName: "cde plaza"
      },
      addressSource: "OSCARS",
      regn: "08888",
      entryDate: "08/08/2008"
    },
    {
      name: "Lim Ah See",
      id: "S7654321Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "cba street",
        floor: "01",
        unit: "01",
        postalCode: "321321",
        houseNumber: "321",
        buildingName: "def building"
      },
      addressSource: "OSCARS",
      regn: "09999",
      entryDate2: "08/08/2008"
    },
    {
      name: "Ban Ah See",
      id: "S4444444Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "cba street",
        floor: "44",
        unit: "44",
        postalCode: "444444",
        houseNumber: "444",
        buildingName: "ccc building"
      },
      addressSource: "OSCARS",
      regn: "09999",
      entryDate: "08/08/2008",
      entryDate2: "08/08/2009",
      resignDate: "08/08/2010",
      resignDate2: "08/08/2011"
    }
  ],

  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06",
  signatureName: "Lee Tze Ming",
  signature: leeTzeMingSignature,
  stamp
};
