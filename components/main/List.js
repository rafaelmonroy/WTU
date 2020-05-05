import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GlobalContext} from '../../contexts/GlobalContext';

const List = () => {
  const {data} = useContext(GlobalContext);

  return (
    <View style={styles.main}>
      {data.map(bar => {
        const id = bar._ref._documentPath._parts[1];
        const {name} = bar._data;
        return <Text key={id}>{name}</Text>;
      })}
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
