import { Llp } from "./llp";
import { llpCertificate } from "../sample";
import { render } from "@testing-library/react";
import React from "react";

describe("llp", () => {
  describe("partners", () => {
    it("should hide partners header if there is no partner", () => {
      const { queryByText } = render(
        <Llp document={{ ...llpCertificate, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Partner(s) :")).toBeNull();
    });
  });
  describe("withdrawn partners", () => {
    it("should hide withdrawn partners header if there is no withdrawn partner", () => {
      const { queryByText } = render(
        <Llp document={{ ...llpCertificate, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Partner(s) :")).toBeNull();
    });
  });
  describe("managers", () => {
    it("should hide managers header if there is no manager", () => {
      const { queryByText } = render(
        <Llp document={{ ...llpCertificate, managers: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Manager(s) :")).toBeNull();
    });
  });
  describe("withdrawn managers", () => {
    it("should hide withdrawn managers header if there is no withdrawn manager", () => {
      const { queryByText } = render(
        <Llp document={{ ...llpCertificate, managers: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Manager(s) :")).toBeNull();
    });
  });
  describe("employees", () => {
    it("should hide employees header if there is no employee", () => {
      const { queryByText } = render(
        <Llp document={{ ...llpCertificate, employees: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Public Accounting Employee(s) :")).toBeNull();
    });
  });
  describe("withdrawn employees", () => {
    it("should hide withdrawn employees header if there is no withdrawn employee", () => {
      const { queryByText } = render(
        <Llp document={{ ...llpCertificate, employees: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Public Accounting Employee(s) :")).toBeNull();
    });
  });
});
