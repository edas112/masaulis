import { useState, createContext, useEffect } from 'react';

import { Await } from 'react-router-dom';
import { cfg } from './AppContext';
export const AppContext = createContext();
export { cfg } from '../cfg/cfg';

function AppContextProvider(props) {
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const fetchData = async () => {
    try {
      setLoadingProduct(true);
      const response = await fetch(`${cfg.API.HOST}/paslaugos`);
      console.log('response', response);
      const products = await response.json();
      console.log('data', products);
      const filteredData = products.filter(
        (item) => !cardData.some((cardItem) => cardItem.title === item.title)
      );
      setData(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProduct(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loadingProduct,
        data,
        setData,
        cardData,
        setCardData,
        fetchData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
