import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {GlobalContext} from '../../contexts/GlobalContext';

const List = () => {
  const {data} = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          const {name, address, day} = item._data;
          return (
            <View>
              <Text style={styles.itemTitle}>{name}</Text>
              <Text style={styles.item}>{address}</Text>
              <Text style={styles.item}>{day} Turn Up</Text>
              <View style={styles.line} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  itemTitle: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'red',
    fontWeight: '900',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});

export default List;
