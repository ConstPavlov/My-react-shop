import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type TypeOut = {
  ref: any;
  ref2El: any;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};
export const useOutside = (initialVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initialVisible);
  const ref = useRef<HTMLElement>(null);
  const ref2El = useRef<HTMLElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(e.target as Node) &&
      ref2El.current &&
      !ref2El.current.contains(e.target as Node)
    ) {
      console.log('click outside');
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { ref, ref2El, isShow, setIsShow };
};
