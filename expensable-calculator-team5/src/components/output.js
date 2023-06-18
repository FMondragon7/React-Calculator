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
  min-height: 50px;
  background: #ffffff;
  order: 0;
  align-self: stretch;
`;

const outputLabelStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: auto;
  min-height: 28px;
  order: 0;
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
  order: 0;
`;

const resultStyle = css`
  width: auto;
  min-height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #4b5563;
  order: 1;
  word-wrap: break-word;
  word-break: break-all;
`;

function Output({ data }) {
  const operation = data.filter((element) => element !== null).join("");

  return (
    <section css={outputStyle}>
      <div css={outputLabelStyle}>
        <label css={dollarStyle}>$</label>
        <label css={resultStyle}>{operation}</label>
      </div>
    </section>
  );
}

export default Output;
