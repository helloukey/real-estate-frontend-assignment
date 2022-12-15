// hooks
import { useState } from "react";

const usePriceFormatter = () => {
  const [number, setNumber] = useState(null);

  const formatNumber = (userNumber) => {
    if (userNumber < 1e3) return setNumber(userNumber);
    if (userNumber >= 1e3)
      return setNumber(+(userNumber / 1e3).toFixed(1) + "K");
  };

  return { number, formatNumber };
};

export default usePriceFormatter;
