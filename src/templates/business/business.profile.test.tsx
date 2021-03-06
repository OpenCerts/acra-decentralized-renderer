/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BusinessProfile } from "./business.profile";
import { businessProfile } from "../samples";
import { fireEvent, render } from "@testing-library/react";
import React from "react";

describe("business", () => {
  describe("representatives", () => {
    it("should hide representative header if there is no representative", () => {
      const { queryByText } = render(
        <BusinessProfile document={{ ...businessProfile, representatives: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Particulars of Authorised Representative(s) :")).toBeNull();
    });
    it("should display representative header if there are representatives", () => {
      const { queryByText } = render(<BusinessProfile document={{ ...businessProfile }} handleObfuscation={() => 0} />);

      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Particulars of Authorised Representative(s) :")).toBeTruthy();
    });
  });
  describe("partners", () => {
    it("should hide partners header if there is no partner", () => {
      const { queryByText } = render(
        <BusinessProfile document={{ ...businessProfile, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Existing Sole-Proprietor(s) / Partner(s) :")).toBeNull();
    });
    it("should display partner header if there are partners", () => {
      const { queryByText } = render(<BusinessProfile document={{ ...businessProfile }} handleObfuscation={() => 0} />);

      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Existing Sole-Proprietor(s) / Partner(s) :")).toBeTruthy();
    });
  });
  describe("withdrawn partners", () => {
    it("should hide withdrawn partners header if there is no withdrawn partner", () => {
      const { queryByText } = render(
        <BusinessProfile document={{ ...businessProfile, partners: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Withdrawn Partner(s) :")).toBeNull();
    });
    it("should display withdrawn partner header if there are withdrawn partners", () => {
      const { queryByText } = render(<BusinessProfile document={{ ...businessProfile }} handleObfuscation={() => 0} />);

      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Withdrawn Partner(s) :")).toBeTruthy();
    });
  });

  describe("obfuscation", () => {
    describe("representatives", () => {
      it("should provide field representatives[0].id when clicking on first representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].id");
      });
      it("should provide field representatives[0].nationality when clicking on first representative nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].nationality");
      });
      it("should provide field representatives[0].address when clicking on first representative address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].address");
      });
      it("should provide field representatives[2].id when there are 3 representatives and clicking on last representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile
            document={{
              ...businessProfile,
              representatives: [
                businessProfile.representatives![0],
                businessProfile.representatives![0],
                businessProfile.representatives![0]
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
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].id");
      });
      it("should provide field partners[0].nationality when clicking on first partner nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].nationality");
      });
      it("should provide field partners[0].address when clicking on first partner address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/^partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[0].address");
      });
      it("should provide field partners[1].id when clicking on first partner id which is in second position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile
            document={{
              ...businessProfile,
              partners: [businessProfile.partners![6], businessProfile.partners![0]]
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
      it("should provide field partners[5].id when clicking on first withdrawn partner id which is in sixth position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/withdrawn-partner-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[5].id");
      });
      it("should provide field partners[5].nationality when clicking on first withdrawn partner nationality which is in sixth position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/withdrawn-partner-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[5].nationality");
      });
      it("should provide field partners[5].address when clicking on first withdrawn partner address which is in sixth position in list of partners", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <BusinessProfile document={{ ...businessProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/withdrawn-partner-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("partners[5].address");
      });
    });
  });
});
