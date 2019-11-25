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
  regn?: string;
  entryDate?: string;
  entryDate2?: string;
}
export interface WithdrawnPublicAccountingFirmPartner extends PublicAccountingFirmPartner {
  resignDate?: string;
  resignDate2?: string;
}
export const isWithdrawnPublicAccountingFirmPartner = (
  partner: any
): partner is WithdrawnPublicAccountingFirmPartner => {
  return !!partner.resignDate || !!partner.resignDate2;
};
export const isPublicAccountingFirmPartner = (partner: any): partner is PublicAccountingFirmPartner => {
  return !isWithdrawnPublicAccountingFirmPartner(partner);
};
export const publicAccountingFirmCertificate: AcraPublicAccountingFirmCertificate = {
  firmName: "OM salah",
  formerNames: [],
  registrationNumber: "T19PF0001K",
  registrationDate: "06/02/2019",
  commencementDate: "06/02/2019",
  pafStatus: "Suspended (SI)",
  pafStatusDate: "06/02/2019",
  constitution: "PARTNERSHIP",
  businessPlace: {
    type: "local",
    streetName: "springleaf walk",
    postalCode: "787878",
    houseNumber: "36",
    buildingName: "springleaf garden"
  },
  changeOfAddressDate: "",
  changeOfNameDate: "06/02/2019",

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
      name: "SUZF FU",
      id: "S1320293A",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "springleaf walk",
        postalCode: "787878",
        houseNumber: "26",
        buildingName: "springleaf garden"
      },
      addressSource: "ACRA",
      regn: "88901",
      entryDate: "01/01/1966"
    },
    {
      name: "HZXZY",
      id: "S3019661I",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "simei street 1",
        floor: "12",
        unit: "34",
        postalCode: "520113",
        houseNumber: "113"
      },
      addressSource: "ACRA",
      regn: "88904",
      entryDate2: "06/02/2019"
    },
    {
      name: "ZYIZXZIHP JZYZJHZYUIZY",
      id: "S7560027E",
      nationality: "REUNION",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "01",
        unit: "02",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "ACRA",
      regn: "88912",
      entryDate: "03/07/2017",
      entryDate2: "13/06/2017"
    },
    {
      name: "YZT THJT JHHY",
      id: "S8077800G",
      nationality: "SINGAPORE P.R.",
      address: {
        type: "local",
        streetName: "cHOA CHU KANG AVENUE 5",
        floor: "04",
        unit: "68",
        postalCode: "684484",
        houseNumber: "484D"
      },
      addressSource: "ACRA",
      regn: "01468",
      entryDate2: "01/09/2017"
    },
    {
      name: "NAYANA",
      id: "NAYANA",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "bedok reservoir crescent",
        postalCode: "4747474",
        houseNumber: "747D"
      },
      addressSource: "ACRA",
      entryDate: "06/02/2019"
    },
    {
      name: "FUFUFUFU",
      id: "KJH123456",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "foreign",
        address1: "GGFGFHGF",
        address2: "GHGHG"
      },
      addressSource: "ACRA",
      entryDate2: "01/01/1965"
    },
    {
      name: "UIIHT YHW SHZIHHHXUHI",
      id: "S7037209F",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        houseNumber: "20",
        streetName: "sCIENCE PARK ROAD",
        buildingName: "TELETECH PARK",
        postalCode: "117674"
      },
      addressSource: "ACRA",
      entryDate2: "17/07/2017"
    },
    {
      name: "HHXXH",
      id: "S2014135B",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "springleaf walk",
        floor: "a1",
        unit: "03",
        postalCode: "787878",
        houseNumber: "26",
        buildingName: "springleaf garden"
      },
      addressSource: "ACRA",
      regn: "88885",
      entryDate2: "30/10/2017",
      resignDate2: "02/11/2017"
    },
    {
      name: "ZYIZXZIHP JZYZJHZYUIZY",
      id: "S7560027E",
      nationality: "REUNION",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "02",
        unit: "01",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "ACRA",
      regn: "REUNION",
      entryDate: "13/06/2017",
      resignDate: "10/08/2017"
    },
    {
      name: "MEHAR",
      id: "S4162824C",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "03",
        unit: "02",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "ACRA",
      regn: "REUNION",
      entryDate2: "30/10/2017",
      resignDate2: "02/11/2017"
    },
    {
      name: "UIIHT YHW SHZIHHHXUHI",
      id: "S7037209F",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "science park road",
        postalCode: "117674",
        buildingName: "teletech park",
        houseNumber: "20"
      },
      addressSource: "ACRA",
      regn: "REUNION",
      entryDate2: "17/07/2017",
      resignDate2: "20/07/2017"
    }
  ],

  receiptDate: "22/10/2019",
  receiptNumber: "ACRAXXXXXXXXXX06",
  signatureName: "Lee Tze Ming",
  signature: leeTzeMingSignature,
  stamp
};
