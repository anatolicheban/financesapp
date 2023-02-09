import { ChartData } from "chart.js";
import { InfoType } from "../models/models";

export function returnChartData(info: InfoType): ChartData<"bar", number[], string> {
  return {
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
        label: info,
        data: [1000, 760, 90, 678, 763, 385, 457, 897, 453, 764, 900, 1100],
        backgroundColor: "#F26C6C",
      },
    ],
  };
}
