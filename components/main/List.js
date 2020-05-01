import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TestContext} from '../../contexts/TestContext';

const List = () => {
  const {data} = useContext(TestContext);

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
