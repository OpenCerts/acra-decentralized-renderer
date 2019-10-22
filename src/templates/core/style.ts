import { css } from "@emotion/core";

const rowHeight = "30px";
export const globalStyle = css`padding: 1rem;
  & * {
    box-sizing: border-box;
  }
  & > div, & > p {
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
    height: ${rowHeight};
    margin-bottom 10em;
  }
  
  table.dunno td {
    border: 1px solid #c0c0c0;
    padding-left: 0.4rem;
  }
  table.dunno td.no-border {
    border: none;
  }
  `;
