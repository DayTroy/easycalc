import React from "react";
import ACTIONS from "../utils/ACTIONS.JS";
import { useEffect } from "react";
import { useButtonStyle } from "../hooks/useButtonStyle";

export default function OperationButton({ dispatch, operation }) {
  const { buttonStyle, setStyle } = useButtonStyle();

  const handleClick = () => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { operation: operation },
    });
    setStyle();
  };
  const handleKeyDown = (event) => {
    if (event.key === operation) {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {operation}
    </button>
  );
}
