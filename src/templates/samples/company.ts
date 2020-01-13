import { Document } from "@govtechsg/decentralized-renderer-react-components";
import { Activity, AddressType, ForeignAddress, LocalAddress } from "./types";
import { qrCode, stamp, tanYongTatSignature } from "./common";

type CompanyAddress = LocalAddress | ForeignAddress;
interface Shareholder {
  name: string;
  id: string;
  nationality: string;
  address?: AddressType;
  addressSource: string;
  addressChanged: string;
}
interface ShareholderValue {
  ordinary: string;
  currency: string;
}
export interface AcraSharedCompanyProfile extends Document {
  registrationNumber: string;
  companyName: string;
  companyType: string;
  formerName?: string;
  status: string;
  statusDate: string;
  address: CompanyAddress;
  dateOfAddress: string;
  dateOfLastAGM?: string;
  dateOfLastAR?: string;
  fye?: string;

  activities: [Activity?, Activity?];

  capitals?: {
    type: "issued" | "paid-up";
    issuerSharedCapital: string;
    sharesNumber: string;
    currency: string;
    shareType: string;
  }[];

  shares?: { value: string; currency: string }[];
  audits?: { name: string }[];

  charges?: {
    chargeNumber: string;
    dateRegistered: string;
    currency?: string;
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
    dqFrom?: string;
    alt?: {
      name: string;
      address?: AddressType;
      id: string;
      nationality: string;
      appointmentDate: string;
    };
  }[];

  shareholders?: (Shareholder & ShareholderValue)[];
  shareholderGroups?: ({
    group: string;
    shareholders: Shareholder[];
  } & ShareholderValue)[];

  judicialManagers?: { name: string; address?: AddressType }[];
  liquidators?: { name: string; address?: AddressType }[];
  provisionalLiquidators?: { name: string; address?: AddressType }[];
  receivers?: { name: string; address?: AddressType }[];

  receiptDate: string;
  receiptNumber: string;

  signatureName: string;
  signature: string;
  stamp: string;
  authenticationNumber: string;
  qrCode: string;
}

export interface AcraCompanyProfile extends AcraSharedCompanyProfile {
  incorporationDate: string;
}

export interface AcraRedomCompanyProfile extends AcraSharedCompanyProfile {
  registrationTransferDate: string;
  originalIncorporationCountry: string;
  originalIncorporationDate: string;
  deregistrationName: string;
  registrationHistory?: {
    country: string;
    date: string;
    nameOnDeregistration: string;
  }[];
  registrationCondition?: {
    conditions?: string[];
    amalgamatedFrom: string;
    amalgamatedWith: string;
    amalgamatedToForm: string;
  };
}

const sharedCompanyProfile: AcraSharedCompanyProfile = {
  registrationNumber: "201900473R",
  companyName: "BP ALL SECTIONS PTE. LTD.",
  formerName: "",
  companyType: "EXEMPT PRIVATE COMPANY LIMITED BY SHARES",
  status: "Live Company",
  statusDate: "15/11/2019",
  address: {
    type: "local",
    streetName: "SERANGOON AVENUE 4",
    postalCode: "550223",
    houseNumber: "223",
    buildingName: "BOUNDARY VILLE",
    invalidReason: "ACRA MAIL TO THIS ADDRESS WAS RETURNED UNDELIVERED ON 16/02/2017."
  },
  dateOfAddress: "15/11/2019",

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
      issuerSharedCapital: "200",
      sharesNumber: "200",
      currency: "Singapore, Dollars",
      shareType: "Ordinary"
    },
    {
      type: "issued",
      issuerSharedCapital: "100",
      sharesNumber: "100",
      currency: "UNITED STATES OF AMERICA, DOLLARS",
      shareType: "Ordinary"
    },
    {
      type: "paid-up",
      issuerSharedCapital: "200",
      sharesNumber: "",
      currency: "Singapore, Dollars",
      shareType: "Ordinary"
    },
    {
      type: "paid-up",
      issuerSharedCapital: "100",
      sharesNumber: "",
      currency: "UNITED STATES OF AMERICA, DOLLARS",
      shareType: "Ordinary"
    }
  ],

  shares: [
    { value: "1000", currency: "AUSTRALIA, DOLLARS" },
    { value: "100", currency: "Singapore, DOLLARS" }
  ],

  audits: [{ name: "HTTIHXHU & THUJHH" }, { name: "ASFDHSFH" }],

  charges: [
    {
      chargeNumber: "C201907131",
      dateRegistered: "15/11/2019",
      amountSecured: "All Monies",
      chargees: "YASH"
    },
    {
      chargeNumber: "C201907132",
      dateRegistered: "15/11/2019",
      currency: "SINGAPORE, DOLLARS",
      amountSecured: "1000000",
      chargees: "lee  JIAYING"
    }
  ],

  representatives: [
    {
      name: "WALTER V. CAMPBELL",
      id: "S9741729F",
      nationality: "SINGAPORE CITIZEN",
      positionHeld: "Director",
      dqFrom: "21/03/2003",
      address: {
        type: "local",
        streetName: "SERANGOON AVENUE 4",
        postalCode: "550223",
        houseNumber: "223",
        buildingName: "BOUNDARY VILLE"
      },
      addressSource: "ACRA",
      appointmentDate: "15/11/2019",
      alt: {
        name: "Edgar m. dean",
        id: "S8864282A",
        nationality: "SINGAPORE CITIZEN",
        appointmentDate: "15/11/2019",
        address: {
          type: "local",
          streetName: "SERANGOON AVENUE 4",
          postalCode: "550223",
          houseNumber: "223",
          buildingName: "BOUNDARY VILLE",
          invalidReason: "ACRA mail to this address was returned undelivered on 22/12/2017."
        }
      }
    },
    {
      name: "HHTI",
      id: "G4957416P",
      nationality: "AUSTRIAN",
      positionHeld: "Chief Executive Officer",
      address: {
        type: "local",
        streetName: "pasir pajang hill",
        floor: "532",
        unit: "w54",
        postalCode: "118890",
        houseNumber: "83"
      },
      addressSource: "ACRA",
      appointmentDate: "01/01/2015"
    },
    {
      name: "SUSAN M. RUSSELL",
      id: "S8264828C",
      nationality: "SINGAPORE CITIZEN",
      positionHeld: "Secretary",
      address: {
        type: "local",
        streetName: "SERANGOON AVENUE 4",
        postalCode: "550223",
        houseNumber: "223",
        buildingName: "BOUNDARY VILLE",
        invalidReason: "ACRA mail to this address was returned undelivered on 14/04/2018."
      },
      addressSource: "ACRA",
      appointmentDate: "15/11/2019"
    }
  ],

  shareholders: [
    {
      name: "BP ALL sections PTE. LTD.",
      id: "201900473R",
      nationality: "SINGAPORE",
      addressChanged: "",
      address: {
        type: "local",
        streetName: "SERANGOON AVENUE 4",
        postalCode: "550223",
        houseNumber: "223",
        buildingName: "BOUNDARY VILLE",
        invalidReason: "ACRA mail to this address was returned undelivered on 17/12/2018."
      },
      addressSource: "ACRA",
      ordinary: "100",
      currency: "Singapore, Dollars"
    },
    {
      name: "HOWARD K. RAYBURN",
      id: "S8149331F",
      nationality: "SINGAPORE CITIZEN",
      addressChanged: "",
      address: {
        type: "local",
        streetName: "SERANGOON AVENUE 4",
        postalCode: "550223",
        houseNumber: "223",
        buildingName: "BOUNDARY VILLE"
      },
      addressSource: "ACRA",
      ordinary: "50",
      currency: "Singapore, Dollars"
    },
    {
      name: "MARY R. WARFORD",
      id: "S8222018F",
      nationality: "SINGAPORE CITIZEN",
      addressChanged: "",
      address: {
        type: "local",
        streetName: "SERANGOON AVENUE 4",
        postalCode: "550223",
        houseNumber: "223",
        buildingName: "BOUNDARY VILLE"
      },
      addressSource: "ACRA",
      ordinary: "100",
      currency: "UNITED STATES OF AMERICA, DOLLARS"
    }
  ],

  shareholderGroups: [
    {
      group: "A",
      ordinary: "50",
      currency: "SINGAPORE, DOLLARS",
      shareholders: [
        {
          name: "HOWARD K. RAYBURN",
          id: "S8149331F",
          nationality: "SINGAPORE CITIZEN",
          addressChanged: "",
          address: {
            type: "local",
            streetName: "SERANGOON AVENUE 4",
            postalCode: "550223",
            houseNumber: "223",
            buildingName: "BOUNDARY VILLE",
            invalidReason: "ACRA mail to this address was returned undelivered on 28/01/2019."
          },
          addressSource: "ACRA"
        },
        {
          name: "MARY R. WARFORD",
          id: "S8222018F",
          nationality: "SINGAPORE CITIZEN",
          addressChanged: "",
          address: {
            type: "local",
            streetName: "SERANGOON AVENUE 4",
            postalCode: "550223",
            houseNumber: "223",
            buildingName: "BOUNDARY VILLE"
          },
          addressSource: "ACRA"
        }
      ]
    }
  ],

  judicialManagers: [
    {
      name: "ivy",
      address: {
        type: "local",
        streetName: "changi BUSINESS PARK CENTRAL 1",
        postalCode: "486038",
        floor: "10",
        unit: "22",
        houseNumber: "5",
        buildingName: "changi city point",
        invalidReason: "ACRA mail to this address was returned undelivered on 04/05/2019."
      }
    }
  ],

  liquidators: [
    {
      name: "The Insolvency and Public Trustee's office",
      address: {
        type: "local",
        streetName: "maxwell road",
        postalCode: "069118",
        floor: "06",
        unit: "11",
        houseNumber: "45",
        buildingName: "the ura center",
        invalidReason: "ACRA mail to this address was returned undelivered on 06/10/2019."
      }
    }
  ],

  provisionalLiquidators: [
    {
      name: "HHYE HZUT)UHSZHJHU( eyhs",
      address: {
        type: "local",
        streetName: "upper boon keng road",
        postalCode: "381003",
        floor: "11",
        unit: "1111",
        houseNumber: "3a",
        buildingName: "kallan heights",
        invalidReason: "ACRA mail to this address was returned undelivered on 22/11/2019."
      }
    }
  ],

  receivers: [
    {
      name: "The Insolvency and Public Trustee's office",
      address: {
        type: "local",
        streetName: "maxwell road",
        postalCode: "069118",
        floor: "06",
        unit: "11",
        houseNumber: "45",
        buildingName: "the ura center",
        invalidReason: "ACRA mail to this address was returned undelivered on 29/12/2019."
      }
    },
    {
      name: "The Insolvency and Public Trustee's office",
      address: {
        type: "local",
        streetName: "maxwell road",
        postalCode: "069118",
        floor: "06",
        unit: "11",
        houseNumber: "45",
        buildingName: "the ura center"
      }
    }
  ],

  receiptNumber: "ACRAXXXXXXXXXX06",
  receiptDate: "22/10/2019",
  signatureName: "Tan Yong Tat",
  signature: tanYongTatSignature,

  stamp,
  qrCode,
  authenticationNumber: "IXXXXXXX49"
};

export const companyProfile: AcraCompanyProfile = {
  ...sharedCompanyProfile,
  incorporationDate: "08/08/2016"
};

export const redomCompanyProfile: AcraRedomCompanyProfile = {
  ...sharedCompanyProfile,
  registrationNumber: "201900473R",
  companyName: "bp all sections pte ltd",
  companyType: "exempt private company limited by shares",
  status: "Live Company",
  statusDate: "15/11/2019",
  registrationTransferDate: "15/11/2019",
  originalIncorporationCountry: "armenia",
  originalIncorporationDate: "16/09/2019",
  deregistrationName: "safasfaf",

  registrationHistory: [
    {
      country: "afghanistan",
      date: "01/09/2019",
      nameOnDeregistration: "stertert"
    },
    {
      country: "AMERICAN samoa",
      date: "04/09/2019",
      nameOnDeregistration: "TSDSGSG"
    },
    {
      country: "BAHAMAS",
      date: "05/09/2019",
      nameOnDeregistration: "WDFFFC"
    }
  ],
  registrationCondition: {
    conditions: ["sdfsdf"],
    amalgamatedFrom: "asygo STORE PTE. LTD. (201900357Z), NAVANA PTE. LTD. (201900361G)",
    amalgamatedWith: "raffle CLASS DESIGNERS PRIVATE LIMITED (201900346R)",
    amalgamatedToForm: "201900346R"
  }
};

export interface AcraCompanyCertificate extends Document {
  companyName: string;
  changeOfNameDate?: string;
  uen: string;
  incorporationDate: string;
  companyType: string;
  formerNames?: { name: string; effectiveFrom: string }[];
  receiptNumber: string;
  receiptDate: string;
  signatureName: string;
  signature: string;
  stamp: string;
}

export const companyCertificate: AcraCompanyCertificate = {
  companyName: "Lucky Company Pte. LTD.",
  changeOfNameDate: "01/10/2016",
  uen: "201600008M",
  incorporationDate: "08/08/2016",
  companyType: "Limited exempt private company",
  formerNames: [
    {
      name: "Unlucky Company Pte. ltd.",
      effectiveFrom: "08/08/2016"
    }
  ],
  receiptNumber: "ACRAXXXXXXXXXX06",
  receiptDate: "22/10/2019",
  signatureName: "Tan Yong Tat",
  signature: tanYongTatSignature,
  stamp
};

export interface AcraForeignCompanyCertificate extends Document {
  companyName: string;
  changeOfNameDate?: string;
  uen: string;
  country: string;
  incorporationDate: string;
  formerNames?: { name: string; effectiveFrom: string }[];
  receiptNumber: string;
  receiptDate: string;
  signatureName: string;
  signature: string;
  stamp: string;
}

export const foreignCompanyCertificate: AcraForeignCompanyCertificate = {
  companyName: "Lucky Services Limited",
  changeOfNameDate: "01/10/2016",
  uen: "T16000008M",
  country: "France",
  incorporationDate: "08/08/2016",
  formerNames: [
    {
      name: "Unlucky Services Limited",
      effectiveFrom: "08/08/2016"
    }
  ],
  receiptNumber: "ACRAXXXXXXXXXX06",
  receiptDate: "22/10/2019",
  signatureName: "Tan Yong Tat",
  signature: tanYongTatSignature,
  stamp
};
