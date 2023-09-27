import { css } from "@emotion/react";

export const container = css`
  display: flex;
  margin-top: 49px;
  width: 100%;
  column-gap: 50px;
`;

export const image = css`
  height: 262px;
  width: 20%;
  object-fit: contain;
  border-radius: 20px;
  border: 5px solid #4310ae;
`;

export const data = css`
  border-radius: 10.256px;
  border: 1px solid rgba(237, 237, 237, 0.49);
  background: linear-gradient(
    241deg,
    #f9f6ff 4.4%,
    rgba(255, 255, 255, 0.53) 119.94%
  );
  box-shadow: -10px 10px 20px 0px rgba(67, 16, 174, 0.12);
  backdrop-filter: blur(13px);
  width: 80%;
`;
