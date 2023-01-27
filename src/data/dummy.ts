import { Account, HomeInfo, HomeInfoBtn, SidebarLink, StatsItem } from "../models/models";
import { AiOutlineHome, AiOutlineMoneyCollect, AiOutlineCodeSandbox } from "react-icons/ai";
import { ChartOptions } from "chart.js/dist/types/index";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { ChartData } from "chart.js";
export const sidebarLinks: SidebarLink[] = [
  {
    id: 1,
    path: "/",
    title: "Home",
    Icon: AiOutlineHome,
  },
  {
    id: 2,
    path: "/categories",
    title: "Categories",
    Icon: BiCategoryAlt,
  },
  {
    id: 3,
    path: "/exchanger",
    title: "Exchanger",
    Icon: BsCurrencyExchange,
  },
];

export const homeInfoBtns: HomeInfoBtn[] = [
  {
    id: 1,
    value: "Expences",
  },
  {
    id: 2,
    value: "Income",
  },
];

export const accounts: Account[] = [
  {
    id: 1,
    name: "Test Account",
    total: "2000",
  },
  {
    id: 2,
    name: "Sec Account",
    total: "2540",
  },
  {
    id: 3,
    name: "Third Account",
    total: "24500",
  },
];

export const stats: StatsItem[] = [
  {
    id: 1,
    title: "Apples",
    category: "Meals",
    price: "10",
  },
  {
    id: 2,
    title: "Car",
    category: "Big Buy",
    price: "10000",
  },
  {
    id: 3,
    title: "T-Shirt",
    category: "Clothes",
    price: "25",
  },
  {
    id: 4,
    title: "House",
    category: "Rent",
    price: "1000",
  },
];

export const homeChartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

export const homeChartData: ChartData<"bar", number[], string> = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Income",
      data: [1000, 760, 90, 678, 763, 385, 457, 897, 453, 764, 900, 1100],
      backgroundColor: "#F26C6C",
    },
  ],
};
