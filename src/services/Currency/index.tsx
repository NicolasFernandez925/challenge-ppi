import { BASE_URL } from "../../constants/api";

export class Currency {
  static async getCurrencies(): Promise<Response> {
    return await fetch(BASE_URL + "currencies");
  }

  static async getCurrencyRate(symbolCurrency: string): Promise<Response> {
    return await fetch(BASE_URL + `rates?base=${symbolCurrency}`);
  }
}
