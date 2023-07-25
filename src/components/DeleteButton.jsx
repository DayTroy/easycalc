import React, { useEffect } from "react";
import ACTIONS from "../utils/ACTIONS";
import { useButtonStyle } from "../hooks/useButtonStyle";

const DeleteButton = ({ dispatch, value }) => {
  const {buttonStyle, setStyle} = useButtonStyle();
  const handleClick = () => {
    dispatch({ type: ACTIONS.DELETE_DIGIT })
    setStyle()
  };
  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      handleClick();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
  return <button style={buttonStyle} onClick={handleClick}>{value}</button>;
};

export default DeleteButton;
