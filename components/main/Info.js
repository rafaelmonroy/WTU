import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Info extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Info Screen</Text>
      </View>
    );
  }
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
