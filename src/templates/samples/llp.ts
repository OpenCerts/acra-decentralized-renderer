import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity, AddressType } from "./types";
import { stamp, tanYongTatSignature } from "./common";

export interface LlpPerson {
  name: string;
  id: string;
  nationality: string;
  address?: AddressType;
  addressSource: string;
  appointmentDate: string;
}
export interface WithdrawnLlpPerson extends LlpPerson {
  withdrawalDate: string;
}
export const isWithdrawnLlpPerson = (partner: any): partner is WithdrawnLlpPerson => {
  return !!partner.withdrawalDate;
};
export const isLlpPerson = (partner: any): partner is LlpPerson => {
  return !partner.withdrawalDate;
};

export interface AcraLlpProfile extends Document {
  llpName: string;
  formerNames?: string[];
  registrationNumber: string;
  registrationDate: string;
  llpStatus: string;
  llpStatusDate: string;
  llpOfficeAddress: AddressType;
  changeOfNameDate?: string;
  changeOfAddressDate?: string;
  annualDeclarationDate?: string;

  activities: [Activity, Activity];

  partners?: (LlpPerson | WithdrawnLlpPerson)[];

  managers?: (LlpPerson | WithdrawnLlpPerson)[];

  employees?: (LlpPerson | WithdrawnLlpPerson)[];

  receiptDate: string;
  receiptNumber: string;

  signatureName: string;
  signature: string;
  stamp: string;
}

export const llpProfile: AcraLlpProfile = {
  llpName: "abcd llp",
  formerNames: ["dcba llp"],
  registrationNumber: "T08LL8888Z",
  registrationDate: "08/08/2008",
  llpStatus: "Live",
  llpStatusDate: "06/11/2012",
  llpOfficeAddress: {
    type: "local",
    streetName: "abc road",
    floor: "01",
    unit: "01",
    postalCode: "123456",
    houseNumber: "123",
    buildingName: "abc building"
  },
  changeOfNameDate: "20/04/2011",
  changeOfAddressDate: "20/04/2011",
  annualDeclarationDate: "31/03/2011",

  activities: [
    {
      name: "RETAIL SALE OF COMPUTER HARDWARE & ACCESSORIES & COMPUTER SOFTWARE(EXCL GAMES) (47412)",
      description: "SALES OF ACCOUNTING SOFTWARE, HARDWARE & ACCESSORIES"
    },
    {
      name: "BOOK-KEEPING SERVICES (69202)",
      description: "BOOKKEEPING & ACCOUNTING SOFTWARE CONSULTANCY SERVICE"
    }
  ],

  partners: [
    {
      name: "TAN AH BEE",
      id: "S1234567Z",
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
      appointmentDate: "08/08/2008"
    },
    {
      name: "SAT AH BEE",
      id: "S666666Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "zzz street",
        floor: "01",
        unit: "01",
        postalCode: "654321",
        houseNumber: "123",
        buildingName: "zzz plaza"
      },
      addressSource: "OSCARS",
      appointmentDate: "08/08/2008",
      withdrawalDate: "08/08/2010"
    }
  ],

  managers: [
    {
      name: "LIM AH SEE",
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
      appointmentDate: "08/08/2008"
    },
    {
      name: "LIM AH SAN",
      id: "S6767676Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "ccc street",
        floor: "01",
        unit: "01",
        postalCode: "321321",
        houseNumber: "321",
        buildingName: "ccc building"
      },
      addressSource: "OSCARS",
      appointmentDate: "08/08/2008",
      withdrawalDate: "08/08/2010"
    }
  ],

  employees: [
    {
      name: "MIL AH SEE",
      id: "S678965Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "cba street",
        floor: "02",
        unit: "02",
        postalCode: "555555",
        houseNumber: "555",
        buildingName: "def building"
      },
      addressSource: "OSCARS",
      appointmentDate: "18/08/2018"
    },
    {
      name: "MIL AH SAN",
      id: "S4444444Z",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "ggg street",
        floor: "44",
        unit: "44",
        postalCode: "444444",
        houseNumber: "444",
        buildingName: "gggg building"
      },
      addressSource: "OSCARS",
      appointmentDate: "18/08/2018",
      withdrawalDate: "18/08/2004"
    }
  ],

  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06",
  signatureName: "Tan Yong Tat",
  signature: tanYongTatSignature,
  stamp
};

export interface AcraLlpCertificate extends Document {
  llpName: string;
  changeOfNameDate: string;
  uen: string;
  registrationDate: string;
  formerNames?: { name: string; effectiveFrom: string }[];
  receiptNumber: string;
  receiptDate: string;
  signatureName: string;
  signature: string;
  stamp: string;
}

export const llpCertificate: AcraLlpCertificate = {
  llpName: "Abcd llp",
  changeOfNameDate: "20/04/2011",
  uen: "T08LL8888Z",
  registrationDate: "08/08/2008",
  formerNames: [
    {
      name: "Dcba llp",
      effectiveFrom: "08/08/2008"
    }
  ],
  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06",
  signatureName: "Tan Yong Tat",
  signature: tanYongTatSignature,
  stamp
};
