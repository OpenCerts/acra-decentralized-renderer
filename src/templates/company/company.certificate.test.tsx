/* eslint-disable jest/no-truthy-falsy */
import { companyCertificate } from "../samples";
import { render } from "@testing-library/react";
import React from "react";
import { CompanyCertificate } from "./company.certificate";

describe("company certificate", () => {
  describe("changeOfNameDate", () => {
    it("should hide change of name date section when there is no change of name date available", () => {
      const { queryByText } = render(
        <CompanyCertificate
          document={{
            ...companyCertificate,
            changeOfNameDate: undefined
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText(/.*name change effective from/)).toBeNull();
    });
    it("should display change of name date section when there is change of name date available", () => {
      const { queryByText } = render(
        <CompanyCertificate
          document={{
            ...companyCertificate,
            changeOfNameDate: "10/10/2012"
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText(/.*name change effective from 10\/10\/2012/)).toBeTruthy();
    });
  });

  describe("formers", () => {
    it("should hide formers names section when there is no former names available", () => {
      const { queryByText } = render(
        <CompanyCertificate
          document={{
            ...companyCertificate,
            formerNames: []
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("The company was formerly known as:")).toBeNull();
    });
  });
});
