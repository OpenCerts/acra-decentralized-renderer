export interface Partner {
  name: string;
  id: string;
  nationality: string;
  address: Address;
  addressSource: string;
  dateOfEntry: string;
  position: string;
}
export interface WithdrawnPartner extends Partner {
  dateOfWithdrawal: string;
}
export const isWithdrawnPartner = (partner: any): partner is WithdrawnPartner => {
  return !!partner.dateOfWithdrawal;
};
export const isPartner = (partner: any): partner is Partner => {
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
export type Address = LocalAddress | ForeignAddress;

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

export interface AcraBusinessCertificate {
  id: string;
  description: string;
  issuedOn: string;
  $template: {
    name: string;
    type: string;
    url: string;
  };
  issuers: {
    name: string;
    url: string;
    certificateStore: string;
  }[];
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
  placeOfBusiness: Address;
  changeOfAddressDate: string;

  activities: [Activity, Activity];

  representatives: {
    name: string;
    id: string;
    nationality: string;
    address: Address;
    addressSource: string;
    dateOfAppointment: string;
  }[];

  partners: (Partner | WithdrawnPartner)[];

  receiptNumber: string;
  receiptDate: string;
}

export const businessCertificate: AcraBusinessCertificate = {
  id: "53b75bbe",
  description: "Govtech Demo Certificate",
  issuedOn: "2019-05-29T00:00:00+08:00",
  $template: {
    name: "GOVTECH_DEMO",
    type: "GOVTECH_DEMO",
    url: "https://demo-cnm.openattestation.com"
  },
  issuers: [
    {
      name: "Govtech",
      url: "https://tech.gov.sg",
      certificateStore: "0xd3a13C0de778E4853Bce9d4a9982F4fb5D1377DC"
    }
  ],
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
      nationality: "SINGAPORE\nCITIZEN",
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
      nationality: "SINGAPORE\nCITIZEN",
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
      nationality: "SINGAPORE\nCITIZEN",
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
