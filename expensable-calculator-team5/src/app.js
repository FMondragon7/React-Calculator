/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Calculator from "./components/calculator";

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
  width: 256px;
  height: 50px;
  background: #06b6d4;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const expenseDescriptionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 104px;
  height: 40px;
  left: 60px;
  top: 5px;
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
  height: 283px;
  background: #e5e7eb;
  border: 1px solid #e5e7eb;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

function App() {
  return (
    <main css={appStyle}>
      <section css={addExpenseStyle}>
        <div css={expenseDescriptionStyle}>
          <label css={expenseP1Style}>Add expense to</label>
          <label css={expenseP2Style}>Groceries</label>
        </div>
      </section>
      <section css={calculatorStyle}>
        <Calculator />
      </section>
    </main>
  );
}

export default App;
