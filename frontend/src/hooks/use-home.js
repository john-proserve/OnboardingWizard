import { useOutletContext } from 'react-router-dom';

export const useHome = home => {
  const [, setIsHome] = useOutletContext();
  setIsHome(home);
};
