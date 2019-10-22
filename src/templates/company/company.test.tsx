import React from "react";
import { render } from "@testing-library/react";
import { companyCertificate } from "../sample";
import { Company } from "./company";

describe("company", () => {
  describe("capitals", () => {
    it("should hide capital header if there is no capital", () => {
      const { queryByText } = render(
        <Company document={{ ...companyCertificate, capitals: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Capital :")).toBeNull();
    });
    it("should display capital header if there is one capital of type issued", () => {
      const { queryByText } = render(
        <Company
          document={{
            ...companyCertificate,
            capitals: [{ type: "issued", shareType: "", currency: "", numberOfShares: "", issuerSharedCapital: "" }]
          }}
          handleObfuscation={() => 0}
        />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Capital :")).toBeTruthy();
    });
    it("should display capital header if there is one capital of type paid-up", () => {
      const { queryByText } = render(
        <Company
          document={{
            ...companyCertificate,
            capitals: [{ type: "paid-up", shareType: "", currency: "", numberOfShares: "", issuerSharedCapital: "" }]
          }}
          handleObfuscation={() => 0}
        />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Capital :")).toBeTruthy();
    });
  });
  describe("audits", () => {
    it("should hide audit header if there is no audit", () => {
      const { queryByText } = render(
        <Company document={{ ...companyCertificate, audits: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Audit firms :")).toBeNull();
    });
  });
  describe("charges", () => {
    it("should hide charge header if there is no charge", () => {
      const { queryByText } = render(
        <Company document={{ ...companyCertificate, charges: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Charges :")).toBeNull();
    });
  });
  describe("representatives", () => {
    it("should hide representative header if there is no representatives", () => {
      const { queryByText } = render(
        <Company document={{ ...companyCertificate, representatives: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Officers/Authorised Representative(s) :")).toBeNull();
    });
  });
  describe("shareholders", () => {
    it("should hide shareholder header if there is no shareholders", () => {
      const { queryByText } = render(
        <Company document={{ ...companyCertificate, shareholders: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Shareholder(s) :")).toBeNull();
    });
  });
});
