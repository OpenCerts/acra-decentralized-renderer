import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity, AddressType } from "./types";
import { leeTzeMingSignature, stamp } from "./common";

export interface LpManager {
  name: string;
  id: string;
  nationality: string;
  address?: AddressType;
  addressSource: string;
  appointmentDate: string;
}

export interface LpPartner {
  name: string;
  id: string;
  nationality: string;
  address?: AddressType;
  addressSource: string;
  entryDate: string;
  position: string;
}
export interface WithdrawnLpPartner extends LpPartner {
  withdrawalDate: string;
}
export interface AcraLpProfile extends Document {
  lpName: string;
  formerNames?: string[];
  changeOfNameDate?: string;
  registrationNumber: string;
  registrationDate: string;
  commencementDate: string;
  lpStatus: string;
  lpStatusDate: string;
  renewalDate: string;
  expiryDate: string;
  giroRenewal: boolean;
  regulation12Lp: boolean;
  lpOfficeAddress: AddressType;
  changeOfAddressDate?: string;

  activities: [Activity?, Activity?];
  receiptDate: string;
  receiptNumber: string;

  managers?: LpManager[];
  partners?: (LpPartner | WithdrawnLpPartner)[];
  signatureName: string;
  signature: string;
  stamp: string;
}
export const isWithdrawnLpPartner = (partner: any): partner is WithdrawnLpPartner => {
  return !!partner.withdrawalDate;
};
export const isLpPartner = (partner: any): partner is LpPartner => {
  return !partner.withdrawalDate;
};
export const lpProfile: AcraLpProfile = {
  lpName: "abcd lp",
  formerNames: ["dcba lp"],
  changeOfNameDate: "01/11/2009",
  registrationNumber: "T09LP8888Z",
  registrationDate: "09/09/2009",
  commencementDate: "09/09/2009",
  lpStatus: "Live",
  lpStatusDate: "09/09/2009",
  renewalDate: "09/10/2009",
  expiryDate: "09/09/2010",
  giroRenewal: false,
  regulation12Lp: true,
  lpOfficeAddress: {
    type: "local",
    streetName: "abc road",
    floor: "01",
    unit: "01",
    postalCode: "123456",
    houseNumber: "123",
    buildingName: "abc building"
  },
  changeOfAddressDate: "01/11/2009",

  activities: [
    {
      name: "ASSET/PORTFOLIO MANAGEMENT (66301)",
      description: "HEDGE FUND"
    },
    {
      name: "",
      description: ""
    }
  ],
  managers: [
    {
      name: "tan ah bee",
      id: "S1234567Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "abc street",
        floor: "01",
        unit: "01",
        postalCode: "123456",
        houseNumber: "123",
        buildingName: "cde plaza"
      },
      addressSource: "OSCARS",
      appointmentDate: "09/09/2009"
    }
  ],
  partners: [
    {
      name: "lim ah see",
      id: "S7654321Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "cba street",
        floor: "33",
        unit: "33",
        postalCode: "321321",
        houseNumber: "321",
        buildingName: "def building"
      },
      addressSource: "OSCARS",
      entryDate: "09/09/2009",
      position: "Limited Partner"
    },
    {
      name: "lim ah huat",
      id: "S1122334Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "fed avenue",
        floor: "33",
        unit: "33",
        postalCode: "321321",
        houseNumber: "168",
        buildingName: "abc condo"
      },
      addressSource: "OSCARS",
      entryDate: "09/09/2009",
      position: "General Partner"
    },
    {
      name: "ban ah huat",
      id: "S1111111Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "fff avenue",
        floor: "66",
        unit: "66",
        postalCode: "666666",
        houseNumber: "666",
        buildingName: "ggg condo"
      },
      addressSource: "OSCARS",
      entryDate: "09/09/2009",
      withdrawalDate: "09/09/2010",
      position: "General Partner"
    }
  ],

  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06",
  signatureName: "Lee Tze Ming",
  signature: leeTzeMingSignature,
  stamp
};
