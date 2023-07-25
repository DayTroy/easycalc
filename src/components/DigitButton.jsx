import React, { useEffect, useRef } from "react";
import ACTIONS from "../utils/ACTIONS.JS";

export default function DigitButton({ dispatch, digit }) {
  const handleClick = () => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: digit } });
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

  return <button onClick={handleClick}>{digit}</button>;
}
