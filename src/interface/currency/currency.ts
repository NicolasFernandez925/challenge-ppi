interface Currency {
  name: string;
  symbol: string;
}

export interface ICurrencies {
  [key: string]: Currency;
}
