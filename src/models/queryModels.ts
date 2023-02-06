import { Currency } from "./models";

export interface ExchangerQuery {
  from: Currency;
  to: Currency;
  amount?: number;
}

export interface ExchangerResponse {
  result: number;
}
