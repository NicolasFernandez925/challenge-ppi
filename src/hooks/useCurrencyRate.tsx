import { useCallback, useEffect, useState } from "react";
import { Currency as ApiCurrency } from "../services/Currency";

export const useCurrencyRates = (
  currencySymbolFrom: string,
  currencySymbolTo: string
) => {
  const [currencyRateFrom, setCurrencyRateFrom] = useState<number | undefined>(
    undefined
  );
  const [currencyRateTo, setCurrencyRateTo] = useState<number | undefined>(
    undefined
  );

  const getCurrencyRate = useCallback(async () => {
    try {
      const currencyRateFrom = await ApiCurrency.getCurrencyRate(
        currencySymbolFrom
      );
      const currencyRateTo = await ApiCurrency.getCurrencyRate(
        currencySymbolTo
      );
      if (!currencyRateFrom.ok || !currencyRateTo.ok) {
        throw new Error("An error occurred.");
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
  }, [currencySymbolTo, currencySymbolFrom]);

  useEffect(() => {
    getCurrencyRate();
  }, [getCurrencyRate]);

  return {
    currencyRateTo,
    currencyRateFrom,
  };
};
