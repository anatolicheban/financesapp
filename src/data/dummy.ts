import {
  Account,
  CateegoriesTypeItem,
  CategoryItemType,
  ExchangerOption,
  ToggleInfoBtn,
  KeyboardValue,
  SidebarLink,
  StatsItem,
} from "../models/models";
import { AiOutlineHome } from "react-icons/ai";
import { ChartOptions } from "chart.js/dist/types/index";
import { BiCategoryAlt } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { ChartData } from "chart.js";
import { RiAccountCircleFill } from "react-icons/ri";
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
    path: "/exchange",
    title: "Exchanger",
    Icon: BsCurrencyExchange,
  },
  {
    id: 4,
    title: "Add",
    path: "/add",
    Icon: IoAddCircleOutline,
  },
  {
    id: 5,
    title: "My profile",
    path: "/profile",
    Icon: RiAccountCircleFill,
  },
  {
    id: 6,
    title: "Settings",
    path: "/settings",
    Icon: IoMdSettings,
  },
];

export const toggleInfoBtns: ToggleInfoBtn[] = [
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

export const categoriesList: CategoryItemType[] = [
  {
    id: 1,
    title: "Clothes",
  },
  {
    id: 2,
    title: "Cars",
  },
  {
    id: 3,
    title: "Dishes",
  },
  {
    id: 4,
    title: "Clothes",
  },
  {
    id: 5,
    title: "Toys",
  },
  {
    id: 6,
    title: "BlaBla",
  },
  {
    id: 7,
    title: "TerePere",
  },
  {
    id: 8,
    title: "EbuCheEto",
  },
];

export const exchangerOptions: ExchangerOption[] = [
  {
    id: 1,
    value: "usd",
    title: "US Dollar",
  },
  {
    id: 2,
    value: "eur",
    title: "European Euro",
  },
  {
    id: 3,
    value: "uah",
    title: "Ukrainian Hryvnia",
  },
];

export const keyboard: KeyboardValue[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

export const categoriesTypes: CateegoriesTypeItem[] = [
  {
    id: 1,
    value: "Expences",
  },
  {
    id: 2,
    value: "Income",
  },
];

export const categories: CategoryItemType[] = [
  {
    id: 1,
    title: "test 1",
  },
  {
    id: 2,
    title: "test 2",
  },
  {
    id: 3,
    title: "test 3",
  },
  {
    id: 4,
    title: "test 4",
  },
  {
    id: 5,
    title: "test 5",
  },
  {
    id: 6,
    title: "test 6",
  },
];
