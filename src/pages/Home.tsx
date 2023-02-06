import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { accounts, homeChartData, homeChartOptions, toggleInfoBtns, stats } from "../data/dummy";
import { InfoType, ToggleInfoBtn } from "../models/models";
import { IoIosArrowBack } from "react-icons/io";
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

const Home = () => {
  const [currentInfo, setCurrentInfo] = useState<InfoType>("Expences");
  const [account, setAccount] = useState(accounts[0].name);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);
  const accountsBtnRef = useRef<HTMLButtonElement>(null);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target !== accountsBtnRef.current) {
        setIsAccountsOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const infoBtnHandler = (value: InfoType) => {
    if (currentInfo !== value) {
      setCurrentInfo(value);
    }
  };

  const accountBtnHandler = () => {
    setIsAccountsOpen((prev) => !prev);
  };

  const setAccountBtnHandler = (value: string) => {
    if (account !== value) {
      setAccount(value);
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
        <h2 className="home__diagram-title">{`${account + " " + currentInfo}`}</h2>
        <div className="home__diagram-body">
          <Bar options={homeChartOptions} data={homeChartData} />
        </div>
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
