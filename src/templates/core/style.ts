import { css } from "@emotion/core";

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
  table.dunno td {
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
