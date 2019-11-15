import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity, AddressType, ForeignAddress, LocalAddress } from "./types";
import { stamp, tanYongTatSignature } from "./common";

interface LocalCompanyAddress extends LocalAddress {
  Dateofaddress: string;
  DateoflastAGM: string;
  DateoflastAR: string;
  FYEasatlastAR: string;
}

type CompanyAddress = LocalCompanyAddress | ForeignAddress;
export interface AcraCompanyCertificate extends Document {
  registrationNumber: string;
  companyName: string;
  formerName?: string;
  incorporationDate: string;
  companyType: string;
  status: string;
  statusDate: string;
  address: CompanyAddress;

  activities: [Activity?, Activity?];

  capitals?: {
    type: "issued" | "paid-up";
    issuerSharedCapital: string;
    sharesNumber: string;
    currency: string;
    shareType: string;
  }[];

  audits?: { name: string }[];

  charges?: {
    chargeNumber: string;
    dateRegistered: string;
    currency: string;
    amountSecured: string;
    chargees: string;
  }[];

  representatives?: {
    name: string;
    id: string;
    nationality: string;
    positionHeld: string;
    address?: AddressType;
    addressSource: string;
    appointmentDate: string;
  }[];

  shareholders?: {
    name: string;
    id: string;
    nationality: string;
    address?: AddressType;
    addressSource: string;
    addressChanged: string;
    ordinary: string;
    currency: string;
  }[];

  receiptDate: string;
  receiptNumber: string;

  signatureName: string;
  signature: string;
  stamp: string;
}
export const companyCertificate: AcraCompanyCertificate = {
  registrationNumber: "16888888A",
  companyName: "Lucky Company PTE. LTD",
  formerName: "Unlucky Company PTE. LTD",
  incorporationDate: "08/08/2016",
  companyType: "Limited Exempt Private Company",
  status: "Live Company",
  statusDate: " 08/08/2016",
  address: {
    type: "local",
    streetName: "GRANGE ROAD",
    floor: "02",
    unit: "876",
    postalCode: "098239",
    houseNumber: "239",
    buildingName: "GRANGE TOWER",
    Dateofaddress: "08/08/2016",
    DateoflastAGM: "09/10/2017",
    DateoflastAR: "10/10/2017",
    FYEasatlastAR: "31/09/2017"
  },

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
      sharesNumber: "1000",
      currency: "Singapore, Dollars",
      shareType: "Ordinary"
    },
    {
      type: "paid-up",
      issuerSharedCapital: "1000",
      sharesNumber: "",
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
      appointmentDate: "08/08/2016"
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
  receiptDate: "22/10/2019",
  signatureName: "Tan Yong Tat",
  signature: tanYongTatSignature,

  stamp
};
