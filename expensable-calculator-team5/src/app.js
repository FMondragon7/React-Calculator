/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Output from "./components/output";
import Buttons from "./components/buttons";
import { ReactComponent as ShoppingCarImage } from "./assets/shopping-car.svg";

const appStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 256px;
  height: 333px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const addExpenseStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: #06b6d4;
  flex: none;
  order: 0;
  flex-grow: 0;
  gap: 8px;
  padding: 5px 12px;
`;

const expenseDescriptionStyle = css`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const expenseP1Style = css`
  width: 104px;
  height: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const expenseP2Style = css`
  width: 104px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const calculatorStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px;
  gap: 1px;
  width: 256px;
  min-height: 279px;
  background: #e5e7eb;
  border: 1px solid #e5e7eb;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const dateStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  gap: 10px;
  width: auto;
  height: 26px;
  background: #f3f4f6;
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

const dateLabelStyle = css`
  width: auto;
  height: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #4b5563;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

function App() {
  const [state, setState] = React.useState({
    prevNumber: null,
    operant: null,
    currentNumber: "0",
    current: false,
  });

  const data = [state.prevNumber, state.operant, state.currentNumber];

  function handleButtonClick(value) {
    if (state.currentNumber === "0" && value === "0") return;
    if (state.currentNumber === "0" || !state.currentNumber) {
      setState({ ...state, currentNumber: value });
    } else {
      setState({ ...state, currentNumber: (state.currentNumber += value) });
    }
    return;
  }

  function handleOperationClick(value) {
    if (state.currentNumber !== "0" && !state.prevNumber) {
      setState({
        ...state,
        prevNumber: state.currentNumber,
        operant: value,
        currentNumber: null,
        current: true,
      });
    }
  }

  function handleClearClick() {
    setState({
      ...state,
      prevNumber: null,
      operant: null,
      currentNumber: "0",
      current: false,
    });
  }

  function handlePeriodClick(value) {
    if (!state.currentNumber) {
      setState({ ...state, currentNumber: "0." });
      return;
    }
    if (state.currentNumber.includes(".")) return;

    setState({ ...state, currentNumber: (state.currentNumber += value) });
  }

  function handleDeleteClick() {
    if (state.currentNumber === "0" && !state.operant && !state.prevNumber)
      return;
    if (!state.currentNumber) {
      setState({
        ...state,
        currentNumber: state.prevNumber,
        prevNumber: null,
        operant: null,
        current: false,
      });
      return;
    }
    if (
      state.currentNumber.length === 1 &&
      !state.operant &&
      !state.prevNumber
    ) {
      setState({ ...state, currentNumber: "0" });
      return;
    }
    setState({ ...state, currentNumber: state.currentNumber.slice(0, -1) });
  }

  return (
    <main css={appStyle}>
      <section css={addExpenseStyle}>
        <div css={expenseDescriptionStyle}>
          <ShoppingCarImage />
        </div>
        <div css={expenseDescriptionStyle}>
          <label css={expenseP1Style}>Add expense to</label>
          <label css={expenseP2Style}>Groceries</label>
        </div>
      </section>
      <section css={calculatorStyle}>
        <Output data={data} />
        <Buttons
          current={state.current}
          onDeleteClick={handleDeleteClick}
          onButtonClick={handleButtonClick}
          onOperationClick={handleOperationClick}
          onClearClick={handleClearClick}
          onPeriodClick={handlePeriodClick}
        />
      </section>
      <section css={dateStyle}>
        <p css={dateLabelStyle}>
          {new Date().toLocaleString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </section>
    </main>
  );
}

export default App;
