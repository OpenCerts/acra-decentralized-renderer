import { Business } from "./business";
import { businessCertificate } from "../sample";
import { render } from "@testing-library/react";
import React from "react";

describe("business", () => {
  describe("particulars", () => {
    it("should display invalid address when place of business is invalid", () => {
      const { queryByText } = render(
        <Business
          document={{
            ...businessCertificate,
            businessPlace: {
              ...businessCertificate.businessPlace,
              invalid: "ACRA MAIL TO THIS ADDRESS WAS RETURNED UNDELIVERED ON 16/02/2017."
            }
          }}
          handleObfuscation={() => 0}
        />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA MAIL TO THIS ADDRESS WAS RETURNED UNDELIVERED ON 16/02/2017.")).toBeTruthy();
    });
  });
  describe("representatives", () => {
    it("should hide representative header if there is no representative", () => {
      const { queryByText } = render(
        <Business document={{ ...businessCertificate, representatives: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Authorised Representative(s) :")).toBeNull();
    });
  });
  describe("partners", () => {
    it("should hide partners header if there is no partner", () => {
      const { queryByText } = render(
        <Business document={{ ...businessCertificate, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Existing Sole-Proprietor(s) / Partner(s) :")).toBeNull();
    });
  });
  describe("withdrawn partners", () => {
    it("should hide withdrawn partners header if there is no withdrawn partner", () => {
      const { queryByText } = render(
        <Business document={{ ...businessCertificate, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Partner(s) :")).toBeNull();
    });
  });
});
