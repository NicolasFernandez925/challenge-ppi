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
  currencyTo: string;
  currencyFrom: string;
  amount: number;
}

const FormSelectCurrencies: React.FC<IProps> = ({
  currencies,
  handleChangeAmount,
  handleChangeFrom,
  handleChangeTo,
  currencyTo,
  currencyFrom,
  amount,
}) => {
  const convertCurrenciesToArray = Object.entries(currencies);

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
            {convertCurrenciesToArray.map(([key, value]) => (
              <option key={key} value={value.name}>
                {key + " - " + value.name}
              </option>
            ))}
          </select>
          <img
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
          {convertCurrenciesToArray.map(([key, value]) => (
            <option key={key} value={value.name}>
              {key + " - " + value.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default FormSelectCurrencies;
