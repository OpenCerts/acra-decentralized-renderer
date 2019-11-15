/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { companyProfile } from "../samples";
import { CompanyProfile } from "./company.profile";

describe("company", () => {
  describe("capitals", () => {
    it("should hide capital header if there is no capital", () => {
      const { queryByText } = render(
        <CompanyProfile document={{ ...companyProfile, capitals: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Capital :")).toBeNull();
    });
    it("should display capital header if there is one capital of type issued", () => {
      const { queryByText } = render(
        <CompanyProfile
          document={{
            ...companyProfile,
            capitals: [{ type: "issued", shareType: "", currency: "", sharesNumber: "", issuerSharedCapital: "" }]
          }}
          handleObfuscation={() => 0}
        />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Capital :")).toBeTruthy();
    });
    it("should display capital header if there is one capital of type paid-up", () => {
      const { queryByText } = render(
        <CompanyProfile
          document={{
            ...companyProfile,
            capitals: [{ type: "paid-up", shareType: "", currency: "", sharesNumber: "", issuerSharedCapital: "" }]
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
        <CompanyProfile document={{ ...companyProfile, audits: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Audit firms :")).toBeNull();
    });
  });
  describe("charges", () => {
    it("should hide charge header if there is no charge", () => {
      const { queryByText } = render(
        <CompanyProfile document={{ ...companyProfile, charges: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Charges :")).toBeNull();
    });
  });
  describe("representatives", () => {
    it("should hide representative header if there is no representatives", () => {
      const { queryByText } = render(
        <CompanyProfile document={{ ...companyProfile, representatives: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Officers/Authorised Representative(s) :")).toBeNull();
    });
  });
  describe("shareholders", () => {
    it("should hide shareholder header if there is no shareholders", () => {
      const { queryByText } = render(
        <CompanyProfile document={{ ...companyProfile, shareholders: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Shareholder(s) :")).toBeNull();
    });
  });
  describe("obfuscation", () => {
    describe("representatives", () => {
      it("should provide field representatives[0].id when clicking on first representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].id");
      });
      it("should provide field representatives[0].nationality when clicking on first representative nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].nationality");
      });
      it("should provide field representatives[0].address when clicking on first representative address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].address");
      });
      it("should provide field representatives[2].id when there are 3 representatives and clicking on last representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile
            document={{
              ...companyProfile,
              representatives: [
                companyProfile.representatives![0],
                companyProfile.representatives![0],
                companyProfile.representatives![0]
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
    describe("shareholders", () => {
      it("should provide field shareholders[0].id when clicking on first shareholder id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/shareholder-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("shareholders[0].id");
      });
      it("should provide field shareholders[0].nationality when clicking on first shareholder nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/shareholder-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("shareholders[0].nationality");
      });
      it("should provide field shareholders[0].address when clicking on first shareholder address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/shareholder-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("shareholders[0].address");
      });
      it("should provide field shareholders[2].id when there are 3 shareholders and clicking on last shareholder id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <CompanyProfile
            document={{
              ...companyProfile,
              shareholders: [
                companyProfile.shareholders![0],
                companyProfile.shareholders![0],
                companyProfile.shareholders![0]
              ]
            }}
            handleObfuscation={handleObfuscation}
          />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/shareholder-id/i)[2].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("shareholders[2].id");
      });
    });
  });
});
