import { css } from "@emotion/core";
import certificateBackground from "../images/certificate-background.jpg";

export const globalStyle = css`
  padding: 1rem;
  max-width: 1140px;
  margin: auto;
  & * {
    box-sizing: border-box;
  }
  & > div,
  & > p {
    margin-left: 5px;
    margin-right: 5px;
  }
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: separate;
    border-spacing: 5px 5px;
    word-break: break-all;
  }
  table th {
    background-color: #c0c0c0;
  }
  table tr {
    height: 30px;
  }
  table.complex-table td {
    border: 1px solid #c0c0c0;
    padding-left: 0.4rem;
  }
  table td.no-border {
    border: none;
  }
  .nationality {
    word-break: break-word;
  }
`;

export const globalCertificateStyle = css`
  width: 100%;
  line-height: 30px;
  position: relative;
  .certificate {
    margin: auto;
    width: 827px;
    height: 1169px;
    background-image: url('${certificateBackground}');
    padding: 40px 80px 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo {
    height: auto;
    width: 300px;
  }
  .logo-container {
    text-align: center;
  }
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .concerning {
    font-weight: bold;
    margin-top: 10px;
  }
  .concerning > div > div:first-of-type {
    min-width: 200px;
    width: 200px;
  }
  table {
    width: 100%;
    text-align: left;
  }
  table th:nth-of-type(1) {
    width: 30px;
  }
  table th:nth-of-type(3) {
    width: 110px;
  }
  table th:nth-of-type(2),
  table td:nth-of-type(2) {
    padding-left: 10px;
  }
  .note {
    line-height: 20px;
    font-size: 13px;
  }
  .signature {
    margin-bottom: 20px;
  }
`;
