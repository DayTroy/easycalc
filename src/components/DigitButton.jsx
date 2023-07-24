import React, { useEffect } from "react";
import ACTIONS from "../utils/ACTIONS.JS";

export default function DigitButton({ dispatch, digit }) {
  const handleKeyDown = (event) => {
    if (!isNaN(event.key) && event.key === digit) {
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: digit } });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
  
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
