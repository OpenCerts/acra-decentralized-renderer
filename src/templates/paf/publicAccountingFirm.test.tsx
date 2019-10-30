import React from "react";
import { render } from "@testing-library/react";
import { PublicAccountingFirm } from "./publicAccountingFirm";
import { publicAccountingFirmCertificate } from "../sample";

describe("firm", () => {
  describe("partners", () => {
    it("should hide partners header if there is no partner", () => {
      const { queryByText } = render(
        <PublicAccountingFirm document={{ ...publicAccountingFirmCertificate, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("PARTICULARS OF EXISTING SOLE-PROPRIETOR/PARTNER(S) :")).toBeNull();
    });
  });
  describe("withdrawn managers", () => {
    it("should hide withdrawn partners header if there is no withdrawn partner", () => {
      const { queryByText } = render(
        <PublicAccountingFirm document={{ ...publicAccountingFirmCertificate, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("PARTICULARS OF EXISTING SOLE-PROPRIETOR/PARTNER(S) :")).toBeNull();
    });
  });
});
