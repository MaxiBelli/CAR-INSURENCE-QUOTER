import { useState, createContext } from "react";
import {
  getYearDifference,
  calculateBrand,
  calculatePlan,
  formatMoney,
} from "../helpers";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    let result = 2000; // Base price

    const yearDifference = getYearDifference(data.year); // Get year difference

    result -= (yearDifference * 3 * result) / 100; // Subtract 3% for each year

    result *= calculateBrand(data.brand); // European 30% - American 15% - Asian 5%

    result *= calculatePlan(data.plan); // Basic 20% Full 50%

    result = formatMoney(result); // Format Money

    setLoading(true);

    setTimeout(() => {
      setResult(result);
      setLoading(false);
    }, 3000);
  };

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
        result,
        loading,
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };
export default QuoterContext;
