import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/core";

interface PrivacyBannerProps {
  /**
   * handler called when toggle edition is requested
   */
  onToggleEditable: () => void;
  className?: string;
}

const style = css`
  @media print {
    display: none;
  }
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 1rem;
  .icon {
    cursor: pointer;
  }
`;
/**
 * Banner with icon to toggle certificate obfuscation mode
 */
export const PrivacyBanner: FunctionComponent<PrivacyBannerProps> = ({ onToggleEditable, className = "" }) => (
  <div css={style} className={className}>
    <div className="text-container">
      <div>
        <h4>OpenCerts Privacy Filter Enabled</h4>
      </div>
      <div>
        You can edit this document by clicking on the edit button to remove sensitive information such as person&apos;s
        ID, nationality and address. Please look out for the <b>&quot;x&quot;</b> button available at the document to
        remove the information. The downloaded document remains valid.
      </div>
    </div>
    <h5 className="icon" onClick={onToggleEditable}>
      <FontAwesomeIcon icon={faEdit} title="toggle certificate obfuscation" />
    </h5>
  </div>
);
