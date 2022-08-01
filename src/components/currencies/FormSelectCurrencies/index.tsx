import { ICurrencies } from "../../../interface/currency/currency";
import IconChangeCurency from "../../../assets/icons/icon-change.png";

import "./style.css";

interface IProps {
  currencies: ICurrencies | {};
}

const FormSelectCurrencies: React.FC<IProps> = ({ currencies }) => {
  const convertCurrenciesToArray = Object.entries(currencies);

  return (
    <div className="form__container">
      <form className="form">
        <label htmlFor="amount">Amount</label>
        <input
          className="form__input"
          id="amount"
          type="number"
          name="amount"
        />
        <label htmlFor="currency-from">From:</label>
        <div className="form__container-select-from">
          <select
            className="form__input"
            name="currency-from"
            id="currency-from"
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
        <select className="form__input" name="currency-to" id="currency-to">
          {convertCurrenciesToArray.map(([key, value]) => (
            <option key={key} value={value.name}>
              {value.symbol + " - " + value.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default FormSelectCurrencies;
