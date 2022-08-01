import {
  calculatedValue,
  currencyName,
  currencySymbol,
} from "../../../../utils";
import "./style.css";

interface IProps {
  currencyRateFrom: number | undefined;
  currencyFrom: string;
  amount: number;
  currencyTo: string;
}

const FromCurrencyValue = ({
  currencyRateFrom,
  currencyFrom,
  currencyTo,
  amount,
}: IProps) => {
  return (
    <div className="from-currency-value">
      <h3 className="from-currency-value__value-from">
        {amount} {currencySymbol(currencyFrom)} =
      </h3>
      <h2 className="from-currency-value__value-to">
        {calculatedValue(currencyRateFrom, amount)} {currencyName(currencyTo)}
      </h2>
    </div>
  );
};

export default FromCurrencyValue;
