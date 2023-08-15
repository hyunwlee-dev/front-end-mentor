import { createContext, useState, useMemo, useContext, ReactNode } from 'react';

interface IDirectionState {
  direction: number;
  setDirection: React.Dispatch<React.SetStateAction<number>>;
  exitDirection: number;
  setExitDirection: React.Dispatch<React.SetStateAction<number>>;
}

const DirectionStateContext = createContext<IDirectionState | null>(null);
DirectionStateContext.displayName = 'DirectionStateContext';

interface DirectionContextProviderProps {
  children: ReactNode;
}

const DirectionContextProvider: React.FC<DirectionContextProviderProps> = ({ children }) => {
  const [direction, setDirection] = useState<number>(1000);
  const [exitDirection, setExitDirection] = useState<number>(0);
  const directionStateValue = useMemo(
    () => ({
      direction,
      setDirection,
      exitDirection,
      setExitDirection,
    }),
    [direction, exitDirection]
  );

  return <DirectionStateContext.Provider value={directionStateValue}>{children}</DirectionStateContext.Provider>;
};

const useDirectionState = (): IDirectionState => {
  const directionState = useContext(DirectionStateContext);
  if (!directionState) {
    throw new ReferenceError('useDirectionState 훅은 DirectionState 컨텍스트 내부에서만 호출해야 합니다.');
  }
  return directionState;
};

export { DirectionContextProvider, useDirectionState };
