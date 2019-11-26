/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { LpProfile } from "./lp.profile";
import { lpProfile } from "../samples";

describe("lp", () => {
  describe("managers", () => {
    it("should hide managers header if there is no manager", () => {
      const { queryByText } = render(
        <LpProfile document={{ ...lpProfile, managers: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Manager(s) :")).toBeNull();
    });
    it("should display managers header if there is are managers", () => {
      const { queryByText } = render(<LpProfile document={{ ...lpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Particulars of Manager(s) :")).toBeTruthy();
    });
  });
  describe("partners", () => {
    it("should hide partners header if there is no partners", () => {
      const { queryByText } = render(
        <LpProfile document={{ ...lpProfile, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Existing Partner(s) :")).toBeNull();
    });
    it("should display partners header if there is are partners", () => {
      const { queryByText } = render(<LpProfile document={{ ...lpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Existing Partner(s) :")).toBeTruthy();
    });
  });
  describe("withdrawn partners", () => {
    it("should hide withdrawn partners header if there is no withdrawn partners", () => {
      const { queryByText } = render(
        <LpProfile document={{ ...lpProfile, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Partner(s) :")).toBeNull();
    });
    it("should display withdrawn partners header if there is are withdrawn  partners", () => {
      const { queryByText } = render(<LpProfile document={{ ...lpProfile }} handleObfuscation={() => 0} />);
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Withdrawn Partner(s) :")).toBeTruthy();
    });
  });
  describe("obfuscation", () => {
    describe("partners", () => {
      it("should provide field partners[0].id when clicking on first partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LpProfile document={{ ...lpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].id");
      });
      it("should provide field partners[0].nationality when clicking on first partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LpProfile document={{ ...lpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].nationality");
      });
      it("should provide field partners[0].address when clicking on first partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LpProfile document={{ ...lpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].address");
      });
      it("should provide field partners[1].id when clicking on first partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LpProfile
            document={{
              ...lpProfile,
              partners: [lpProfile.partners![3], lpProfile.partners![0]]
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
      it("should provide field partners[3].id when clicking on first withdrawn partner id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LpProfile document={{ ...lpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[3].id");
      });
      it("should provide field partners[3].nationality when clicking on first withdrawn partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LpProfile document={{ ...lpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[3].nationality");
      });
      it("should provide field partners[3].address when clicking on first withdrawn partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <LpProfile document={{ ...lpProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^withdrawn-partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[3].address");
      });
    });
  });
});
