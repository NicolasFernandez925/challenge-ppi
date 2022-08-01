import { BASE_URL } from "../../constants/api";

export class Currency {
  static async getCurrencies(): Promise<Response> {
    return await fetch(BASE_URL + "currencies");
  }
}
