import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity, AddressType, ForeignAddress, LocalAddress } from "./types";
import { leeTzeMingSignature, qrCode, stamp } from "./common";

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
export interface AcraBusinessProfile extends Document {
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
  signatureName: string;
  signature: string;
  stamp: string;
  authenticationNumber: string;
  qrCode: string;
}

export const businessProfile: AcraBusinessProfile = {
  businessName: "Eat toast bread",
  formerNames: ["#!T*-#&T?!ST"],
  changeOfNameDate: "18/10/2019",
  registrationNumber: "53235918J",
  registrationDate: "31/07/2019",
  commencementDate: "30/07/2019",
  businessStatus: "Live",
  businessStatusDate: "31/07/2019",
  businessRenewalDate: "",
  businessExpiryDate: "31/07/2022",
  renewalByGiro: "NO",
  businessConstitution: "Sole-Proprietor",
  businessPlace: {
    type: "local",
    streetName: "Ang mo kio avenue 6",
    floor: "13",
    unit: "13",
    postalCode: "888888",
    houseNumber: "646",
    buildingName: "ang mo kio 61",
    invalidReason: "ACRA mail to this address was returned undelivered on 22/12/2017."
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
      name: "ei hhh whxyz xhxviy",
      id: "S0069597A",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "anchorvale crescent",
        floor: "11",
        unit: "11",
        postalCode: "544662",
        houseNumber: "75",
        buildingName: "the vales",
        invalidReason: "ACRA mail to this address was returned undelivered on 01/02/2018."
      },
      addressSource: "acra",
      appointmentDate: "01/08/2015"
    },
    {
      name: "mehar",
      id: "S4162824C",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "02",
        unit: "03",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "acra",
      appointmentDate: "01/08/2015"
    }
  ],

  partners: [
    {
      name: "thst",
      id: "S1061593C",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "choa CHU KANG LOOP",
        floor: "02",
        unit: "02",
        postalCode: "680342",
        houseNumber: "342",
        invalidReason: "ACRA mail to this address was returned undelivered on 10/08/2018."
      },
      addressSource: "acra",
      entryDate: "03/03/2016",
      position: "OWNER"
    },
    {
      name: "HJYIV TZY",
      id: "S1096543H",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        houseNumber: "111",
        streetName: "ANG MO KIO AVENUE 4",
        floor: "10",
        unit: "04",
        postalCode: "560111",
        buildingName: "KEBUN BARU heights"
      },
      addressSource: "acra",
      entryDate: "24/02/2016",
      position: "OWNER"
    },
    {
      name: "thst",
      id: "S1052670A",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "choa CHU KANG LOOP",
        floor: "01",
        unit: "01",
        postalCode: "680340",
        houseNumber: "340"
      },
      addressSource: "acra",
      entryDate: "10/03/2016",
      position: "OWNER"
    },
    {
      name: "PIXXIHP THHXZS",
      id: "S0016180B",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "ISHUN STREET 72",
        floor: "12",
        unit: "11",
        postalCode: "760763",
        houseNumber: "763"
      },
      addressSource: "acra",
      entryDate: "30/07/2019",
      position: "OWNER"
    },
    {
      name: "-!INIG-&!T!--#V-30-M!Y7",
      id: "201700437C",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "TAMPINES STREET 11",
        floor: "01",
        unit: "04",
        postalCode: "521131",
        houseNumber: "131"
      },
      addressSource: "acra",
      entryDate: "06/09/2017",
      position: "OWNER"
    },
    {
      name: "thst",
      id: "S1061593C",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "choa CHU KANG LOOP",
        floor: "02",
        unit: "02",
        postalCode: "680342",
        houseNumber: "342",
        invalidReason: "ACRA mail to this address was returned undelivered on 22/10/2019."
      },
      addressSource: "acra",
      entryDate: "24/02/2016",
      position: "Nominee/Trustee",
      withdrawalDate: "09/03/2016"
    },
    {
      name: "FIZS SZHHU SHZHHHY",
      id: "S1155939E",
      nationality: "QAtar",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "02",
        unit: "03",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "acra",
      entryDate: "23/02/2016",
      position: "Nominee/Trustee",
      withdrawalDate: "24/02/2016"
    },
    {
      name: "FIZS SZHHU SHZHHHY",
      id: "S1155939E",
      nationality: "QAtar",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "02",
        unit: "03",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "acra",
      entryDate: "15/02/2016",
      position: "Nominee/Trustee",
      withdrawalDate: "19/02/2016"
    },
    {
      name: "FIZS SZHHU SHZHHHY",
      id: "S1155939E",
      nationality: "QAtar",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "02",
        unit: "03",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "acra",
      entryDate: "12/02/2016",
      position: "Nominee/Trustee",
      withdrawalDate: "15/02/2016"
    },
    {
      name: "JHUIIJ",
      id: "S7098532B",
      nationality: "BRITISH",
      address: {
        type: "local",
        streetName: "ANSON ROAD",
        postalCode: "079903",
        houseNumber: "10"
      },
      addressSource: "acra",
      entryDate: "04/07/2013",
      position: "Owner",
      withdrawalDate: "20/07/2016"
    },
    {
      name: "M?M !#!# $?U- PT#. LT&.",
      id: "201506036D",
      nationality: "SINGAPORE",
      address: {
        type: "local",
        streetName: "ANSON ROAD",
        postalCode: "079903",
        floor: "01",
        unit: "01",
        houseNumber: "10"
      },
      addressSource: "acra",
      entryDate: "07/02/2016",
      position: "Owner",
      withdrawalDate: "24/02/2016"
    },
    {
      name: "THST_S2013783Z",
      id: "S2013783A",
      nationality: "austrian",
      address: {
        type: "foreign",
        address1: "a 1030 WIEN",
        address2: "LOTHRINGERstrasse",
        country: "14/16 France"
      },
      addressSource: "acra",
      entryDate: "07/02/2016",
      position: "Owner",
      withdrawalDate: "24/02/2016"
    },
    {
      name: "W HHT EYHWHZ",
      id: "S7139337B",
      nationality: "singapore citizen",
      address: {
        type: "local",
        streetName: "marina boulevard",
        postalCode: "018980",
        floor: "51",
        unit: "05",
        buildingName: "marina bay residences",
        houseNumber: "18"
      },
      addressSource: "acra",
      entryDate: "31/03/2014",
      position: "Owner",
      withdrawalDate: "12/02/2016"
    },
    {
      name: "XYZ",
      id: "S2014905A",
      nationality: "BELARUSSIAN",
      address: {
        type: "local",
        streetName: "middle road",
        postalCode: "188979",
        floor: "12",
        unit: "wdg",
        buildingName: "fortune centre",
        houseNumber: "190"
      },
      addressSource: "acra",
      entryDate: "31/03/2014",
      position: "Owner",
      withdrawalDate: "12/02/2016"
    },
    {
      name: "JHHYSHY",
      id: "S6366878H",
      nationality: "SINGAPORE citizen",
      address: {
        type: "local",
        streetName: "anson road",
        postalCode: "079903",
        houseNumber: "10"
      },
      addressSource: "acra",
      entryDate: "04/07/2013",
      position: "Owner",
      withdrawalDate: "18/07/2016"
    },
    {
      name: "HXZY IS JHYEU",
      id: "S2014958B",
      nationality: "SINGAPORE citizen",
      address: {
        type: "local",
        streetName: "lorong telok",
        floor: "02",
        unit: "01",
        postalCode: "049032",
        houseNumber: "20"
      },
      addressSource: "acra",
      entryDate: "08/02/2016",
      position: "Nominee/Trustee",
      withdrawalDate: "24/02/2016"
    },
    {
      name: "HXZY IS JHYEU",
      id: "S2014958B",
      nationality: "SINGAPORE citizen",
      address: {
        type: "local",
        streetName: "lorong telok",
        floor: "02",
        unit: "01",
        postalCode: "049032",
        houseNumber: "20"
      },
      addressSource: "acra",
      entryDate: "18/02/2016",
      position: "Owner",
      withdrawalDate: "24/02/2016"
    }
  ],

  receiptNumber: "Replacement Copy of ACRA191113111236",
  receiptDate: "18/11/2019",

  signatureName: "Lee Tze Ming",
  signature: leeTzeMingSignature,
  stamp,
  qrCode,
  authenticationNumber: "IXXXXXXX49"
};

export interface AcraBusinessCertificate extends Document {
  businessName: string;
  changeOfNameDate?: string;
  uen: string;
  registrationDate: string;
  businessExpiryDate: string;
  formerNames?: { name: string; effectiveFrom: string }[];
  receiptNumber: string;
  receiptDate: string;
  signatureName: string;
  signature: string;
  stamp: string;
}

export const businessCertificate: AcraBusinessCertificate = {
  businessName: "168 Enterprise",
  changeOfNameDate: "10/10/2016",
  uen: "16888888A",
  registrationDate: "08/08/2016",
  businessExpiryDate: "08/08/2017",
  formerNames: [{ name: "9413 Enterprise", effectiveFrom: "08/08/2016" }],
  receiptNumber: "ACRAXXXXXXXXXX06",
  receiptDate: "22/10/2019",

  signatureName: "Lee Tze Ming",
  signature: leeTzeMingSignature,
  stamp
};
