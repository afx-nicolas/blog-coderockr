import { useEffect, useState } from 'react';

type UseScreenSize = () => void;

type Screen = {
  width: number,
  height: number,
}

const useScreenSize = () => {
  const [screen, setScreen] = useState({} as Screen);

  const handleResize = () => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screen;
}

export default useScreenSize;
