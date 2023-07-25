import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import "./App.css";
import reducer from "./utils/calcReducer";
import Output from "./components/Output";
import ClearButton from "./components/ClearButton";
import DeleteButton from "./components/DeleteButton";
import EvaluateButton from "./components/EvaluateButton";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-wrapper">
      <div className="calculator-grid">
        <Output
          currentOperand={currentOperand}
          previousOperand={previousOperand}
          operation={operation}
        />
        <ClearButton value="AC" dispatch={dispatch} />
        <DeleteButton value="DEL" dispatch={dispatch} />
        <OperationButton operation="/" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <EvaluateButton value="=" dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
