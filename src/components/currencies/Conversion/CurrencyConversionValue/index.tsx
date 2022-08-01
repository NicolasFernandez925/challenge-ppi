import { currencySymbol } from "../../../../utils";
import "./style.css";

interface IProps {
  currencyRateFrom: number | undefined;
  currencyRateTo: number | undefined;
  currencyFrom: string;
  currencyTo: string;
}

const CurrencyConversionValue = ({
  currencyFrom,
  currencyTo,
  currencyRateFrom,
  currencyRateTo,
}: IProps) => {
  return (
    <div className="conversion">
      <h3 className="conversion__value-to">
        1 {currencySymbol(currencyTo)} = {currencyRateTo?.toFixed(4)}{" "}
        {currencySymbol(currencyFrom)}
      </h3>
      <h3 className="conversion__value-from">
        1 {currencySymbol(currencyFrom)} = {currencyRateFrom?.toFixed(4)}{" "}
        {currencySymbol(currencyTo)}
      </h3>
    </div>
  );
};

export default CurrencyConversionValue;
