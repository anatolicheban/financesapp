import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export type SidebarLink = {
  id: number;
  path: string;
  title: string;
  Icon: IconType;
};

export type InfoType = "Expences" | "Income";

export type ToggleInfoBtn = {
  id: number;
  value: InfoType;
};

export type Account = {
  id: number;
  name: string;
  total: string;
};

export type StatsItem = {
  id: number;
  category: string;
  title: string;
  price: string;
};

export type CategoryItemType = {
  id: number;
  title: string;
};

export type ExchangerOption = {
  id: number;
  value: Currency;
  title: string;
};

export type Currency = "usd" | "uah" | "eur";

export type KeyboardValue = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";

export type CateegoriesTypeItem = {
  id: number;
  value: InfoType;
};

export type TimeSortType = "Day" | "Week" | "Month" | "Year";
