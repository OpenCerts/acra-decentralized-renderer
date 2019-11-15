import { companyCertificate } from "../samples";
import { render } from "@testing-library/react";
import React from "react";
import { CompanyCertificate } from "./company.certificate";

describe("company certificate", () => {
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
