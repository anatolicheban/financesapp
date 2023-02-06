import clsx from "clsx";
import React, { useState, useEffect, useRef, Dispatch } from "react";
import "styles/pages/Exchange.sass";
import Input from "../components/UI/Input";
import { exchangerOptions, keyboard } from "../data/dummy";
import { FaExchangeAlt } from "react-icons/fa";
import { IoBackspaceOutline } from "react-icons/io5";
import { Currency, KeyboardValue } from "../models/models";
import { useKeyboard } from "../hooks/useKeyboard";
import { useGetRatesQuery } from "../features/exchanger/exchangerApiSlice";

const Exchange = () => {
  const { currentKey, setCurrentKey } = useKeyboard();

  const [baseInput, setBaseInput] = useState("1");
  const [resultText, setResultText] = useState("576");
  const [base, setBase] = useState<Currency>("usd");
  const [result, setResult] = useState<Currency>("uah");
  const [isBaseOpen, setIsBaseOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const { data, isLoading } = useGetRatesQuery({ from: base, to: result });

  const baseRef = useRef<HTMLButtonElement>(null);
  const resultRef = useRef<HTMLButtonElement>(null);

  const currentBaseTitle = exchangerOptions.find((item) => item.value === base)?.title;
  const currentResultTitle = exchangerOptions.find((item) => item.value === result)?.title;

  const keyboardBtnHandler = (value: KeyboardValue) => {
    setBaseInput((prev) => (prev += value));
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target !== baseRef.current) {
        setIsBaseOpen(false);
      }
      if (e.target !== resultRef.current) {
        setIsResultOpen(false);
      }
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const reverseOptionsHandler = () => {
    const buff: Currency = base;
    setBase(result);
    setResult(buff);
  };

  useEffect(() => {
    console.log("!");
    let resultData = data?.result;
    if (resultData) {
      setResultText((resultData * +baseInput).toString());
    }
    if (!baseInput) {
      setResultText("0");
    }
  }, [data, base, result, baseInput]);

  return (
    <div className="exchange">
      <h1 className="exchange__title">Exchanger</h1>
      <div className="exchange__result">
        <div>{data?.result ? resultText + " " + result.toUpperCase() : "--"}</div>
        <span>Result</span>
      </div>
      <form className="exchange__form">
        <Input
          id="exchange__base-input"
          type={"number"}
          label={"Base"}
          value={baseInput}
          onChange={setBaseInput}
          InputClassName="exchange__input"
        />
      </form>
      <div className="exchange__options">
        <div className="exchange__options-base">
          <button onClick={() => setIsBaseOpen((prev) => !prev)} ref={baseRef}>
            {currentBaseTitle}
          </button>
          {isBaseOpen && (
            <ul>
              {exchangerOptions.map(({ id, title, value }) => (
                <li
                  onClick={() => setBase(value)}
                  className={clsx(value === base ? "active" : "")}
                  key={id}
                >
                  {title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <span onClick={reverseOptionsHandler} className="exchange__reverse">
          <FaExchangeAlt />
        </span>
        <div className="exchange__options-result">
          <button onClick={() => setIsResultOpen((prev) => !prev)} ref={resultRef}>
            {currentResultTitle}
          </button>
          {isResultOpen && (
            <ul>
              {exchangerOptions.map(({ id, title, value }) => (
                <li
                  onClick={() => setResult(value)}
                  className={clsx(value === result ? "active" : "")}
                  key={id}
                >
                  {title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="exchange__keyboard">
        {keyboard.map((item) => {
          return (
            <button
              onClick={() => keyboardBtnHandler(item)}
              className={clsx(currentKey === item ? "active" : "")}
              key={item}
            >
              {item}
            </button>
          );
        })}
        <button onClick={() => setBaseInput((prev) => prev.slice(0, -1))} className="backspace">
          <IoBackspaceOutline />
        </button>
        <button onClick={() => setBaseInput("")} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Exchange;
