import { useEffect, useState } from "react";
import { keyboard } from "../data/dummy";
import { KeyboardValue } from "../models/models";

export const useKeyboard = () => {
  const [currentKey, setCurrentKey] = useState<KeyboardValue | "">("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentKey("");
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [currentKey]);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      const key = e.key as KeyboardValue;
      if (keyboard.includes(key)) {
        setCurrentKey(key);
      }
    };
    const keyUpHandler = () => {
      setCurrentKey("");
    };

    window.addEventListener("keyup", keyUpHandler);
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keyup", keyUpHandler);
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return {
    currentKey,
    setCurrentKey,
  };
};
