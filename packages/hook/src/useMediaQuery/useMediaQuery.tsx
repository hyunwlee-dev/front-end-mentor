import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);
  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);
    console.log('helllo world!!!!!');
    if (media.matches) setTargetReached(true);
    return () => media.removeEventListener('change', updateTarget);
  }, []);

  return targetReached;
};

export { useMediaQuery };
