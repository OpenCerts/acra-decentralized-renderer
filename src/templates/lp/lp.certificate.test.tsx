import { lpCertificate } from "../samples";
import { render } from "@testing-library/react";
import React from "react";
import { LpCertificate } from "./lp.certificate";

describe("lp certificate", () => {
  describe("formers", () => {
    it("should hide formers names section when there is no former names available", () => {
      const { queryByText } = render(
        <LpCertificate
          document={{
            ...lpCertificate,
            formerNames: []
          }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("The limited partnership was formerly known as:")).toBeNull();
    });
  });
});
