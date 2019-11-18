import { llpCertificate } from "../samples";
import { render } from "@testing-library/react";
import React from "react";
import { LlpCertificate } from "./llp.certificate";

describe("llp certificate", () => {
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
