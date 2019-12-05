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
  llpName: "ZXZTHSI YITU JHHPPZIU YITu",
  formerNames: ["dcba llp"],
  registrationNumber: "T19LL0039A",
  registrationDate: "21/05/2019",
  llpStatus: "Struck Off",
  llpStatusDate: "28/10/2019",
  llpOfficeAddress: {
    type: "local",
    streetName: "sea avenue",
    postalCode: "424242",
    houseNumber: "20b",
    invalidReason: "ACRA mail to this address was returned undelivered on 22/12/2017."
  },
  changeOfNameDate: "20/04/2011",
  changeOfAddressDate: "20/04/2011",
  annualDeclarationDate: "31/03/2011",

  activities: [
    {
      name: "FOOD FISH FARMS (03201)",
      description: "SALES OF ACCOUNTING SOFTWARE, HARDWARE & ACCESSORIES"
    },
    {
      name: "BOOK-KEEPING SERVICES (69202)",
      description: "BOOKKEEPING & ACCOUNTING SOFTWARE CONSULTANCY SERVICE"
    }
  ],

  partners: [
    {
      name: "FUFUFUFU",
      id: "KJH123456",
      nationality: "BELARUSSIAN",
      address: {
        type: "foreign",
        address1: "GGFGFHGF",
        address2: "GHGHG",
        invalidReason: "ACRA mail to this address was returned undelivered on 03/03/2018."
      },
      addressSource: "ACRA",
      appointmentDate: "11/08/2017"
    },
    {
      name: "YZYZ",
      id: "S7074975J",
      nationality: "SINGAPORE citizen",
      address: {
        type: "local",
        houseNumber: "646",
        streetName: "aNG MO KIO AVENUE 6",
        floor: "12",
        unit: "12",
        buildingName: "ANG MO KIO 61",
        postalCode: "560646"
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
    },
    {
      name: "HS REK GNOGNI",
      id: "S2015147A",
      nationality: "SINGAPORE citizen",
      address: {
        type: "local",
        houseNumber: "131",
        streetName: "tampines street 11",
        postalCode: "521131"
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
    },
    {
      name: "NAYANA",
      id: "S2015045I",
      nationality: "SINGAPORE citizen",
      address: {
        type: "local",
        houseNumber: "747d",
        streetName: "bedok reservoir crescent",
        postalCode: "521156"
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
    },
    {
      name: "XIX XHHY HUI IZYXHYU",
      id: "S1703042F",
      nationality: "SINGAPORE citizen",
      address: {
        type: "local",
        houseNumber: "156",
        streetName: "tampines street 12",
        floor: "08",
        unit: "23",
        postalCode: "521156"
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
    },
    {
      name: "ZYIZXZIHP JZYZJHZYUIZY",
      id: "S7560027E",
      nationality: "REUNION",
      address: {
        type: "local",
        houseNumber: "20b",
        streetName: "sea avenue",
        floor: "01",
        unit: "02",
        postalCode: "424242"
      },
      addressSource: "ACRA",
      appointmentDate: "11/08/2017"
    },
    {
      name: "DSGSG",
      id: "S7909266E1",
      nationality: "ALBANIAN",
      address: {
        type: "foreign",
        address1: "BGFDRD"
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
    },
    {
      name: "FUFUFUFU",
      id: "KJH123456",
      nationality: "BELARUSSIAN",
      address: {
        type: "foreign",
        address1: "GGFGFHGF",
        address2: "GHGHG",
        invalidReason: "ACRA mail to this address was returned undelivered on 14/07/2018."
      },
      addressSource: "ACRA",
      appointmentDate: "11/08/2017",
      withdrawalDate: "22/09/2017"
    },
    {
      name: "NAYANA",
      id: "S2015045I",
      nationality: "Singapore citizen",
      address: {
        type: "local",
        streetName: "bedok reservoir crescent",
        postalCode: "474747",
        houseNumber: "747d"
      },
      addressSource: "ACRA",
      appointmentDate: "11/08/2017",
      withdrawalDate: "11/08/2017"
    },
    {
      name: "UIVZU WZIYHI",
      id: "S7605446J",
      nationality: "BELGIAN",
      address: {
        type: "foreign",
        address1: "FDSF",
        address2: "DSFSDF"
      },
      addressSource: "ACRA",
      appointmentDate: "11/08/2017",
      withdrawalDate: "11/08/2017"
    },
    {
      name: "DFHZXF XZGSAF",
      id: "S7988389A",
      nationality: "BRITISH",
      address: {
        type: "local",
        streetName: "sea avenue",
        floor: "01",
        unit: "09",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "ACRA",
      appointmentDate: "09/05/2019",
      withdrawalDate: "07/10/2019"
    },
    {
      name: "THP XZY PHHYE (XZIXIPIYE)",
      id: "S2015015G",
      nationality: "SINGAPORE citizen",
      address: {
        type: "foreign",
        address1: "AFSDSDFSDAFFF",
        address2: "AFDFDFDFDFDFDFDFDFD"
      },
      addressSource: "ACRA",
      appointmentDate: "11/08/2017",
      withdrawalDate: "11/08/2017"
    },
    {
      name: "YIX YHYEXHYE",
      id: "S7486133D",
      nationality: "CHINESE",
      address: {
        type: "local",
        streetName: "sea avenue",
        postalCode: "424242",
        houseNumber: "20b"
      },
      addressSource: "ACRA",
      appointmentDate: "09/05/2019",
      withdrawalDate: "07/10/2019"
    },
    {
      name: "SPIIZXVIIZX",
      id: "FDGFDGFDG",
      nationality: "AMERICAN SAMOA",
      address: {
        type: "foreign",
        address1: "GFDGFDG",
        address2: "FDGFDG"
      },
      addressSource: "ACRA",
      appointmentDate: "11/08/2017",
      withdrawalDate: "11/08/2017"
    }
  ],

  managers: [
    {
      name: "YZYZ",
      id: "S7074975J",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "ang mo kio avenue 6",
        floor: "12",
        unit: "12",
        postalCode: "560646",
        houseNumber: "646",
        buildingName: "ANG MO KIO 61",
        invalidReason: "ACRA mail to this address was returned undelivered on 28/12/2018."
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
    },
    {
      name: "HY XHIIXZETZHT HTHY E",
      id: "S7501116D",
      nationality: "SINGAPORE P.R.",
      address: {
        type: "local",
        streetName: "woodlands drive 16",
        floor: "06",
        unit: "70",
        postalCode: "730585",
        houseNumber: "585"
      },
      addressSource: "ACRA",
      appointmentDate: "19/07/2017"
    },
    {
      name: "AHDPECRSJT",
      id: "S2015030J",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "central boulevard",
        postalCode: "018968",
        houseNumber: "2a"
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
    },
    {
      name: "XIX XHHY HUI IZYXHYU",
      id: "S201S1703042F5030J",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "tampines street 12",
        floor: "08",
        unit: "23",
        postalCode: "521156",
        houseNumber: "156"
      },
      addressSource: "ACRA",
      appointmentDate: "21/05/2019"
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
      appointmentDate: "11/08/2017"
    },
    {
      name: "IHUXHHHIZHS J",
      id: "S8891086I",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "anson road shell service station",
        postalCode: "079901",
        houseNumber: "5",
        invalidReason: "ACRA mail to this address was returned undelivered on 01/01/2019."
      },
      addressSource: "ACRA",
      appointmentDate: "17/07/2017",
      withdrawalDate: "19/07/2017"
    },
    {
      name: "HY XHIIXZETZHT HTHY E",
      id: "S7501116D",
      nationality: "SINGAPORE P.R.",
      address: {
        type: "local",
        streetName: "woodlands drive 16",
        floor: "06",
        unit: "70",
        postalCode: "730585",
        houseNumber: "585"
      },
      addressSource: "ACRA",
      appointmentDate: "12/07/2017",
      withdrawalDate: "19/07/2017"
    }
  ],

  employees: [
    {
      name: "NAYANA",
      id: "S2015045I",
      nationality: "Singapore citizen",
      address: {
        type: "local",
        streetName: "bedok reservoir crescent",
        postalCode: "474747",
        houseNumber: "747d",
        invalidReason: "ACRA mail to this address was returned undelivered on 04/05/2019."
      },
      addressSource: "ACRA",
      appointmentDate: "12/05/2017"
    },
    {
      name: "ZHXIYEZ EHHSH",
      id: "S5445275F",
      nationality: "SINGAPORE CITIZEN",
      address: {
        type: "local",
        streetName: "tai seng link",
        postalCode: "534101",
        houseNumber: "6",
        invalidReason: "ACRA mail to this address was returned undelivered on 18/10/2019."
      },
      addressSource: "ACRA",
      appointmentDate: "12/05/2017",
      withdrawalDate: "31/01/2019"
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
  changeOfNameDate?: string;
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
