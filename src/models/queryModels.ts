import { Currency } from "./models";

export interface ExchangerQuery {
  from: Currency;
  to: Currency;
  amount?: number;
}

export interface ExchangerResponse {
  result: number;
}

//POST
export interface PostIncomeExpenceReq {
  //userId: from jwt,
  title: string;
  type: "inc" | "exp";
  amount: number;
  category: string;
}

//GET
// /getitems?page=1
export interface GetIncomeExpenceResponceItem {
  id: string | number;
  title: string;
  category: string;
  amount: number;
  date: string;
}

//Users
export interface User {}
