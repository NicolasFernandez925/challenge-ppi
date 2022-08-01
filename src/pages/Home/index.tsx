import { useEffect, useState } from "react";
import Banner from "../../assets/images/banner.png";
import Alert from "../../components/common/Alert";
import Conversion from "../../components/currencies/Conversion";
import FormSelectCurrencies from "../../components/currencies/FormSelectCurrencies";
import { ICurrencies } from "../../interface/currency/currency";
import { Currency } from "../../services/Currency";

import "./style.css";

const Home = () => {
  const [currencies, setCurrencies] = useState<ICurrencies | {}>({});
  const [amount, setAmount] = useState<number>(1);
  const [currencyFrom, setCurrencyFrom] = useState<string>("US Dollar");
  const [currencyTo, setCurrencyTo] = useState<string>("eur - Euro");

  const getCurrencies = async () => {
    try {
      const response = await Currency.getCurrencies();
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const responseToJSON = await response.json();
      setCurrencies(responseToJSON);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    setAmount(value);
  };

  const handleChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCurrencyFrom(value);
  };

  const handleChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCurrencyTo(value);
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="exchange">
      <img className="exchange__banner" src={Banner} alt="banner" />
      <h1>Convert 1 Euro to Canadian Dollar - EUR to CA$</h1>
      <div className="exchange__container">
        <div className="echange__currencies">
          <FormSelectCurrencies
            currencies={currencies}
            handleChangeAmount={handleChangeAmount}
            handleChangeFrom={handleChangeFrom}
            handleChangeTo={handleChangeTo}
            amount={amount}
            currencyTo={currencyTo}
            currencyFrom={currencyFrom}
          />
          <div>
            <Conversion />
            <Alert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
