import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => {
  const [value, setValue] = useState<T>(() => {
    const localValue = localStorage.getItem(key);
    if (localValue != null) {
      return JSON.parse(localValue) as T;
    } else {
      return initialValue as T;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as [typeof value, typeof setValue];
};
