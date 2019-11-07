/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Lp } from "./lp";
import { lpCertificate } from "../samples";

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
  describe("obfuscation", () => {
    describe("partners", () => {
      it("should provide field partners[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Lp document={{ ...lpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].id");
      });
      it("should provide field partners[0].nationality when clicking on first partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Lp document={{ ...lpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].nationality");
      });
      it("should provide field partners[0].address when clicking on first partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Lp document={{ ...lpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].address");
      });
      it("should provide field partners[1].id when clicking on first partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Lp
            document={{
              ...lpCertificate,
              partners: [lpCertificate.partners![2], lpCertificate.partners![0]]
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
      it("should provide field partners[2].id when clicking on first withdrawn partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Lp document={{ ...lpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[2].id");
      });
      it("should provide field partners[2].nationality when clicking on first withdrawn partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Lp document={{ ...lpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[2].nationality");
      });
      it("should provide field partners[2].address when clicking on first withdrawn partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <Lp document={{ ...lpCertificate }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[2].address");
      });
    });
  });
});
