import { useState, createContext, useEffect } from 'react';

import { cfg } from './AppContext';
import Paslaugos from '../components/Paslaugos/Paslaugos';
export const AppContext = createContext();
export { cfg } from '../cfg/cfg';

function AppContextProvider(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [loadingPaslaugos, setLoadingPaslaugos] = useState(true);
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const fetchData = async () => {
    try {
      setLoadingPaslaugos(true);
      const response = await fetch(`${cfg.API.HOST}/paslaugos`);
      console.log('response', response);
      const paslaugos = await response.json();
      console.log('data', paslaugos);
      const filteredData = paslaugos.filter(
        (item) => !cardData.some((cardItem) => cardItem.title === item.title)
      );
      setData(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPaslaugos(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loadingPaslaugos,
        data,
        setData,
        cardData,
        setCardData,
        fetchData,
        showLogin,
        setShowLogin,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
