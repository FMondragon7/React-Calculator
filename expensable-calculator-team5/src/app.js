/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const calculatorStyle = css`
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

function App() {
  return (
    <div css={calculatorStyle}>
      <div css={addExpenseStyle}>Add expense to Groseries</div>
    </div>
  );
}

export default App;
