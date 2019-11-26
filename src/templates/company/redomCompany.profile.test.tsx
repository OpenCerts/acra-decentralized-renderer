import { render } from "@testing-library/react";
import { RedomCompanyProfile } from "./redomCompany.profile";
import { redomCompanyProfile } from "../samples";
import React from "react";

describe("redom companies", () => {
  describe("registration condition", () => {
    it("should hide registration condition header if there is no registration condition", () => {
      const { queryByText } = render(
        <RedomCompanyProfile
          document={{ ...redomCompanyProfile, registrationCondition: undefined }}
          handleObfuscation={() => 0}
        />
      );
      expect(queryByText("Condition(s) of Registration Imposed Under Section 359(2)")).toBeNull();
    });
    it("should display registration condition  header if there is registration condition", () => {
      const { queryByText } = render(
        <RedomCompanyProfile document={{ ...redomCompanyProfile }} handleObfuscation={() => 0} />
      );
      // eslint-disable-next-line jest/no-truthy-falsy
      expect(queryByText("Condition(s) of Registration Imposed Under Section 359(2)")).toBeTruthy();
    });
  });
});
