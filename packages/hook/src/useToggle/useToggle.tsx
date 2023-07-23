import { useCallback, useState } from 'react';

interface IToggle {
  visible: boolean;
  toggle: () => void;
  setToggleStatus: (value: string) => void;
}

const useToggle = (initialState: boolean = false): IToggle => {
  const [visible, setVisibility] = useState<boolean>(initialState);
  const toggle = useCallback(() => setVisibility((prev: boolean) => !prev), []);
  const setToggleStatus = useCallback((value: string) => setVisibility(Boolean(value)), []);
  return { visible, toggle, setToggleStatus };
};

export { useToggle };
