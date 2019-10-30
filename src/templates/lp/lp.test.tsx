import React from "react";
import { render } from "@testing-library/react";
import { Lp } from "../lp/lp";
import { lpCertificate } from "../sample";

describe("lp", () => {
  describe("managers", () => {
    it("should hide managers header if there is no manager", () => {
      const { queryByText } = render(<Lp document={{ ...lpCertificate, managers: [] }} handleObfuscation={() => 0} />);
      expect(queryByText("Particulars of Manager(s) :")).toBeNull();
    });
  });
  describe("partners", () => {
    it("should hide partners header if there is no partners", () => {
      const { queryByText } = render(<Lp document={{ ...lpCertificate, partners: [] }} handleObfuscation={() => 0} />);
      expect(queryByText("Existing Partner(s) :")).toBeNull();
    });
  });
  describe("withdrawn partners", () => {
    it("should hide withdrawn partners header if there is no withdrawn partners", () => {
      const { queryByText } = render(<Lp document={{ ...lpCertificate, partners: [] }} handleObfuscation={() => 0} />);
      expect(queryByText("Withdrawn Partner(s) :")).toBeNull();
    });
  });
});
