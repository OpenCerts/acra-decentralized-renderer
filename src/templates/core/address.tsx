import { AddressType, isLocalAddress } from "../sample";
import React, { FunctionComponent } from "react";

export const Address: FunctionComponent<{ address: AddressType }> = ({ address }) => {
  if (isLocalAddress(address)) {
    return (
      <>
        {address.houseNumber} {address.streetName}
        {address.floor && address.unit ? (
          <>
            <br />#{address.floor}-{address.unit}
          </>
        ) : null}
        {address.buildingName ? (
          <>
            <br />#{address.buildingName}
          </>
        ) : null}
        <br />
        SINGAPORE ({address.postalCode})
      </>
    );
  }
  throw new Error("Not handled");
};
