import React, { useEffect } from "react";
import { useButtonStyle } from "../hooks/useButtonStyle";
import ACTIONS from "../utils/ACTIONS.JS";

export default function DigitButton({ dispatch, digit }) {
  const { buttonStyle, setStyle } = useButtonStyle();
  const handleClick = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: digit } });
    setStyle();
  };
  const handleKeyDown = (event) => {
    if (!isNaN(event.key) && event.key === digit) {
      handleClick();
    } else if (event.key === digit) {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {digit}
    </button>
  );
}
