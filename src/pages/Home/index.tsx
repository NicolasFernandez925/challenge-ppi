import { useCallback, useEffect, useState } from "react";
import Banner from "../../assets/images/banner.png";
import Alert from "../../components/common/Alert";
import Conversion from "../../components/currencies/Conversion";
import FormSelectCurrencies from "../../components/currencies/FormSelectCurrencies";
import { ICurrencies } from "../../interface/currency/currency";
import { Currency as ApiCurrency } from "../../services/Currency";
import { currencyName, currencySymbol } from "../../utils";

import "./style.css";

enum Currency {
  USD = "USD - US Dollar",
  EUR = "EUR - Euro",
}

const Home = () => {
  const [currencies, setCurrencies] = useState<ICurrencies | {}>({});
  const [amount, setAmount] = useState<number>(1);
  const [currencyFrom, setCurrencyFrom] = useState<string>(Currency.USD);
  const [currencyTo, setCurrencyTo] = useState<string>(Currency.EUR);
  const [currencyRateFrom, setCurrencyRateFrom] = useState<number | undefined>(
    undefined
  );
  const [currencyRateTo, setCurrencyRateTo] = useState<number | undefined>(
    undefined
  );

  const getCurrencies = useCallback(async () => {
    try {
      const response = await ApiCurrency.getCurrencies();
      if (!response.ok) {
        throw new Error("An error occurred");
      }
      const responseToJSON = await response.json();
      setCurrencies(responseToJSON);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCurrencyRate = useCallback(async () => {
    const currencySymbolFrom = currencySymbol(currencyFrom);
    const currencySymbolTo = currencySymbol(currencyTo);
    try {
      const currencyRateFrom = await ApiCurrency.getCurrencyRate(
        currencySymbolFrom
      );
      const currencyRateTo = await ApiCurrency.getCurrencyRate(
        currencySymbolTo
      );
      if (!currencyRateFrom.ok || !currencyRateTo.ok) {
        throw new Error("An error occurred");
      }
      const responseToJSONFrom = await currencyRateFrom.json();
      const responseToJSONTo = await currencyRateTo.json();

      const valueConvertTo = responseToJSONFrom.rates[currencySymbolTo];
      const valueConvertFrom = responseToJSONTo.rates[currencySymbolFrom];

      setCurrencyRateFrom(valueConvertTo);
      setCurrencyRateTo(valueConvertFrom);
    } catch (error) {
      console.log(error);
    }
  }, [currencyTo, currencyFrom]);

  const handleChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    event.preventDefault();
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

  const exchangeCurrencies = (currencyFrom: string, currencyTo: string) => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
  };

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  useEffect(() => {
    getCurrencyRate();
  }, [getCurrencyRate]);

  return (
    <div className="exchange">
      <img className="exchange__banner" src={Banner} alt="banner" />
      <h1>
        Convert {amount} {currencyName(currencyFrom)} to{" "}
        {currencyName(currencyTo)} - {currencySymbol(currencyFrom)} to{" "}
        {currencySymbol(currencyTo)}
      </h1>
      <div className="exchange__container">
        <div className="echange__currencies">
          <FormSelectCurrencies
            currencies={currencies}
            handleChangeAmount={handleChangeAmount}
            handleChangeFrom={handleChangeFrom}
            handleChangeTo={handleChangeTo}
            exchangeCurrencies={exchangeCurrencies}
            amount={amount}
            currencyTo={currencyTo}
            currencyFrom={currencyFrom}
          />
          <div>
            <Conversion
              currencyRateFrom={currencyRateFrom}
              currencyFrom={currencyFrom}
              amount={amount}
              currencyRateTo={currencyRateTo}
              currencyTo={currencyTo}
            />
            <Alert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
