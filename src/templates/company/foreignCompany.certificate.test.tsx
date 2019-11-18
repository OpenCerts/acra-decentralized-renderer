import { foreignCompanyCertificate } from "../samples";
import { render } from "@testing-library/react";
import React from "react";
import { ForeignCompanyCertificate } from "./foreignCompany.certificate";

describe("foreign company certificate", () => {
  describe("formers", () => {
    it("should hide formers names section when there is no former names available", () => {
      const { queryByText } = render(
        <ForeignCompanyCertificate
          document={{
            ...foreignCompanyCertificate,
            formerNames: []
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("The foreign company was formerly known as:")).toBeNull();
    });
  });
});
