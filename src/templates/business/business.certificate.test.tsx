import { businessCertificate } from "../samples";
import { render } from "@testing-library/react";
import React from "react";
import { BusinessCertificate } from "./business.certificate";

describe("business certificate", () => {
  describe("formers", () => {
    it("should hide formers names section when there is no former names available", () => {
      const { queryByText } = render(
        <BusinessCertificate
          document={{
            ...businessCertificate,
            formerNames: []
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("The business name was formerly known as:")).toBeNull();
    });
  });
});
