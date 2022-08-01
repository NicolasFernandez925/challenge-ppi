import { ICurrencies } from "../../../interface/currency/currency";

import "./style.css";

interface IProps {
  currencies: ICurrencies | {};
}

const FormSelectCurrencies: React.FC<IProps> = ({ currencies }) => {
  const convertCurrenciesToArray = Object.entries(currencies);

  return (
    <div>
      <form>
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" name="amount" />
        <label htmlFor="currency-from">From</label>
        <select name="currency-from" id="currency-from">
          {convertCurrenciesToArray.map(([key, value]) => (
            <option key={key} value={value.name}>
              {key + " - " + value.name}
            </option>
          ))}
        </select>
        <label htmlFor="currency-to">To</label>
        <select name="currency-to" id="currency-to">
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
