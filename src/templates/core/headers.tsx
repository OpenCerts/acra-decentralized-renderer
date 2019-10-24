import React, { FunctionComponent, useEffect, useState } from "react";
import { css } from "@emotion/core";

const style = css`
  .disclaimer {
    margin-bottom: 1rem;
  }
  .profile {
    font-size: 1.1rem;
  }

  @media print {
    .alert {
      display: none;
    }
  }
  .alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .alert-primary {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
    text-align: center;
  }
`;
interface HeaderProps {
  type: string;
  businessName: string;
  registrationNumber: string;
  receiptDate: string;
  targetHash?: string;
}
interface StatusResponse {
  status: number;
}
export const Header: FunctionComponent<HeaderProps> = ({
  type,
  businessName,
  registrationNumber,
  receiptDate,
  targetHash
}) => {
  const [displayWarning, setDisplayWarning] = useState(false);

  useEffect(() => {
    if (targetHash) {
      fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(s => setDisplayWarning(s.joke));
      // fetch(`https://yx39x0dfne.execute-api.ap-southeast-1.amazonaws.com/dev/status/${targetHash}`)
      //   .then(response => response.json())
      //   .then(({ status }: StatusResponse) => {
      //     if (status === 1) {
      //       setDisplayWarning(true);
      //     }
      //   });
    }
  }, [targetHash]);
  // There exists a more recent version of this document. For more information, please visit{" "}
  // <a href="https://www.acra.gov.sg">www.acra.gov.sg</a>.
  return (
    <div css={style}>
      {displayWarning && (
        <div className="alert alert-primary" role="alert">
          {displayWarning}
        </div>
      )}
      <div className="ttu b disclaimer">
        Whilst every endeavor is made to ensure that information provided is updated and correct. the authority
        disclaims any liability for any damage or loss that may be caused as a result of any error or omission
      </div>
      <div
        className="b flex justify-between"
        css={css`
          margin-bottom: 1rem;
        `}
      >
        <div className="profile">
          Business Profile ({type}) of {businessName} ({registrationNumber})
        </div>
        <div>Date: {receiptDate}</div>
      </div>
    </div>
  );
};
