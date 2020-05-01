import React, {createContext, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export const TestContext = createContext();

export const TestContextProvider = props => {
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
    <TestContext.Provider value={{data}}>{props.children}</TestContext.Provider>
  );
};
