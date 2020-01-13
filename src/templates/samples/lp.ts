import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity, AddressType } from "./types";
import { leeTzeMingSignature, qrCode, stamp } from "./common";

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
  authenticationNumber: string;
  qrCode: string;
}
export const isWithdrawnLpPartner = (partner: any): partner is WithdrawnLpPartner => {
  return !!partner.withdrawalDate;
};
export const isLpPartner = (partner: any): partner is LpPartner => {
  return !partner.withdrawalDate;
};
export const lpProfile: AcraLpProfile = {
  lpName: "FUSZFUFZSU",
  formerNames: ["dcba lp"],
  changeOfNameDate: "01/11/2009",
  registrationNumber: "T17LP0140J",
  registrationDate: "13/06/2017",
  commencementDate: "13/06/2017",
  lpStatus: "LiDissolvedve",
  lpStatusDate: "28/08/2017",
  renewalDate: "",
  expiryDate: "12/06/2018",
  giroRenewal: false,
  regulation12Lp: true,
  lpOfficeAddress: {
    type: "local",
    streetName: "sea avenue",
    postalCode: "424242",
    houseNumber: "20B",
    invalidReason: "ACRA mail to this address was returned undelivered on 22/12/2017."
  },
  changeOfAddressDate: "01/11/2009",

  activities: [
    {
      name: "CAPTIVE MANAGERS (66292)",
      description: "HEDGE FUND"
    },
    {
      name: "",
      description: ""
    }
  ],
  managers: [
    {
      name: "SPIIZXVIIZx",
      id: "S1234567Z",
      nationality: "AMERICAN SAMOA",
      address: {
        type: "local",
        streetName: "abc street",
        floor: "01",
        unit: "01",
        postalCode: "123456",
        houseNumber: "123",
        buildingName: "cde plaza",
        invalidReason: "ACRA mail to this address was returned undelivered on 14/01/2018."
      },
      addressSource: "ACRA",
      appointmentDate: "13/06/2017"
    },
    {
      name: "SPIIZXVIIZXEXXV",
      id: "S7068561B",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "02",
        unit: "03",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "ACRA",
      appointmentDate: "15/06/2017"
    }
  ],
  partners: [
    {
      name: "SPIIZXVIIZx",
      id: "S2014916G",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "aNG MO KIO AVENUE 10",
        postalCode: "560464",
        houseNumber: "464",
        buildingName: "teck GHEE HORIZON",
        invalidReason: "ACRA mail to this address was returned undelivered on 07/07/2018."
      },
      addressSource: "ACRA",
      entryDate: "13/06/2017",
      position: "Limited Partner"
    },
    {
      name: "SPIIZXVIIZX",
      id: "S1122334Z",
      nationality: "AMERICAN SAMOA",
      address: {
        type: "local",
        streetName: "fed avenue",
        floor: "33",
        unit: "33",
        postalCode: "321321",
        houseNumber: "168",
        buildingName: "abc condo"
      },
      addressSource: "ACRA",
      entryDate: "13/06/2017",
      position: "General Partner"
    },
    {
      name: "SIHHTHIX JZJTSHy",
      id: "S0176696A",
      nationality: "BAHRAINI",
      address: {
        type: "local",
        streetName: "bishan STREET 21",
        floor: "06",
        unit: "09",
        postalCode: "574045",
        houseNumber: "63",
        buildingName: "bishan 8"
      },
      addressSource: "ACRA",
      entryDate: "28/07/2017",
      position: "General Partner"
    },
    {
      name: "SHYE YZUTYHY",
      id: "S2015402J",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "springleaf walk",
        floor: "10",
        unit: "10",
        postalCode: "787878",
        houseNumber: "26",
        buildingName: "springleaf garden",
        invalidReason: "ACRA mail to this address was returned undelivered on 21/10/2018."
      },
      addressSource: "ACRA",
      entryDate: "01/02/2018",
      withdrawalDate: "03/07/2018",
      position: "General Partner"
    },
    {
      name: "YTIIHT J",
      id: "G0667361P",
      nationality: "CHINESE",
      address: {
        type: "foreign",
        address1: "5804,CHURCHILL",
        address2: "LVD MISSISSAUGA,",
        country: "ONTARIO, CANANDA"
      },
      addressSource: "ACRA",
      entryDate: "30/01/2018",
      withdrawalDate: "03/07/2018",
      position: "General Partner"
    },
    {
      name: "HTYZTIIS IZYZPIHXU",
      id: "S7964287H",
      nationality: "ALGERIAN",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "01",
        unit: "02",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "ACRA",
      entryDate: "30/01/2018",
      withdrawalDate: "03/07/2018",
      position: "Limited Partner"
    }
  ],

  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06",
  signatureName: "Lee Tze Ming",
  signature: leeTzeMingSignature,
  stamp,
  qrCode,
  authenticationNumber: "IXXXXXXX49"
};

export interface AcraLpCertificate extends Document {
  lpName: string;
  changeOfNameDate?: string;
  uen: string;
  registrationDate: string;
  expiryDate: string;
  formerNames?: { name: string; effectiveFrom: string }[];
  receiptNumber: string;
  receiptDate: string;
  signatureName: string;
  signature: string;
  stamp: string;
}

export const lpCertificate: AcraLpCertificate = {
  lpName: "Abcd lp",
  changeOfNameDate: "01/11/2009",
  uen: "T09LP8888Z",
  registrationDate: "09/09/2009",
  expiryDate: "09/01/2010",
  formerNames: [
    {
      name: "Dcba lp",
      effectiveFrom: "09/09/2009"
    }
  ],
  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06",
  signatureName: "Lee Tze Ming",
  signature: leeTzeMingSignature,
  stamp
};
