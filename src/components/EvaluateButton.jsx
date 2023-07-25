import React, { useEffect } from "react";
import ACTIONS from "../utils/ACTIONS";

const EvaluateButton = ({ dispatch, value }) => {
  const handleClick = () => {
    dispatch({ type: ACTIONS.EVALUATE });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <button className="span-two" onClick={handleClick}>
      {value}
    </button>
  );
};

export default EvaluateButton;
