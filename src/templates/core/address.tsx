import { AddressType, isForeignAddress, isLocalAddress } from "../samples";
import React, { FunctionComponent } from "react";
import { ObfuscatableValue } from "@govtechsg/decentralized-renderer-react-components";

export const Address: FunctionComponent<{ address?: AddressType }> = ({ address }) => {
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
            <br />
            {address.buildingName}
          </>
        ) : null}
        <br />
        SINGAPORE ({address.postalCode})
      </>
    );
  } else if (isForeignAddress(address)) {
    return (
      <>
        {address.address1}
        <br />
        {address.address2}
        <br />
        {address.country}
      </>
    );
  }
  return null;
};

export const ObfuscatableAddress: FunctionComponent<{
  address?: AddressType;
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
  } else if (isForeignAddress(address)) {
    return (
      <>
        {editable ? (
          <ObfuscatableValue
            editable={editable}
            value={address.address1}
            onObfuscationRequested={onObfuscationRequested}
          />
        ) : (
          address.address1
        )}
        <br />
        {address.address2}
        <br />
        {address.country}
      </>
    );
  }
  return null;
};
