import React, { useEffect } from "react";
import ACTIONS from "../utils/ACTIONS";
import { useButtonStyle } from "../hooks/useButtonStyle";

const EvaluateButton = ({ dispatch, value }) => {
  const { buttonStyle, setStyle } = useButtonStyle();
  const handleClick = () => {
    dispatch({ type: ACTIONS.EVALUATE });
    setStyle();
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
    <button style={buttonStyle} className="span-two" onClick={handleClick}>
      {value}
    </button>
  );
};

export default EvaluateButton;
