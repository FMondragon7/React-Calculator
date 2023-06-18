/** @jsxImportSource @emotion/react */
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
  height: 50px;
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
  height: 279px;
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
        <Output />
        <Buttons />
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
