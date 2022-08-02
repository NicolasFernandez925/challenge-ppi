interface Currency {
  name: string;
  symbol: string;
}

export interface ICurrencies {
  [index: string]: Currency;
}
