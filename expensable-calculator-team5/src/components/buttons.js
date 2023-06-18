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
  cursor: pointer;
  width: 50px;
  height: 50px;
  background: #f3f4f6;
  flex: none;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover,
  &:focus {
    background: #abb2b9;
    outline: none;
  }
  &:active {
    background: #9a9ea2;
  }
`;

const labelStyle = css`
  cursor: pointer;
  pointer-events: none;
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
  cursor: pointer;
  width: 50px;
  height: 101px;
  background: #06b6d4;
  align-items: center;
  justify-content: center;
  flex: none;
  flex-grow: 0;
  border: none;
  &:hover,
  &:focus {
    background: #0982a0;
    outline: none;
  }
  &:active {
    background: #0d738e;
  }
`;

const calendarStyle = css`
  cursor: pointer;
  width: 16.67px;
  height: 16.67px;
`;

const deleteStyle = css`
  cursor: pointer;
  pointer-events: none;
  width: 19.97px;
  height: 15px;
`;

const checkStyle = css`
  cursor: pointer;
  pointer-events: none;
  width: 16.67px;
  height: 13.33px;
`;

const equalStyle = css`
  cursor: pointer;
  pointer-events: none;
  width: 13.33px;
  height: 9.17px;
`;

function Buttons({ ...props }) {
  function handleButtonClick(name) {
    props.onButtonClick(name);
  }

  function handleOperationClick(name) {
    props.onOperationClick(name);
  }

  function handleClearClick() {
    props.onClearClick();
  }

  function handlePeriodClick(name) {
    props.onPeriodClick(name);
  }

  return (
    <section name="buttons" css={gridStyle}>
      <div
        name="operations"
        css={css`
          ${columnStyle} order: 0;
        `}
      >
        <button
          name="÷"
          css={css`
            ${buttonStyle} order: 0;
          `}
          onClick={(event) => handleOperationClick(event.target.name)}
        >
          <label name="division" css={labelStyle}>
            ÷
          </label>
        </button>
        <button
          name="×"
          css={css`
            ${buttonStyle} order: 1;
          `}
          onClick={(event) => handleOperationClick(event.target.name)}
        >
          <label name="multiplier" css={labelStyle}>
            ×
          </label>
        </button>
        <button
          name="-"
          css={css`
            ${buttonStyle} order: 2;
          `}
          onClick={(event) => handleOperationClick(event.target.name)}
        >
          <label name="subtract" css={labelStyle}>
            -
          </label>
        </button>
        <button
          name="+"
          css={css`
            ${buttonStyle} order: 3;
          `}
          onClick={(event) => handleOperationClick(event.target.name)}
        >
          <label name="add" css={labelStyle}>
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
          name="1"
          css={css`
            ${buttonStyle} order: 0;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-1" css={labelStyle}>
            1
          </label>
        </button>
        <button
          name="4"
          css={css`
            ${buttonStyle} order: 1;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-4" css={labelStyle}>
            4
          </label>
        </button>
        <button
          name="7"
          css={css`
            ${buttonStyle} order: 2;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-7" css={labelStyle}>
            7
          </label>
        </button>
        <button
          name="calendar"
          css={css`
            ${buttonStyle} order: 3;
          `}
        >
          <img
            src={calendarImage}
            name="calendar-img"
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
          name="2"
          css={css`
            ${buttonStyle} order: 0;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-2" css={labelStyle}>
            2
          </label>
        </button>
        <button
          name="5"
          css={css`
            ${buttonStyle} order: 1;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-5" css={labelStyle}>
            5
          </label>
        </button>
        <button
          name="8"
          css={css`
            ${buttonStyle} order: 2;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-8" css={labelStyle}>
            8
          </label>
        </button>
        <button
          name="0"
          css={css`
            ${buttonStyle} order: 3;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-0" css={labelStyle}>
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
          name="3"
          css={css`
            ${buttonStyle} order: 0;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-3" css={labelStyle}>
            3
          </label>
        </button>
        <button
          name="6"
          css={css`
            ${buttonStyle} order: 1;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-6" css={labelStyle}>
            6
          </label>
        </button>
        <button
          name="9"
          css={css`
            ${buttonStyle} order: 2;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <label name="number-9" css={labelStyle}>
            9
          </label>
        </button>
        <button
          name="."
          css={css`
            ${buttonStyle} order: 3;
          `}
          onClick={(event) => handlePeriodClick(event.target.name)}
        >
          <label name="decimal-point" css={labelStyle}>
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
          name="delete"
          css={css`
            ${buttonStyle} order: 0;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <img
            src={deleteImage}
            name="delete-img"
            css={deleteStyle}
            alt="delete image"
          />
        </button>
        <button
          name="c"
          css={css`
            ${buttonStyle} order: 1;
          `}
          onClick={() => handleClearClick()}
        >
          <label name="clear" css={labelStyle}>
            c
          </label>
        </button>
        <button
          name="check/equal"
          css={css`
            ${bigButtonStyle} order: 2;
          `}
          onClick={(event) => handleButtonClick(event.target.name)}
        >
          <CheckImage name="check/equal-img" css={checkStyle} />
        </button>
      </div>
    </section>
  );
}

export default Buttons;
