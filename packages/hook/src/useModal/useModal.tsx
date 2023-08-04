import { useCallback, useEffect, useState } from 'react';

const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isShown) setIsShown(false);
  };
  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isShown]);
  return {
    isShown,
    toggle,
  };
};

export { useModal };
