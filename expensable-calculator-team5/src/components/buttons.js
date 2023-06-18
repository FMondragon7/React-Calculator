/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import calendarImage from "../assets/calendar.png";
import deleteImage from "../assets/delete.png";
import { ReactComponent as CheckImage } from "../assets/check.svg";
import { ReactComponent as EqualImage } from "../assets/equal.svg";

const gridStyle = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 1px;
  width: auto;
  height: 203px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const columnStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1px;
  width: 50px;
  height: 203px;
  flex: none;
  flex-grow: 0;
`;

const buttonStyle = css`
  display: flex;
  width: 50px;
  height: 50px;
  background: #f3f4f6;
  flex: none;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover {
    background: #abb2b9;
  }
  &:active {
    background: #9a9ea2;
  }
`;

const labelStyle = css`
  width: auto;
  height: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #4b5563;
`;

const bigButtonStyle = css`
  width: 50px;
  height: 101px;
  background: #06b6d4;
  align-items: center;
  justify-content: center;
  flex: none;
  flex-grow: 0;
  border: none;
  &:hover {
    background: #0982a0;
  }
  &:active {
    background: #0d738e;
  }
`;

const calendarStyle = css`
  width: 16.67px;
  height: 16.67px;
`;

const deleteStyle = css`
  width: 19.97px;
  height: 15px;
`;

const checkStyle = css`
  width: 16.67px;
  height: 13.33px;
`;

const equalStyle = css`
  width: 13.33px;
  height: 9.17px;
`;

function Buttons() {
  return (
    <section name="buttons" css={gridStyle}>
      <div
        name="operations"
        css={css`
          ${columnStyle} order: 0;
        `}
      >
        <button
          name="division"
          css={css`
            ${buttonStyle} order: 0;
          `}
        >
          <label name="÷" css={labelStyle}>
            ÷
          </label>
        </button>
        <button
          name="multiplier"
          css={css`
            ${buttonStyle} order: 1;
          `}
        >
          <label name="×" css={labelStyle}>
            ×
          </label>
        </button>
        <button
          name="subtract"
          css={css`
            ${buttonStyle} order: 2;
          `}
        >
          <label name="-" css={labelStyle}>
            -
          </label>
        </button>
        <button
          name="Add"
          css={css`
            ${buttonStyle} order: 3;
          `}
        >
          <label name="+" css={labelStyle}>
            +
          </label>
        </button>
      </div>
      <div
        name="number-column-1"
        css={css`
          ${columnStyle} order: 0;
        `}
      >
        <button
          name="number-1"
          css={css`
            ${buttonStyle} order: 0;
          `}
        >
          <label name="1" css={labelStyle}>
            1
          </label>
        </button>
        <button
          name="number-4"
          css={css`
            ${buttonStyle} order: 1;
          `}
        >
          <label name="4" css={labelStyle}>
            4
          </label>
        </button>
        <button
          name="number-7"
          css={css`
            ${buttonStyle} order: 2;
          `}
        >
          <label name="7" css={labelStyle}>
            7
          </label>
        </button>
        <button
          name="calendar-button"
          css={css`
            ${buttonStyle} order: 3;
          `}
        >
          <img
            src={calendarImage}
            name="calendar"
            css={calendarStyle}
            alt="calendar image"
          />
        </button>
      </div>
      <div
        name="numbers-column-2"
        css={css`
          ${columnStyle} order:0;
        `}
      >
        <button
          name="number-2"
          css={css`
            ${buttonStyle} order: 0;
          `}
        >
          <label name="2" css={labelStyle}>
            2
          </label>
        </button>
        <button
          name="number-5"
          css={css`
            ${buttonStyle} order: 1;
          `}
        >
          <label name="5" css={labelStyle}>
            5
          </label>
        </button>
        <button
          name="number-8"
          css={css`
            ${buttonStyle} order: 2;
          `}
        >
          <label name="8" css={labelStyle}>
            8
          </label>
        </button>
        <button
          name="number-0"
          css={css`
            ${buttonStyle} order: 3;
          `}
        >
          <label name="0" css={labelStyle}>
            0
          </label>
        </button>
      </div>
      <div
        name="numbers-column-3"
        css={css`
          ${columnStyle} order: 0;
        `}
      >
        <button
          name="number-3"
          css={css`
            ${buttonStyle} order: 0;
          `}
        >
          <label name="3" css={labelStyle}>
            3
          </label>
        </button>
        <button
          name="number-6"
          css={css`
            ${buttonStyle} order: 1;
          `}
        >
          <label name="6" css={labelStyle}>
            6
          </label>
        </button>
        <button
          name="number-9"
          css={css`
            ${buttonStyle} order: 2;
          `}
        >
          <label name="9" css={labelStyle}>
            9
          </label>
        </button>
        <button
          name="decimal-point"
          css={css`
            ${buttonStyle} order: 3;
          `}
        >
          <label name="." css={labelStyle}>
            .
          </label>
        </button>
      </div>
      <div
        name="results-operands"
        css={css`
          ${columnStyle} order: 0;
        `}
      >
        <button
          name="delete-button"
          css={css`
            ${buttonStyle} order: 0;
          `}
        >
          <img
            src={deleteImage}
            name="delete"
            css={deleteStyle}
            alt="delete image"
          />
        </button>
        <button
          name="clear"
          css={css`
            ${buttonStyle} order: 1;
          `}
        >
          <label name="c" css={labelStyle}>
            c
          </label>
        </button>
        <button
          name="check/equal-button"
          css={css`
            ${bigButtonStyle} order: 2;
          `}
        >
          <CheckImage name="check/equal" css={checkStyle} />
        </button>
      </div>
    </section>
  );
}

export default Buttons;
