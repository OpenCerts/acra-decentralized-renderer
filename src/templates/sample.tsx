import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface BusinessPartner {
  name: string;
  id: string;
  nationality: string;
  address: AddressType;
  addressSource: string;
  dateOfEntry: string;
  position: string;
}
export interface WithdrawnBusinessPartner extends BusinessPartner {
  dateOfWithdrawal: string;
}
export const isWithdrawnBusinessPartner = (partner: any): partner is WithdrawnBusinessPartner => {
  return !!partner.dateOfWithdrawal;
};
export const isBusinessPartner = (partner: any): partner is BusinessPartner => {
  return !partner.dateOfWithdrawal;
};

export interface LocalAddress {
  type: "local";
  postalCode: string;
  houseNumber: string;
  streetName: string;
  buildingName?: string;
  floor?: string;
  unit?: string;
  invalid?: string;
}
export interface ForeignAddress {
  type: "foreign";
  address1: string;
  address2?: string;
  invalid?: string;
}
export type AddressType = LocalAddress | ForeignAddress;

export const isLocalAddress = (address: any): address is LocalAddress => {
  return address.type === "local";
};
export const isForeignAddress = (address: any): address is ForeignAddress => {
  return address.type === "foreign";
};

interface Activity {
  name: string;
  description: string;
}

export interface AcraBusinessCertificate extends Document {
  businessName: string;
  formerNames: string[];
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
  placeOfBusiness: AddressType;
  changeOfAddressDate: string;

  activities: [Activity, Activity];

  representatives: {
    name: string;
    id: string;
    nationality: string;
    address: AddressType;
    addressSource: string;
    dateOfAppointment: string;
  }[];

  partners: (BusinessPartner | WithdrawnBusinessPartner)[];

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
  placeOfBusiness: {
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
      dateOfAppointment: "08/08/2016"
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
      dateOfEntry: "08/08/2016",
      position: "OWNER"
    },
    {
      name: "LIM AAAA HUAT",
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
      dateOfEntry: "08/08/2016",
      position: "OWNER",
      dateOfWithdrawal: "08/08/2016"
    }
  ],

  receiptNumber: "ACRAXXXXXXXXXX06",
  receiptDate: "22/10/2019"
};

export interface AcraCompanyCertificate extends Document {
  registrationNumber: string;
  companyName: string;
  formerName?: string;
  incorporationDate: string;
  companyType: string;
  status: string;
  statusDate: string;

  activities: [Activity, Activity];

  capitals: {
    type: "issued" | "paid-up";
    issuerSharedCapital: string;
    numberOfShares: string;
    currency: string;
    shareType: string;
  }[];

  audits: { name: string }[];

  charges: {
    chargeNumber: string;
    dateRegistered: string;
    currency: string;
    amountSecured: string;
    chargees: string;
  }[];

  representatives: {
    name: string;
    id: string;
    nationality: string;
    positionHeld: string;
    address: AddressType;
    addressSource: string;
    dateOfAppointment: string;
  }[];

  shareholders: {
    name: string;
    id: string;
    nationality: string;
    address: AddressType;
    addressSource: string;
    addressChanged: string;
    ordinary: string;
    currency: string;
  }[];

  receiptDate: string;
  receiptNumber: string;
}
export const companyCertificate: AcraCompanyCertificate = {
  registrationNumber: "16888888A",
  companyName: "Lucky Company PTE. LTD",
  formerName: "Unlucky Company PTE. LTD",
  incorporationDate: "08/08/2016",
  companyType: "Limited Exempt Private Company",
  status: "Live Company",
  statusDate: " 08/08/2016",

  activities: [
    {
      name: "BANK/FINANCIAL HOLDING COMPANIES (64201)",
      description: "HOLDING COMPANIES"
    },
    {
      name: "REAL ESTATE ACTIVITIES WITH OWN OR LEASED PROPERTY N.E.C. (68109)",
      description: "INVESTMENT COMPANIES"
    }
  ],

  capitals: [
    {
      type: "issued",
      issuerSharedCapital: "1000",
      numberOfShares: "1000",
      currency: "Singapore, Dollars",
      shareType: "Ordinary"
    },
    {
      type: "paid-up",
      issuerSharedCapital: "1000",
      numberOfShares: "",
      currency: "Singapore, Dollars",
      shareType: "Ordinary"
    }
  ],

  audits: [{ name: "abcd llp" }],

  charges: [
    {
      chargeNumber: "10",
      dateRegistered: "10/10/2018",
      currency: "Singapore, Dollars",
      amountSecured: "98",
      chargees: "22"
    }
  ],

  representatives: [
    {
      name: "Lim Ah See",
      id: "S7654321Z",
      nationality: "SINGAPORE CITIZEN",
      positionHeld: "Director",
      address: {
        type: "local",
        streetName: "cba street",
        floor: "01",
        unit: "01",
        postalCode: "321321",
        houseNumber: "321",
        buildingName: "abc condo"
      },
      addressSource: "OSCARS",
      dateOfAppointment: "08/08/2016"
    }
  ],

  shareholders: [
    {
      name: "Lim Ah See",
      id: "S7654321Z",
      nationality: "SINGAPORE CITIZEN",
      addressChanged: "",
      address: {
        type: "local",
        streetName: "cba street",
        floor: "01",
        unit: "01",
        postalCode: "321321",
        houseNumber: "321",
        buildingName: "abc condo"
      },
      addressSource: "OSCARS",
      ordinary: "500",
      currency: "Singapore, Dollars"
    },
    {
      name: "Lim Ah Huat",
      id: "S8888888H",
      nationality: "SINGAPORE CITIZEN",
      addressChanged: "",
      address: {
        type: "local",
        streetName: "amk avenue 8",
        floor: "08",
        unit: "08",
        postalCode: "888888",
        houseNumber: "888",
        buildingName: "def condo"
      },
      addressSource: "OSCARS",
      ordinary: "500",
      currency: "Singapore, Dollars"
    }
  ],

  receiptNumber: "ACRAXXXXXXXXXX06",
  receiptDate: "22/10/2019"
};

export interface LlpPerson {
  name: string;
  id: string;
  nationality: string;
  address: AddressType;
  addressSource: string;
  dateOfAppointment: string;
}
export interface WithdrawnLlpPerson extends LlpPerson {
  dateOfWithdrawal: string;
}
export const isWithdrawnLlpPerson = (partner: any): partner is WithdrawnLlpPerson => {
  return !!partner.dateOfWithdrawal;
};
export const isLlpPerson = (partner: any): partner is LlpPerson => {
  return !partner.dateOfWithdrawal;
};

export interface AcraLlpCertificate extends Document {
  llpName: string;
  formerNames: string[];
  registrationNumber: string;
  registrationDate: string;
  llpStatus: string;
  llpStatusDate: string;
  llpOfficeAddress: AddressType;
  changeOfNameDate?: string;
  changeOfAddressDate?: string;
  annualDeclarationDate?: string;

  activities: [Activity, Activity];

  partners: (LlpPerson | WithdrawnLlpPerson)[];

  managers: (LlpPerson | WithdrawnLlpPerson)[];

  employees: (LlpPerson | WithdrawnLlpPerson)[];

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
      dateOfAppointment: "08/08/2008"
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
      dateOfAppointment: "08/08/2008",
      dateOfWithdrawal: "08/08/2010"
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
      dateOfAppointment: "08/08/2008"
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
      dateOfAppointment: "08/08/2008",
      dateOfWithdrawal: "08/08/2010"
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
      dateOfAppointment: "18/08/2018"
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
      dateOfAppointment: "18/08/2018",
      dateOfWithdrawal: "18/08/2004"
    }
  ],

  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06"
};
