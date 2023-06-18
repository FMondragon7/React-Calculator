/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const outputStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 20px;
  gap: 10px;
  width: auto;
  height: 50px;
  background: #ffffff;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const outputLabelStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: auto;
  height: 28px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const dollarStyle = css`
  width: 13px;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #4b5563;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const resultStyle = css`
  width: auto;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #4b5563;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

function Output() {
  return (
    <section css={outputStyle}>
      <div css={outputLabelStyle}>
        <label css={dollarStyle}>$</label>
        <label css={resultStyle}>1</label>
      </div>
    </section>
  );
}

export default Output;
