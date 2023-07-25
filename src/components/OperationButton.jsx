import React from "react";
import ACTIONS from "../utils/ACTIONS.JS";
import { useEffect } from "react";

export default function OperationButton({ dispatch, operation }) {
  const handleClick = () => {
    dispatch({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { operation: operation },
    });
  };
  const handleKeyDown = (event) => {
    if (event.key === operation) {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return <button onClick={handleClick}>{operation}</button>;
}
