import React, {createContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
  const [data, setData] = useState('');
  useEffect(() => {
    const getInfo = async () => {
      const user = await firestore();
      const collections = await user.collection('Tests');
      const docs = await collections.doc('testing');
      const info = await docs.get();
      setData(info._data.rafael);
    };
    getInfo();
  });
  return (
    <GlobalContext.Provider value={{data}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
