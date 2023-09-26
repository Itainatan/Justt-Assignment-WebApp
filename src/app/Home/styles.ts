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

export const input = css`
  color: black;
  .MuiInputLabel-root {
    color: #6a806c !important;
  }
  .MuiInputBase-root {
    border-radius: 8px;
    padding: 0;
    color: black;
    input {
      &:-webkit-autofill {
        -webkit-box-shadow: unset;
        -webkit-text-fill-color: unset;
      }
    }
    fieldset {
      border-color: rgba(0, 0, 0, 0.23) !important;

      &:hover {
        background-color: rgba(0, 0, 0, 0.23);
      }
      &:focus {
        background-color: rgba(0, 0, 0, 0.23);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.23);
      }
      &:disabled {
        color: rgba(0, 0, 0, 0.23);
        pointer-events: none;
      }
      &::placeholder {
        color: rgba(0, 0, 0, 0.23);
      }
    }
  }
`;

export const submitButton = css`
  background-color: #6a806c !important;
  margin-left: 20px;
`;

export const dataContainer = css`
  display: flex;
  column-gap: 100px;
  margin-top: 50px;
  flex-flow: row wrap;
  position: relative;
  row-gap: 20px;
`;

export const form = css`
  display: flex;
  height: "min-content";
  width: 450px;
  column-gap: 20px;
  align-items: center;
`;
