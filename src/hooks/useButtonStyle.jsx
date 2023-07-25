import { useState, useEffect } from "react";

export function useButtonStyle() {
  const [buttonStyle, setButtonStyle] = useState({});

  const setStyle = () => {
    setButtonStyle({
      boxShadow: "8px 8px 0 0 #fff",
      transition: "box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out",
    });
    setTimeout(() => {
      setButtonStyle({
        boxShadow: "4px 4px 0 0 #fff",
        transition: "box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out",
      });
    }, 100);
  };

  useEffect(() => {
    setButtonStyle({});
  }, []);

  return { buttonStyle, setStyle };
}
