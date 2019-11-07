import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity } from "./samples/types";

export interface LocalAddress {
  type: "local";
  postalCode: string;
  houseNumber: string;
  streetName: string;
  buildingName?: string;
  floor?: string;
  unit?: string;
}
export interface ForeignAddress {
  type: "foreign";
  address1: string;
  address2?: string;
}
export type AddressType = LocalAddress | ForeignAddress;

export const isLocalAddress = (address: any): address is LocalAddress => {
  return address && address.type === "local";
};
export const isForeignAddress = (address: any): address is ForeignAddress => {
  return address && address.type === "foreign";
};

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

export interface AcraLlpCertificate extends Document {
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
}

export const llpCertificate: AcraLlpCertificate = {
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
  receiptNumber: "ACRAXXXXXXXXXX06"
};

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
  receiptNumber: "ACRAXXXXXXXXXX06"
};

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
export interface AcraLpCertificate extends Document {
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

  activities: [Activity, Activity];
  receiptDate: string;
  receiptNumber: string;

  managers?: LpManager[];
  partners?: (LpPartner | WithdrawnLpPartner)[];
}
export const isWithdrawnLpPartner = (partner: any): partner is WithdrawnLpPartner => {
  return !!partner.withdrawalDate;
};
export const isLpPartner = (partner: any): partner is LpPartner => {
  return !partner.withdrawalDate;
};
export const lpCertificate: AcraLpCertificate = {
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
      id: "S11223346",
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
      id: "S11111111",
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
  receiptNumber: "ACRAXXXXXXXXXX06"
};
