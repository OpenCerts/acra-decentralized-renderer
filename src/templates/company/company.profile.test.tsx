/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { companyProfile } from "../samples";
import { SharedCompanyProfile } from "./sharedCompany.profile";

describe("redom and normal companies", () => {
  describe("capitals", () => {
    it("should hide capital header if there is no capital", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, capitals: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Capital :")).toBeNull();
    });
    it("should display capital header if there is one capital of type issued", () => {
      const { queryByText } = render(
        <SharedCompanyProfile
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
        <SharedCompanyProfile
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
        <SharedCompanyProfile document={{ ...companyProfile, audits: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Audit Firms :")).toBeNull();
    });
    it("should display audit header if there is audit", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Audit Firms :")).toBeTruthy();
    });
  });
  describe("charges", () => {
    it("should hide charge header if there is no charge", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, charges: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Charges :")).toBeNull();
    });
    it("should display charge header if there is charge", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Charges :")).toBeTruthy();
    });
  });
  describe("representatives", () => {
    it("should hide representative header if there is no representatives", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, representatives: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Officers/Authorised Representative(s) :")).toBeNull();
    });
    it("should display representative header if there is representatives", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Officers/Authorised Representative(s) :")).toBeTruthy();
    });
    it("should display dq next to name when representative is dq", () => {
      const { getAllByTestId } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      expect(getAllByTestId(/representative-name/i)[0]?.textContent).toStrictEqual("WALTER V. CAMPBELLDQ");
      expect(
        "DQ - The above person has been disqualified from acting as a director of this company from 21/03/2003."
        // eslint-disable-next-line jest/no-truthy-falsy
      ).toBeTruthy();
    });
  });
  describe("shareholders", () => {
    it("should hide shareholder header if there is no shareholders and no shareholders groups", () => {
      const { queryByText } = render(
        <SharedCompanyProfile
          document={{ ...companyProfile, shareholders: [], shareholderGroups: [] }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("Shareholder(s) :")).toBeNull();
    });
    it("should display shareholder header if there is shareholders and no shareholders groups", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, shareholderGroups: [] }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Shareholder(s) :")).toBeTruthy();
    });
    it("should display shareholder header if there is no shareholders and there is shareholders groups", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, shareholders: [] }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Shareholder(s) :")).toBeTruthy();
    });
    it("should display shareholder groups", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Group Share : A (Shares co-owned by shareholders listed under this group)")).toBeTruthy();
    });
  });
  describe("shares", () => {
    it("should hide shares header if there is no shares", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, shares: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("COMPANY HAS THE FOLLOWING ORDINARY SHARES HELD AS TREASURY SHARES")).toBeNull();
    });
    it("should display shares  header if there is shares", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("COMPANY HAS THE FOLLOWING ORDINARY SHARES HELD AS TREASURY SHARES")).toBeTruthy();
    });
  });
  describe("judicial managers", () => {
    it("should hide judicial managers header if there is no judicial managers", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, judicialManagers: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Judicial Manager(s)")).toBeNull();
    });
    it("should display judicial managers  header if there is judicial managers", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Judicial Manager(s)")).toBeTruthy();
    });
  });
  describe("liquidators", () => {
    it("should hide liquidators header if there is no liquidators", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, liquidators: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Liquidator(s)")).toBeNull();
    });
    it("should display liquidators  header if there is liquidators", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Liquidator(s)")).toBeTruthy();
    });
  });
  describe("provisional liquidators", () => {
    it("should hide provisional liquidators header if there is no provisional liquidators", () => {
      const { queryByText } = render(
        <SharedCompanyProfile
          document={{ ...companyProfile, provisionalLiquidators: [] }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("Provisional Liquidator(s)")).toBeNull();
    });
    it("should display provisional liquidators  header if there is provisional liquidators", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Provisional Liquidator(s)")).toBeTruthy();
    });
  });
  describe("receivers", () => {
    it("should hide receivers header if there is no receivers", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile, receivers: [] }} handleObfuscation={() => 0} />
      );
      expect(queryByText("Receiver(s)")).toBeNull();
    });
    it("should display receivers  header if there is receivers", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Receiver(s)")).toBeTruthy();
    });
  });
  describe("invalid address", () => {
    it("should display invalid reason for company address", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA MAIL TO THIS ADDRESS WAS RETURNED UNDELIVERED ON 16/02/2017.")).toBeTruthy();
    });
    it("should display invalid reason for alternative representative", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 22/12/2017.")).toBeTruthy();
    });
    it("should display invalid reason for representative", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 14/04/2018.")).toBeTruthy();
    });
    it("should display invalid reason for shareholder", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 17/12/2018.")).toBeTruthy();
    });
    it("should display invalid reason for shareholder group", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 28/01/2019.")).toBeTruthy();
    });
    it("should display invalid reason for judicial manager", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 04/05/2019.")).toBeTruthy();
    });
    it("should display invalid reason for liquidator", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 06/10/2019.")).toBeTruthy();
    });
    it("should display invalid reason for provisinal liquidator", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 22/11/2019.")).toBeTruthy();
    });
    it("should display invalid reason for receiver", () => {
      const { queryByText } = render(
        <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("ACRA mail to this address was returned undelivered on 29/12/2019.")).toBeTruthy();
    });
  });
  describe("obfuscation", () => {
    describe("representatives", () => {
      it("should provide field representatives[0].id when clicking on first representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].id");
      });
      it("should provide field representatives[0].nationality when clicking on first representative nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].nationality");
      });
      it("should provide field representatives[0].address when clicking on first representative address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/representative-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("representatives[0].address");
      });
      it("should provide field representatives[2].id when there are 3 representatives and clicking on last representative id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <SharedCompanyProfile
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
          <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/shareholder-id/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("shareholders[0].id");
      });
      it("should provide field shareholders[0].nationality when clicking on first shareholder nationality", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/shareholder-nationality/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("shareholders[0].nationality");
      });
      it("should provide field shareholders[0].address when clicking on first shareholder address", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <SharedCompanyProfile document={{ ...companyProfile }} handleObfuscation={handleObfuscation} />
        );
        fireEvent.click(getByTitle(/toggle certificate obfuscation/i)); // click on edit button
        fireEvent.click(getAllByTestId(/shareholder-address/i)[0].children[0]);
        expect(handleObfuscation).toHaveBeenCalledWith("shareholders[0].address");
      });
      it("should provide field shareholders[2].id when there are 3 shareholders and clicking on last shareholder id", () => {
        const handleObfuscation = jest.fn();
        const { getByTitle, getAllByTestId } = render(
          <SharedCompanyProfile
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
