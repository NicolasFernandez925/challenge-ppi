import { calculatedValue, currencyName, currencySymbol } from "../../../utils";

import "./style.css";

interface IProps {
  currencyRateFrom: number | undefined;
  currencyRateTo: number | undefined;
  amount: number;
  currency: Record<string, string>;
}

const Conversion = ({
  currencyRateFrom,
  currencyRateTo,
  amount,
  currency,
}: IProps) => {
  return (
    <>
      <div className="from-currency-value">
        <h3 className="from-currency-value__value-from">
          {amount} {currencySymbol(currency.currencyFrom)} =
        </h3>
        <h2 className="from-currency-value__value-to">
          {calculatedValue(currencyRateFrom, amount)}{" "}
          {currencyName(currency.currencyTo)}
        </h2>
      </div>
      <div className="conversion">
        <h3 className="conversion__value-to">
          1 {currencySymbol(currency.currencyTo)} = {currencyRateTo?.toFixed(4)}{" "}
          {currencySymbol(currency.currencyFrom)}
        </h3>
        <h3 className="conversion__value-from">
          1 {currencySymbol(currency.currencyFrom)} ={" "}
          {currencyRateFrom?.toFixed(4)} {currencySymbol(currency.currencyTo)}
        </h3>
      </div>
    </>
  );
};

export default Conversion;
