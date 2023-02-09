import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { accounts, homeChartOptions, toggleInfoBtns, stats, timeSortOptions } from "../data/dummy";
import { InfoType, TimeSortType } from "../models/models";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../styles/pages/Home.sass";
import { returnChartData } from "../utils/returnChartData";

const Home = () => {
  console.log("Render");
  const [currentInfo, setCurrentInfo] = useState<InfoType>("Expences");
  const [timeSort, setTimeSort] = useState<TimeSortType>("Day");

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const infoBtnHandler = (value: InfoType) => {
    if (currentInfo !== value) {
      setCurrentInfo(value);
    }
  };

  const timeSortBtnHandler = (value: TimeSortType) => {
    if (timeSort !== value) {
      setTimeSort(value);
    }
  };

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__btns">
          {toggleInfoBtns.map(({ value, id }) => (
            <button
              onClick={() => infoBtnHandler(value)}
              className={clsx(value === currentInfo ? "active" : "")}
              key={id}
            >
              {value}
            </button>
          ))}
        </div>
      </header>
      <div className="home__diagram">
        <h2 className="home__diagram-title">{`${currentInfo}`}</h2>
        <div className="home__diagram-body">
          <Bar options={homeChartOptions} data={returnChartData(currentInfo)} />
        </div>
      </div>
      <div className="home__sort">
        {timeSortOptions.map((item) => (
          <button
            className={clsx(timeSort === item ? "active" : "")}
            onClick={() => timeSortBtnHandler(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="home__stats">
        <ul className="home__stats-list">
          {stats.map(({ id, title, category, price }) => (
            <li className="home__stats-item" key={id}>
              <div>
                <span className="home__stats-item-title">{`${title + ", " + price + "$"}`}</span>
                <span className="home__stats-item-category">| {category}</span>
              </div>
              <div className="home__stats-item-btns">
                <button className="home__stats-item-btn edit">{<AiOutlineEdit />}</button>
                <button className="home__stats-item-btn delete">{<AiOutlineDelete />}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
