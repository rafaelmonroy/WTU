import React, {createContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import GOOGLE_API from '../config/keys';

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
  const gKey = GOOGLE_API.key;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBars = async () => {
      const bars = await firestore();
      const collections = await bars.collection('Bars');
      const docs = await collections.get();
      //create new instance of data
      const newData = docs._docs;
      //fetch coords
      for (let i = 0; i < newData.length; i++) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${
            newData[i]._data.address
          }&key=${gKey}`,
        );
        const json = await response.json();
        //destruct and rename properties
        const {
          lat: latitude,
          lng: longitude,
        } = json.results[0].geometry.location;
        //add new properties to new instance of data created
        newData[i]._data.coords = {latitude, longitude};
      }
      setData(newData);
    };
    getBars();
  }, []);

  return (
    <GlobalContext.Provider value={{data}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
