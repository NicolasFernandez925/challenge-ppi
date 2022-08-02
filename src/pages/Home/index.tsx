import { useState } from "react";
import Banner from "../../assets/images/banner.png";
import Alert from "../../components/common/Alert";
import Conversion from "../../components/currencies/Conversion";
import FormSelectCurrencies from "../../components/currencies/FormSelectCurrencies";
import { useCurrencyRates } from "../../hooks/useCurrencyRate";
import { useGetCurrencies } from "../../hooks/useGetCurrencies";
import { currencyName, currencySymbol } from "../../utils";

import "./style.css";

enum Currency {
  USD = "USD - US Dollar",
  EUR = "EUR - Euro",
}

const Home = () => {
  const [amount, setAmount] = useState<number>(1);
  const [currency, setCurrency] = useState<Record<string, string>>({
    currencyTo: Currency.EUR,
    currencyFrom: Currency.USD,
  });

  const { currencies } = useGetCurrencies();

  const { currencyRateTo, currencyRateFrom } = useCurrencyRates(
    currencySymbol(currency.currencyFrom),
    currencySymbol(currency.currencyTo)
  );

  const handleChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => {
    event.preventDefault();
    setAmount(value);
  };

  const handleChangeCurrencies = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    setCurrency((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const exchangeCurrencies = (currencyFrom: string, currencyTo: string) => {
    setCurrency((prev) => {
      return {
        ...prev,
        currencyTo: currencyFrom,
      };
    });
    setCurrency((prev) => {
      return {
        ...prev,
        currencyFrom: currencyTo,
      };
    });
  };

  return (
    <div className="exchange">
      <img className="exchange__banner" src={Banner} alt="banner" />
      <h1>
        Convert {amount} {currencyName(currency.currencyFrom)} to{" "}
        {currencyName(currency.currencyTo)} -{" "}
        {currencySymbol(currency.currencyFrom)} to{" "}
        {currencySymbol(currency.currencyTo)}
      </h1>
      <div className="exchange__container">
        <div className="echange__currencies">
          <FormSelectCurrencies
            currencies={currencies}
            handleChangeAmount={handleChangeAmount}
            handleChangeCurrencies={handleChangeCurrencies}
            exchangeCurrencies={exchangeCurrencies}
            amount={amount}
            currency={currency}
          />
          <div>
            <Conversion
              currencyRateFrom={currencyRateFrom}
              currency={currency}
              amount={amount}
              currencyRateTo={currencyRateTo}
            />
            <Alert />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
