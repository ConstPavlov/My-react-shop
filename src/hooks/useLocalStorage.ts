import React, { useState } from 'react';

interface ILocSt<T, U> {
  (key: T, initialValue: U): any;
}



export const useLocalStorage: ILocSt<string, any> = (key: string, initialValue: any): any => {
  const [value, setValue] = useState<any>(() => {
    try {
      const localData = localStorage.getItem(key);
      if (localData !== null) {
        return JSON.parse(localData);
      }
      return initialValue;
    } catch (error) {
      console.error(error, 'Problem with parse LocalStorage');
      return initialValue;
    }
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
