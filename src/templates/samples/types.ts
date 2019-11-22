export interface Activity {
  name: string;
  description?: string;
}
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
  country: string;
}
export type AddressType = LocalAddress | ForeignAddress;

export const isLocalAddress = (address: any): address is LocalAddress => {
  return address && address.type === "local";
};
export const isForeignAddress = (address: any): address is ForeignAddress => {
  return address && address.type === "foreign";
};
