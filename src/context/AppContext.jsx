import { useState, createContext, useEffect } from 'react';

import { cfg } from './AppContext';

export const AppContext = createContext();
export { cfg } from '../cfg/cfg';

function AppContextProvider(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [footerData, setFooterData] = useState(true);
  const [loadingPaslaugos, setLoadingPaslaugos] = useState(true);
  const [loadingFooterData, setLoadingFooterData] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoadingPaslaugos(true);
      const response = await fetch(`${cfg.API.HOST}/kortele`);
      console.log('response', response);
      const paslaugos = await response.json();
      console.log('data', paslaugos);
      const filteredData = paslaugos.filter(
        (item) => !data.some((dataItem) => dataItem.title === item.title)
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

  const fetchFooterData = async () => {
    try {
      setLoadingFooterData(true);
      const response = await fetch(`${cfg.API.HOST}/footer`);
      console.log('response', response);
      const footer = await response.json();
      console.log('data', footer);
      const singleData = footer[0];

      setFooterData(singleData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingFooterData(false);
    }
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  function getCurrentDateTime() {
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: 'Europe/Vilnius',
    };
    const formattedDate = currentDate.toLocaleDateString('lt-LT', options);
    return formattedDate;
  }

  return (
    <AppContext.Provider
      value={{
        loadingPaslaugos,
        getCurrentDateTime,
        data,
        setData,
        footerData,
        setFooterData,
        fetchData,
        showLogin,
        setShowLogin,
        fetchFooterData,
        loadingFooterData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
