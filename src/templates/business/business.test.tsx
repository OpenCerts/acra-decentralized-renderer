/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Business } from "./business";
import { businessCertificate } from "../samples";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

describe("business", () => {
  describe("particulars", () => {
    it("should display invalid address when place of business is invalid", () => {
      const { queryByText } = render(
        <Business
          document={{
            ...businessCertificate,
            businessPlace: {
              type: "local",
              streetName: "ABC ROAD",
              floor: "08",
              unit: "08",
              postalCode: "888888",
              houseNumber: "888",
              buildingName: "ABC BUILDING",
              Invalidaddresstag: "A1"
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

  describe("obfuscation", () => {
    describe("representatives", () => {
      it("should provide field representatives[0].id when clicking on first representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].id");
      });
      it("should provide field representatives[0].nationality when clicking on first representative nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].nationality");
      });
      it("should provide field representatives[0].address when clicking on first representative address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].address");
      });
      it("should provide field representatives[2].id when there are 3 representatives and clicking on last representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business
            document={{
              ...businessCertificate,
              representatives: [
                businessCertificate.representatives![0],
                businessCertificate.representatives![0],
                businessCertificate.representatives![0]
              ]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-id/i)[2].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[2].id");
      });
    });
    describe("partners", () => {
      it("should provide field partners[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].id");
      });
      it("should provide field partners[0].nationality when clicking on first partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].nationality");
      });
      it("should provide field partners[0].address when clicking on first partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].address");
      });
      it("should provide field partners[1].id when clicking on first partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business
            document={{
              ...businessCertificate,
              partners: [businessCertificate.partners![1], businessCertificate.partners![0]]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[1].id");
      });
    });
    describe("withdrawn partners", () => {
      it("should provide field partners[1].id when clicking on first withdrawn partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/withdrawn-partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[1].id");
      });
      it("should provide field partners[1].nationality when clicking on first withdrawn partner nationality which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/withdrawn-partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[1].nationality");
      });
      it("should provide field partners[1].address when clicking on first withdrawn partner address which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Business document={{ ...businessCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/withdrawn-partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[1].address");
      });
    });
  });
});
