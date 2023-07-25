import ACTIONS from "../utils/ACTIONS";

const ClearButton = ({ dispatch, value }) => {
  const handleClick = () => {
    dispatch({ type: ACTIONS.CLEAR });
    window.location.reload();
  };
  return (
    <button className="span-two" onClick={handleClick}>
      {value}
    </button>
  );
};

export default ClearButton;
