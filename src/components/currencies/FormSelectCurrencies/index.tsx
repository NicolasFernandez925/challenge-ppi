import { ICurrencies } from "../../../interface/currency/currency";
import IntlCurrencyInput from "react-intl-currency-input";
import IconChangeCurency from "../../../assets/icons/icon-change.png";

import "./style.css";

interface IProps {
  currencies: ICurrencies | {};
  handleChangeAmount: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
  handleChangeFrom: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeTo: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  exchangeCurrencies: (currencyFrom: string, currencyTo: string) => void;
  currencyTo: string;
  currencyFrom: string;
  amount: number;
}

const FormSelectCurrencies: React.FC<IProps> = ({
  currencies,
  handleChangeAmount,
  handleChangeFrom,
  handleChangeTo,
  exchangeCurrencies,
  currencyTo,
  currencyFrom,
  amount,
}) => {
  const convertCurrenciesToArray = Object.entries(currencies);

  const currencyOptions = (): React.ReactNode => {
    return convertCurrenciesToArray.map(([key, value]) => (
      <option key={key} value={key + " - " + value.name}>
        {key + " - " + value.name}
      </option>
    ));
  };

  return (
    <div className="form__container">
      <form className="form">
        <label htmlFor="amount">Amount</label>
        <IntlCurrencyInput
          className="form__input position-right"
          onChange={handleChangeAmount}
          defaultValue={amount}
        />
        <label htmlFor="currency-from">From:</label>
        <div className="form__container-select-from">
          <select
            className="form__input"
            name="currency-from"
            id="currency-from"
            onChange={handleChangeFrom}
            value={currencyFrom}
          >
            {currencyOptions()}
          </select>
          <img
            onClick={() => exchangeCurrencies(currencyFrom, currencyTo)}
            className="form__icon-change-currency"
            src={IconChangeCurency}
            alt="change-currency"
          />
        </div>

        <label htmlFor="currency-to">To:</label>
        <select
          className="form__input"
          name="currency-to"
          id="currency-to"
          onChange={handleChangeTo}
          value={currencyTo}
        >
          {currencyOptions()}
        </select>
      </form>
    </div>
  );
};

export default FormSelectCurrencies;
