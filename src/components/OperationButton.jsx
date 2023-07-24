import React from "react";
import ACTIONS from "../utils/ACTIONS.JS";
import { useEffect } from "react";

export default function OperationButton({ dispatch, operation }) {
  const handleKeyDown = (event) => {
    if (event.key === operation) {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: operation } });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
