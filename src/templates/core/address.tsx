import { AddressType, isLocalAddress } from "../sample";
import React, { FunctionComponent } from "react";
import { ObfuscatableValue } from "@govtechsg/decentralized-renderer-react-components";

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

export const ObfuscatableAddress: FunctionComponent<{
  address: AddressType;
  editable: boolean;
  onObfuscationRequested?: () => void;
}> = ({ address, editable, onObfuscationRequested }) => {
  if (isLocalAddress(address)) {
    return (
      <>
        {editable ? (
          <ObfuscatableValue
            editable={editable}
            value={`${address.houseNumber} ${address.streetName}`}
            onObfuscationRequested={onObfuscationRequested}
          />
        ) : (
          <>
            {address.houseNumber} {address.streetName}
          </>
        )}
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
