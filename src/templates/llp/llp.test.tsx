/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Llp } from "./llp";
import { llpCertificate } from "../samples";
import { fireEvent, render } from "@testing-library/react";
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
  describe("obfuscation", () => {
    describe("partners", () => {
      it("should provide field partners[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp document={{ ...llpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].id");
      });
      it("should provide field partners[0].nationality when clicking on first partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp document={{ ...llpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].nationality");
      });
      it("should provide field partners[0].address when clicking on first partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp document={{ ...llpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].address");
      });
      it("should provide field partners[1].id when clicking on first partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp
            document={{
              ...llpCertificate,
              partners: [llpCertificate.partners![1], llpCertificate.partners![0]]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[1].id");
      });
    });
    describe("managers", () => {
      it("should provide field managers[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp document={{ ...llpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[0].id");
      });
      it("should provide field managers[0].nationality when clicking on first manager nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp document={{ ...llpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[0].nationality");
      });
      it("should provide field managers[0].address when clicking on first manager address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp document={{ ...llpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[0].address");
      });
      it("should provide field managers[1].id when clicking on first manager id which is in second position in list of managers", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Llp
            document={{
              ...llpCertificate,
              managers: [llpCertificate.managers![1], llpCertificate.managers![0]]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^manager-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("managers[1].id");
      });
    });
  });
});
