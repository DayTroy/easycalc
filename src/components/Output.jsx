import formatOperand from "../utils/formatOperand";
const Output = ({previousOperand, operation, currentOperand}) => {
  return (
    <div className="output">
      <div className="previous-operand">
        {formatOperand(previousOperand)} {operation}
      </div>
      <div className="current-operand">{formatOperand(currentOperand)}</div>
    </div>
  );
};

export default Output;
