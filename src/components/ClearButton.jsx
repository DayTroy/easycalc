import ACTIONS from "../utils/ACTIONS";
import { useButtonStyle } from "../hooks/useButtonStyle";

const ClearButton = ({ dispatch, value }) => {
  const { buttonStyle, setStyle } = useButtonStyle();
  const handleClick = () => {
    dispatch({ type: ACTIONS.CLEAR });
    setStyle();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };
  return (
    <button style={buttonStyle} className="span-two" onClick={handleClick}>
      {value}
    </button>
  );
};

export default ClearButton;
