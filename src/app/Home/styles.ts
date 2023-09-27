import { css } from "@emotion/react";

export const container = css`
  color: #000;
  font-family: Roboto, sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  direction: ltr;
  overflow: auto;
  flex-direction: column;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  row-gap: 74px;
  position: relative;
  bottom: 5vh;
`;

export const main = css`
  background: #efeff4;
`;
