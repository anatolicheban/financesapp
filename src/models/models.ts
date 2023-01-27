import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export type SidebarLink = {
  id: number;
  path: string;
  title: string;
  Icon: IconType;
};

export type HomeInfo = "Expences" | "Income";

export type HomeInfoBtn = {
  id: number;
  value: HomeInfo;
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
