import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TestContext } from '../../contexts/TestContext';

const List = () => {
    const {books} = useContext(TestContext)
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Test</Text>
        <ScrollView>
          {books.map(book => {
            return (
              <Text key={book.id}>
                {book.title}
              </Text>
            )
          })}
        </ScrollView>
      </View>
    );
  
}

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