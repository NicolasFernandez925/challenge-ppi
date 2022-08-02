import { useCallback, useEffect, useState } from "react";
import { Currency as ApiCurrency } from "../services/Currency";
import { ICurrencies } from "../interface/currency/currency";

export const useGetCurrencies = () => {
  const [currencies, setCurrencies] = useState<ICurrencies>({});

  const getCurrencies = useCallback(async () => {
    try {
      const response = await ApiCurrency.getCurrencies();
      if (!response.ok) {
        throw new Error("An error occurred.");
      }
      const responseToJSON = await response.json();
      setCurrencies(responseToJSON);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  return {
    currencies,
  };
};
