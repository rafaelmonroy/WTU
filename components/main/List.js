import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GlobalContext} from '../../contexts/GlobalContext';

const List = () => {
  const {data} = useContext(GlobalContext);

  return (
    <View style={styles.main}>
      <Text style={styles.text}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#f00',
  },
});

export default List;
