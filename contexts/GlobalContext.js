import React, {createContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import GOOGLE_API from '../config/keys';

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
  const gKey = GOOGLE_API.key;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBars = async () => {
      const user = await firestore();
      const collections = await user.collection('Bars');
      const docs = await collections.doc('he6p1k8RZshW9ktEf9Ul');
      const info = await docs.get();
      //create new instance of data
      const newData = info._data;
      //fetch coords
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          newData.address
        }&key=${gKey}`,
      );
      const json = await response.json();
      //destruct and rename properties
      const {lat: latitude, lng: longitude} = json.results[0].geometry.location;
      //add new properties to new instance of data created
      newData.coords = {latitude, longitude};
      setData(newData);
    };
    getBars();

    const getTestData = async () => {
      const user = await firestore();
      const collections = await user.collection('Bars');
      const docs = await collections.get();
      console.log(docs);
    };
    getTestData();
  }, [data]);

  return (
    <GlobalContext.Provider value={{data}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
