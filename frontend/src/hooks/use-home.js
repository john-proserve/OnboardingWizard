import { useOutletContext } from 'react-router-dom';

export const useHome = home => {
  const [isHome, setIsHome] = useOutletContext();
  setIsHome(home);
};
