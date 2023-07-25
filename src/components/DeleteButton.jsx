import React, { useEffect } from "react";
import ACTIONS from "../utils/ACTIONS";

const DeleteButton = ({ dispatch, value }) => {
  const handleClick = () => {
    dispatch({ type: ACTIONS.DELETE_DIGIT })
  };
  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      handleClick();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
  return <button onClick={handleClick}>{value}</button>;
};

export default DeleteButton;
