import CurrencyConversionValue from "./CurrencyConversionValue";
import FromCurrencyValue from "./FromCurrencyValue";

interface IProps {
  currencyRateFrom: number | undefined;
  currencyRateTo: number | undefined;
  currencyFrom: string;
  amount: number;
  currencyTo: string;
}

const Conversion = ({
  currencyRateFrom,
  currencyRateTo,
  currencyFrom,
  amount,
  currencyTo,
}: IProps) => {
  return (
    <div>
      <FromCurrencyValue
        currencyRateFrom={currencyRateFrom}
        currencyFrom={currencyFrom}
        amount={amount}
        currencyTo={currencyTo}
      />
      <CurrencyConversionValue
        currencyFrom={currencyFrom}
        currencyRateFrom={currencyRateFrom}
        currencyRateTo={currencyRateTo}
        currencyTo={currencyTo}
      />
    </div>
  );
};

export default Conversion;
