export const currencySymbol = (currency: string) =>
  currency.split("-")[0].trim();
export const currencyName = (currency: string) => currency.split("-")[1].trim();

export const calculatedValue = (
  currencyRate: number | undefined,
  amount: number
) => (currencyRate ? (amount * currencyRate).toFixed(4) : 0);
