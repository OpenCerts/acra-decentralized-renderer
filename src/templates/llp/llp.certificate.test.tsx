/* eslint-disable jest/no-truthy-falsy */
import { llpCertificate } from "../samples";
import { render } from "@testing-library/react";
import React from "react";
import { LlpCertificate } from "./llp.certificate";

describe("llp certificate", () => {
  describe("changeOfNameDate", () => {
    it("should hide change of name date section when there is no change of name date available", () => {
      const { queryByText } = render(
        <LlpCertificate
          document={{
            ...llpCertificate,
            changeOfNameDate: undefined
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText(/.*name change effective from/)).toBeNull();
    });
    it("should display change of name date section when there is change of name date available", () => {
      const { queryByText } = render(
        <LlpCertificate
          document={{
            ...llpCertificate,
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
        <LlpCertificate
          document={{
            ...llpCertificate,
            formerNames: []
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("The limited liability partnership was formerly known as:")).toBeNull();
    });
  });
});
